<script lang="ts">
	import NavLink from '$lib/components/NavLink.svelte';
	import NavToggle from '$lib/components/NavToggle.svelte';
	import type { NavItem } from '$lib/config';
	import MainMenu from '$lib/components/MainMenu.svelte';
	import UserMenu from '$lib/components/UserMenu.svelte';

	export let navItems: NavItem[];
	export let title: string;
	export let show = false;
	export let displayMainMenu = false;
	export let displayLogo = false;
	export let displayUserMenu = false;
	export let allowNavToggle: boolean;
	export let allowNavClose: boolean;
	export let minimal: boolean;
</script>

{#if show}
	<div
		class="flex flex-col border-r-[1px] border-gray-300 bg-gray-100 pb-2 dark:border-gray-800 dark:bg-gray-900"
	>
		<div class="flex h-0 flex-1 flex-col pt-2 {minimal ? 'w-12' : 'w-56 min-w-max'}">
			{#if displayLogo}
				<div class="{minimal && 'hidden'} mx-auto flex flex-shrink-0 items-center px-2 pb-2">
					<!-- Add logo here -->
				</div>
			{/if}
			<div class="mt-2 flex flex-1 flex-col overflow-y-auto">
				<nav class="flex flex-1 flex-col px-2 pb-2">
					<div class="mb-3 flex w-full items-center justify-between">
						<span class="flex min-w-0 items-center justify-between space-x-2">
							<span class="flex min-w-0 flex-1 flex-col">
								<div>
									<MainMenu {displayMainMenu} {title} {minimal} />
								</div>
							</span>
						</span>
					</div>
					<div>
						{#each navItems as item}
							<NavLink {item} {minimal} />
						{/each}
					</div>
					<div class="mt-auto flex flex-col space-y-3">
						{#if allowNavToggle}
							<NavToggle bind:show bind:minimal bind:allowClose={allowNavClose} />
						{/if}
						{#if displayUserMenu}
							<UserMenu bind:minimal navMode={'sidebar'} thinNavbar={false} />
						{/if}
					</div>
				</nav>
			</div>
		</div>
	</div>
{/if}
