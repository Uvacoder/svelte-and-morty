<script context="module">
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  export async function load({ fetch }) {
    const res = await fetch(`https://rickandmortyapi.com/api/location`)
    const data = await res.json()
    const locations = data.results

    return {
      props: { locations }
    }
  }
</script>

<script>
  export let locations
</script>

<svelte:head>
  <title>Svelte & Morty - Locations</title>
</svelte:head>

{#if locations}
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-4">
        <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-white">Locations</h1>
        <div class="h-1 w-20 bg-red-500 rounded" />
      </div>

      <div class="flex flex-wrap -m-4">
        {#each locations as item (item.id)}
          <div class="p-4 lg:w-1/3">
            <div
              class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative"
            >
              <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                <a
                  href="/locations/{item.id}"
                  class="transition-color duration-200 ease-in-out hover:text-red-400"
                  >{item.name}</a
                >
              </h1>
              <p class="leading-relaxed mb-3">
                {item.dimension === 'unknown' ? 'Unknown dimension' : item.dimension}
              </p>
              <div
                class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"
              >
                <span class="text-gray-500 inline-flex items-center leading-none text-sm pr-3 py-1">
                  <span class="text-red-400 mr-2">{item.residents.length}</span> Residents
                </span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
