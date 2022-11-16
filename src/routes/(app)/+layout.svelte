<script lang="ts">
	import './../../app.css';
	import { fly } from 'svelte/transition';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { SidebarExpand } from '@steeze-ui/octicons';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { appConfig } from '$lib/config';
	const {
		allowNavToggle,
		allowNavClose,
		displayMainMenu,
		displayLogo,
		displayUserMenu,
		darkByDefault,
		thinNavbar,
		navItems,
		navMode,
		title
	} = appConfig;
	const queryClient = new QueryClient();
	$: showSidebar = true;
	$: minimal = false;
	export const prerender = true;
</script>

<QueryClientProvider>
	<div class="{darkByDefault ? 'dark bg-off-black' : 'bg-gray-50'} relative flex min-h-full grow">
		{#if navMode === 'sidebar'}
			{#if allowNavToggle && !showSidebar}
				<div
					class="fixed bottom-0 left-0"
					style="z-index: 9000;"
					in:fly={{ duration: 500, x: -250, opacity: 1 }}
				>
					<button
						on:click={() => (showSidebar = !showSidebar)}
						type="button"
						class="flex items-center gap-2 rounded-tr-lg border-r border-t
									border-gray-300 px-4 pb-2 pt-2 text-xs
									text-gray-600 shadow-sm
									hover:bg-gray-200 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						<Icon src={SidebarExpand} class="h-3 w-3 rotate-180" />
						<span class="my-auto">Open sidebar</span>
					</button>
				</div>
			{/if}
			<Sidebar
				bind:minimal
				bind:show={showSidebar}
				{allowNavToggle}
				{allowNavClose}
				{displayMainMenu}
				{displayLogo}
				{displayUserMenu}
				{title}
				{navItems}
			/>
		{/if}
		<div class="flex h-screen grow flex-col overflow-hidden">
			{#if appConfig.navMode === 'navbar'}
				<Navbar
					{title}
					{navItems}
					{thinNavbar}
					{displayMainMenu}
					{displayLogo}
					{displayUserMenu}
					{minimal}
				/>
			{/if}
			<div class="relative w-full flex-grow overflow-y-auto dark:bg-[#030303]">
				<slot />
			</div>
		</div>
	</div>
</QueryClientProvider>
