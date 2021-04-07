<script>
  import { onMount } from 'svelte'

  const getListData = async (episodes) => {
    return Promise.all(episodes.map((ep) => fetch(ep).then((r) => r.json())))
  }

  export let episodes
  export let title = 'Episodes'

  let listPromise

  onMount(() => {
    listPromise = getListData(episodes)
  })
</script>

{#if episodes}
  <div class="lg:w-1/2 w-full mb-6 lg:mb-4">
    <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-white">{title}</h1>
    <div class="h-1 w-20 bg-red-500 rounded" />
  </div>
  <div class="flex flex-wrap -m-2">
    {#await listPromise}
      <p>loading...</p>
    {:then episodesData}
      {#if episodesData}
        {#each episodesData as item (item.id)}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <div class="flex-grow">
                <a
                  href="/episodes/{item.id}"
                  class="text-white title-font font-medium transition-color duration-200 ease-in-out hover:text-red-400"
                  >{item.name}</a
                >
                <p>{item.episode}</p>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
{/if}
