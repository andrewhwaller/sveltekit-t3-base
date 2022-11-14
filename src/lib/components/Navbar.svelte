<script lang="ts">
	import type { NavItem } from '../config';
	import NavLink from './NavLink.svelte';
	export let navItems: NavItem[];
	export let displayLogo: boolean;
	export let thinNavbar: boolean;
</script>

<nav class="bg-gray-100 dark:bg-gray-900 border-b-[1px] dark:border-gray-800" id="navbar">
	<div class="pr-2 pl-4 mx-auto">
		<div class="relative flex items-center justify-between {!thinNavbar && 'h-12'}">
			<div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
				{#if displayLogo && !thinNavbar}
					<div class="flex-shrink-0 flex items-center mr-4">
						Logo goes here
					</div>
				{/if}
				<div class="hidden sm:flex sm:ml-6">
					<div class="flex items-center space-x-2">
						{#each navItems as item}
							<NavLink {...item} {thinNavbar} navMode="navbar" />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
