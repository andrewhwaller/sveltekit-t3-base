<script lang="ts">
  import '../app.css';
  import { fly } from 'svelte/transition';
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { SidebarExpand } from '@steeze-ui/octicons';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import { appConfig } from '$lib/config';
  const { allowNavToggle, displayCloudMenu, displayLogo, displayUserMenu, darkByDefault, thinNavbar, navItems, navMode, title } = appConfig;
  const queryClient = new QueryClient();
  $: showSidebar = true;
  $: minimal = false;
</script>

<QueryClientProvider>
  <div class="{ darkByDefault ? 'dark bg-off-black' : 'bg-gray-50' } min-h-full flex grow relative">
    {#if navMode === 'sidebar'}
      {#if allowNavToggle && !showSidebar}
        <div
          class="fixed bottom-0 left-0" style="z-index: 9000;"
          in:fly={{duration: 500, x: -250, opacity: 1}}
        >
          <button
            on:click={() => showSidebar = !showSidebar}
            type="button"
            class="rounded-tr-lg border-r border-t border-gray-300 dark:border-gray-700 shadow-sm
									text-gray-600 hover:text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-900
									dark:hover:bg-gray-800 dark:hover:text-white
									flex gap-2 items-center px-4 pb-2 pt-2 text-xxs"
          >
            <Icon src={SidebarExpand} class="h-3 w-3 rotate-180" />
            <span class="my-auto">Open sidebar</span>
          </button>
        </div>
      {/if}
      <Sidebar
        bind:minimal={minimal}
        bind:show={showSidebar}
        {allowNavToggle}
        {displayCloudMenu}
        {displayLogo}
        {displayUserMenu}
        {title}
        {navItems}
      />
    {/if}
    <div class="h-screen flex flex-col grow overflow-hidden">
      {#if appConfig.navMode === 'navbar'}
        <Navbar
          {title}
          {navItems}
          {thinNavbar}
          {displayCloudMenu}
          {displayLogo}
          {displayUserMenu}
        />
      {/if}
      <div class="relative flex-grow w-full overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</QueryClientProvider>
