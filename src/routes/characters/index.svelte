<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://rickandmortyapi.com/api/character`)
    const data = await res.json()
    const characters = data.results

    return {
      props: { characters }
    }
  }
</script>

<script>
  import CharacterItem from './_CharacterListItem.svelte'
  export let characters
</script>

<svelte:head>
  <title>Svelte & Morty - Characters</title>
</svelte:head>

{#if characters}
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-4">
        <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-white">Characters</h1>
        <div class="h-1 w-20 bg-red-500 rounded" />
      </div>
      <div class="flex flex-wrap -m-4">
        {#each characters as item (item.id)}
          <CharacterItem {item} />
        {/each}
      </div>
    </div>
  </section>
{/if}
