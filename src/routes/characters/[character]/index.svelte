<script context="module">
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  export async function load({ page, fetch }) {
    const { character } = page.params
    const res = await fetch(`https://rickandmortyapi.com/api/character/${character}`)
    const characterData = await res.json()

    return {
      props: { characterData }
    }
  }
</script>

<script>
  import EpisodesMiniList from '$lib/components/EpisodesMiniList/List.svelte'
  import StatusBadge from '$lib/components/StatusBadge.svelte'
  import { getResourceIdFromUrl } from '$lib/helpers'

  export let characterData
</script>

<svelte:head>
  <title>Svelte & Morty - {characterData.name}</title>
</svelte:head>

<section class="text-gray-400 bg-gray-900 body-font">
  <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg"
          src={characterData.image}
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-white text-3xl title-font font-medium mb-1">{characterData.name}</h1>
          <h2 class="text-sm title-font text-gray-500 tracking-widest">{characterData.gender}</h2>
          <p class="leading-relaxed">{characterData.species}</p>
          <div class="flex mb-4">
            <span class="flex items-center">
              <span><StatusBadge status={characterData.status} /> {characterData.status}</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
              <a href="/locations/{getResourceIdFromUrl(characterData.origin.url)}"
                >{characterData.origin.name}</a
              >
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
              <a href="/locations/{getResourceIdFromUrl(characterData.location.url)}"
                >{characterData.location.name}</a
              >
            </span>
          </div>
          <EpisodesMiniList episodes={characterData.episode} />
        </div>
      </div>
    </div>
  </section>
</section>
