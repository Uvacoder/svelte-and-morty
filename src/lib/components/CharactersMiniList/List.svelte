<script>
  import { onMount } from 'svelte'

  const getListData = async (characters) => {
    return Promise.all(characters.map((character) => fetch(character).then((r) => r.json())))
  }

  export let characters
  export let title = 'Characters'

  let listPromise

  onMount(() => {
    listPromise = getListData(characters)
  })
</script>

{#if characters}
  <div class="lg:w-1/2 w-full mb-6 lg:mb-4">
    <h1 class="sm:text-2xl text-xl font-medium title-font mb-2 text-white">{title}</h1>
    <div class="h-1 w-20 bg-red-500 rounded" />
  </div>
  <div class="flex flex-wrap -m-2">
    {#await listPromise}
      <p>loading...</p>
    {:then charactersData}
      {#if charactersData}
        {#each charactersData as item (item.id)}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={item.image}
              />
              <div class="flex-grow">
                <a
                  href="/characters/{item.id}"
                  class="text-white title-font font-medium transition-color duration-200 ease-in-out hover:text-red-400"
                  >{item.name}</a
                >
                <p class="text-gray-400">{item.species}</p>
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
