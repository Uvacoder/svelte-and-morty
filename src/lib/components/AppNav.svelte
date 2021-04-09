<script>
  import { page } from '$app/stores'
  $: currentPath = $page.path
</script>

<nav
  class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center"
>
  <a
    href="/episodes"
    class="mr-5 hover:text-gray-900 transition-color duration-200 ease-in-out {currentPath.includes(
      '/episode'
    )
      ? 'text-gray-900'
      : ''}">Episodes</a
  >
  <a
    href="/characters"
    class="mr-5 hover:text-gray-900 transition-color duration-200 ease-in-out {currentPath.includes(
      '/character'
    )
      ? 'text-gray-900'
      : ''}">Characters</a
  >
  <a
    href="/locations"
    class="mr-5 hover:text-gray-900 transition-color duration-200 ease-in-out {currentPath ===
    '/locations'
      ? 'text-gray-900'
      : ''}">Locations</a
  >
</nav>
