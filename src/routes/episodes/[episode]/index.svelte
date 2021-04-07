<script context="module">
  export async function load({ page, fetch }) {
    const { episode } = page.params
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`)
    const episodeData = await res.json()
    return {
      props: { episodeData }
    }
  }
</script>

<script>
  import CharactersMiniList from '$lib/components/CharactersMiniList/List.svelte'
  import { getRandomLikes } from '$lib/helpers'
  export let episodeData
</script>

<svelte:head>
  <title>Svelte & Morty - Episode: {episodeData.name}</title>
</svelte:head>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-3xl mb-2 text-white">{episodeData.name}</h1>
        <div class="flex border-t border-gray-800 py-2">
          <span class="text-gray-500">Episode</span>
          <span class="ml-auto text-white">{episodeData.episode}</span>
        </div>
        <div class="flex border-t border-gray-800 py-2">
          <span class="text-gray-500">Air Date</span>
          <span class="ml-auto text-white">{episodeData.air_date}</span>
        </div>
        <div class="flex border-t border-gray-800 py-2">
          <span class="text-gray-500">❤️</span>
          <span class="ml-auto text-white">{getRandomLikes()}</span>
        </div>
      </div>
    </div>
    <div>
      <CharactersMiniList characters={episodeData.characters} />
    </div>
  </div>
</section>
