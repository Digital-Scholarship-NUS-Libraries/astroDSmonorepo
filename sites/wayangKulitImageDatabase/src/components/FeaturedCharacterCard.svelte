<script>
  export let cardData;
</script>

<div class="text-center bg-slate-100 rounded-t-md">
  <h3 class="mt-3">{cardData.canonical_name}</h3>
  <div class="max-w-full h-64 max-h-64 overflow-hidden rounded-b-md">
    <img
      src={cardData.images[0].url}
      alt={cardData.canonical_name}
      class="transition-all object-cover h-64 w-full m-0 hover:scale-125"
    />
  </div>
</div>
