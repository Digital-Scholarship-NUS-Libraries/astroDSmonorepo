<script context="module" lang="ts">
  import { Pool } from "geotiff";

  const pool = new Pool();

  /**
   * transform x/y/z to webmercator-bbox
   * @param x
   * @param y
   * @param z
   * @returns {number[]} [minx, miny, maxx, maxy]
   */
  const merc = (x: number, y: number, z: number): number[] => {
    const GEO_R = 6378137;
    const orgX = -1 * ((2 * GEO_R * Math.PI) / 2);
    const orgY = (2 * GEO_R * Math.PI) / 2;
    const unit = (2 * GEO_R * Math.PI) / Math.pow(2, z);
    const minx = orgX + x * unit;
    const maxx = orgX + (x + 1) * unit;
    const miny = orgY - (y + 1) * unit;
    const maxy = orgY - y * unit;
    return [minx, miny, maxx, maxy];
  };
  const tiffMap = new Map();
</script>

<script lang="ts">
  import { Layer } from "svelte-maplibre";
  import maplibregl, { RasterSourceSpecification } from "maplibre-gl";
  import { fromUrl } from "geotiff";
  import { encode } from "fast-png";
  import { onMount } from "svelte";

  export let cogURL: string;

  const generateCogSource = async (
    url: string
  ): Promise<{ source: RasterSourceSpecification }> => {
    if (!tiffMap.get(url.split("://")[1].split("/")[1])) {
      const tiff = await fromUrl(url);
      tiffMap.set(url.split("://")[1].split("/")[1], tiff);
      maplibregl.addProtocol("cog", (params, callback) => {
        const currentTiff = tiffMap.get(
          params.url.split("://")[1].split("/")[1]
        );
        const segments = params.url.split("/");
        const [z, x, y] = segments.slice(segments.length - 3).map(Number);
        const bbox = merc(x, y, z);
        const size = 256;
        currentTiff
          .readRasters({
            bbox,
            samples: [0, 1, 2, 3],
            width: size,
            height: size,
            interleave: true,
            pool,
          })
          .then((data) => {
            const img = new ImageData(
              //@ts-ignore
              new Uint8ClampedArray(data),
              size,
              size
            );
            const png = encode(img);
            callback(null, png, null, null);
          });
        return { cancel: () => {} };
      });
    }
    const source: RasterSourceSpecification = {
      type: "raster",
      tiles: [`cog://${url.split("://")[1]}/{z}/{x}/{y}`],
      tileSize: 256,
      minzoom: 6,
      maxzoom: 18,
    };
    return { source };
  };

  let source;

  onMount(async () => {
    const generatedSource = await generateCogSource(cogURL);
    ({ source } = generatedSource);
  });
</script>

<Layer type="raster" {source} beforeLayerType="circle" />
