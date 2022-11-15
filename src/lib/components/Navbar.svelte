<script lang="ts">
	import type { NavItem } from '$lib/config';
	import NavLink from '$lib/components/NavLink.svelte';
	import MainMenu from '$lib/components/MainMenu.svelte';
	import UserMenu from '$lib/components/UserMenu.svelte';
	export let navItems: NavItem[];
	export let title: string;
	export let displayLogo: boolean;
	export let displayMainMenu: boolean;
	export let displayUserMenu: boolean;
	export let minimal: boolean;
	export let thinNavbar: boolean = false;
</script>

<nav class="border-b-[1px] bg-gray-100 dark:border-gray-800 dark:bg-gray-900" id="navbar">
	<div class="mx-auto pr-2 pl-4">
		<div class="relative flex items-center justify-between {!thinNavbar && 'h-12'}">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				{#if displayLogo && !thinNavbar}
					<div class="mr-4 flex flex-shrink-0 items-center">
						<!-- Add logo here -->
					</div>
				{/if}
				<MainMenu navMode={'navbar'} {thinNavbar} {displayMainMenu} minimal={false} {title} />
				<div class="hidden sm:ml-6 sm:flex">
					<div class="flex items-center space-x-2">
						{#each navItems as item}
							<NavLink {item} {thinNavbar} navMode="navbar" />
						{/each}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 z-50 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0"
			>
				{#if displayUserMenu}
					<UserMenu navMode={'navbar'} {thinNavbar} {minimal} />
				{/if}
			</div>
		</div>
	</div>
</nav>
