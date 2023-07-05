<script lang="ts">
  import { onDestroy, tick } from "svelte";
  import { getId, updatedSourceContext } from "svelte-maplibre";
  import flush from "just-flush";

  export let id: string = getId("raster");
  export let tiles: string[];
  /** Generate a unique id for each feature. This will overwrite existing IDs. */
  export let generateId: boolean = false;
  /** Use this property on the feature as the ID. This will overwrite existing IDs. */
  export let promoteId: string | undefined = undefined;

  const { map, self: source } = updatedSourceContext();
  let sourceObj: maplibregl.RasterTileSource | undefined;

  let first = true;
  $: if ($map && $source !== id) {
    if ($source) {
      $map.removeSource($source);
    }

    $source = id;
    $map.addSource(
      $source,
      flush({
        type: "raster",
        tiles,
        generateId,
        promoteId,
      })
    );
    sourceObj = $map.getSource($source) as
      | maplibregl.RasterTileSource
      | undefined;
    first = true;
  }

  onDestroy(() => {
    if ($source) {
      let sourceName = $source;
      $source = null;
      sourceObj = undefined;
      tick().then(() => {
        // Check if the map is still loaded. If the entire map was being torn down
        // then we don't want to call any other functions on it.
        if ($map?.loaded()) {
          $map?.removeSource(sourceName);
        }
      });
    }
  });
</script>

{#if $source}
  {#key $source}
    <slot />
  {/key}
{/if}
