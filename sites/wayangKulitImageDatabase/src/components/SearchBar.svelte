<script>
  import { aliasesAtom, setAliasesAtom } from "../stores/wayangStore";
  const getAliases = async () => {
    const res = await fetch(
      "https://blooming-badlands-24637.herokuapp.com/aliases/?skip=0&limit=1000"
    );
    const data = await res.json();
    return data;
  };

  let allAliases = [];

  getAliases().then((aliases) => {
    setAliasesAtom(aliases);
  });

  let searchTerm = "";

  let filteredItems = [];
  $: {
    if (searchTerm) {
      filteredItems = $aliasesAtom.filter((item) =>
        item.alias.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    } else {
      filteredItems = $aliasesAtom;
    }
  }

  const onKeyDown = (e) => {
    switch (e.code) {
      case "Escape":
        searchTerm = "";
        break;
      case "ArrowUp":
        console.log("up");
        break;
      case "ArrowDown":
        console.log("down");
        break;
      case "Enter":
        console.log("Enter");
        break;
    }
  }
</script>

<h2>{filteredItems.length} / {$aliasesAtom.length}</h2>

<div class="relative">
  <input
    class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
    type="text"
    placeholder="filter items"
    disabled={$aliasesAtom.length ? false : true}
    bind:value={searchTerm}
    on:keydown={onKeyDown}
  />

  {#if searchTerm.length}
    <ul
      class="absolute px-2 w-full rounded-md border-gray-200 bg-neutral-50 list-none max-h-60 overflow-y-scroll"
    >
      {#each filteredItems as item}
        <a
          href={"https://blooming-badlands-24637.herokuapp.com/alias/?alias=" +
            item.alias}
          ><li class="px-2 rounded-md hover:bg-neutral-200">{item.alias}</li></a
        >
      {/each}
    </ul>
  {/if}
</div>
