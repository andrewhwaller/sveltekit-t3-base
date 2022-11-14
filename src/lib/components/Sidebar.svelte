<script lang="ts">
	import type { IconThemeSource } from '@steeze-ui/svelte-icon';
	import NavLink from '$lib/components/NavLink.svelte';
	import NavToggle from '$lib/components/NavToggle.svelte';

	export let navItems: {
		name: string;
		icon: { default: IconThemeSource } & { [p: string]: IconThemeSource };
		href: string;
	}[];
	export let title: string;
	export let show = false;
	export let allowNavToggle: boolean;
	export let allowNavClose: boolean;
	export let minimal: boolean;
</script>

{#if show}
	<div
		class="bg-gray-100 dark:bg-gray-900 border-r-[1px] border-gray-300 dark:border-gray-800 flex flex-col pb-2"
	>
		<div class="flex flex-col h-0 flex-1 pt-2 {minimal ? 'w-12' : 'w-56 min-w-max'}">
			<div class="flex-1 flex flex-col overflow-y-auto">
				<nav class="flex-1 px-2 pb-2 flex flex-col">
					<div class="mb-5 flex w-full justify-between items-center">
						<span class="flex min-w-0 items-center justify-between space-x-2">
							<span class="flex-1 flex flex-col min-w-0">
								{#if !minimal}
									<span class="text-sm font-medium truncate dark:text-white text-gray-600">
										{title}
									</span>
								{/if}
							</span>
						</span>
					</div>
					<div>
						{#each navItems as item}
							<NavLink {...item} {minimal} />
						{/each}
					</div>
					<div class="mt-auto flex flex-col space-y-3">
						{#if allowNavToggle}
							<NavToggle bind:show bind:minimal bind:allowClose={allowNavClose} />
						{/if}
					</div>
				</nav>
			</div>
		</div>
	</div>
{/if}
