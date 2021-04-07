<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`https://rickandmortyapi.com/api/episode`)
    const data = await res.json()
    const episodes = data.results

    return {
      props: { episodes }
    }
  }
</script>

<script>
  import { getRandomImage } from '$lib/helpers'
  export let episodes
</script>

<svelte:head>
  <title>Svelte & Morty - Episodes</title>
</svelte:head>

{#if episodes}
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-4">
        <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-white">Episodes</h1>
        <div class="h-1 w-20 bg-red-500 rounded" />
      </div>
      <div class="flex flex-wrap -m-4">
        {#each episodes as item (item.id)}
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="/episodes/{item.id}" class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={getRandomImage()}
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.air_date}</h3>
              <a
                href="/episodes/{item.id}"
                class="text-white title-font text-lg font-medium transition-color duration-200 ease-in-out hover:text-red-400"
                >{item.episode}</a
              >
              <p class="mt-1">{item.name}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
