<script>
  import { onMount } from 'svelte'
  import StatusBadge from '$lib/components/StatusBadge.svelte'
  import { getResourceIdFromUrl } from '$lib/helpers'

  const getEpisodeName = async (episodeUrl) => {
    const res = await fetch(episodeUrl)
    const data = await res.json()
    return data
  }

  export let item

  let episodePromise
  onMount(() => {
    episodePromise = getEpisodeName(item.episode[0])
  })
</script>

<div class="p-4 lg:w-1/4 md:w-1/2">
  <div class="h-full flex flex-col items-center text-center">
    <img
      alt="team"
      class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
      src={item.image}
    />
    <div class="w-full">
      <h2 class="title-font font-medium text-lg text-white">{item.name}</h2>
      <h3 class="text-gray-500 mb-3">
        <StatusBadge status={item.status} />
        {item.status} - {item.species}
      </h3>
      <div class="text-size-sm text-left">
        <span class="text-gray-500 mr-2">Last known location:</span>
        <a
          class="block mt-1 text-white hover:text-red-400 transition-color duration-200 ease-in-out"
          href="/locations/{getResourceIdFromUrl(item.location.url)}">{item.location.name}</a
        >
      </div>
      {#await episodePromise}
        <p>loading...</p>
      {:then episodeData}
        <div class="text-size-sm text-left">
          <span class="text-gray-500 mr-2">First seen in:</span>
          <a
            class="block mt-1 text-white hover:text-red-400 transition-color duration-200 ease-in-out"
            href="/episodes/{episodeData?.id}">{episodeData?.name}</a
          >
        </div>
      {/await}
    </div>
  </div>
</div>
