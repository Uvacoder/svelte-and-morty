<script context="module">
  export async function load({ page, fetch }) {
    const { location } = page.params
    const res = await fetch(`https://rickandmortyapi.com/api/location/${location}`)
    const locationData = await res.json()
    return {
      props: { locationData }
    }
  }
</script>

<script>
  import CharactersMiniList from '$lib/components/CharactersMiniList/List.svelte'
  export let locationData
</script>

<svelte:head>
  <title>Svelte & Morty - Location: {locationData.name}</title>
</svelte:head>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-3xl mb-2 text-white">{locationData.name}</h1>
        <div class="flex border-t border-gray-800 py-2">
          <span class="text-gray-500">Type</span>
          <span class="ml-auto text-white">{locationData.type}</span>
        </div>
        <div class="flex border-t border-gray-800 py-2">
          <span class="text-gray-500">Dimension</span>
          <span class="ml-auto text-white">{locationData.dimension}</span>
        </div>
      </div>
    </div>
    <div>
      <CharactersMiniList characters={locationData.residents} title='Residents' />
    </div>
  </div>
</section>
