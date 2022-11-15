<script lang="ts">
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import { createPopperActions } from 'svelte-popperjs';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronDown, GlobeAlt, Bars3BottomLeft } from '@steeze-ui/heroicons';
	import type { NavItem } from '../config';
	const [popperRef] = createPopperActions();
	export let menuItems: NavItem[] = [];
	export let title: string;
	export let displayMainMenu: boolean;
	export let thinNavbar: boolean = false;
	export let navMode: string = 'sidebar';
	export let minimal: boolean;
</script>

{#if displayMainMenu}
	<Popover class="{navMode === 'navbar' && !thinNavbar ? 'py-2' : ''} flex flex-col" let:open>
		<PopoverButton
			use={[popperRef]}
			class="group w-full px-2 {navMode === 'navbar' &&
				!thinNavbar &&
				'py-2'} my-auto text-left text-sm font-medium"
		>
			<div class="flex w-full items-center justify-between">
				<span class="flex min-w-0 items-center justify-between space-x-2">
					<span class="flex min-w-0 flex-1 flex-col">
						{#if !minimal}
							<span
								class="truncate text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-300
                      {open ? 'dark:text-blue-300 text-blue-600' : 'dark:text-white text-gray-600'}"
							>
								{title}
							</span>
						{/if}
					</span>
				</span>
				{#if !minimal}
					<div
						class="group-hover:text-blue-600 dark:group-hover:text-blue-300
                  {open ? 'dark:text-blue-300 text-blue-600' : 'dark:text-gray-400 text-gray-600'}"
					>
						<Icon src={ChevronDown} class="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
					</div>
				{:else}
					<div>
						<Icon
							src={Bars3BottomLeft}
							theme="outline"
							class="-ml-0.5 h-5 w-5 hover:text-blue-600 dark:hover:text-blue-300 {open
								? 'dark:text-blue-300 text-blue-600'
								: 'dark:text-white text-gray-600'}"
							aria-hidden="true"
						/>
					</div>
				{/if}
			</div>
		</PopoverButton>
		{#if open}
			<div class:z-50={open}>
				<PopoverPanel
					class="cloud-menu-container absolute max-h-96 origin-top-left overflow-y-auto
                rounded-md bg-white p-1.5 shadow-lg ring-1 ring-black ring-opacity-5
                focus:outline-none dark:border dark:border-gray-700 dark:bg-gray-900 {thinNavbar &&
						'-mt-0.5'}"
				>
					{#each menuItems as item}
						<a
							href={item.href}
							class="text-xxs flex w-full flex-row items-center whitespace-nowrap
                    rounded-md px-2 py-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-400
                    dark:hover:bg-gray-800 dark:hover:text-white"
						>
							<Icon src={GlobeAlt} theme="outline" class="mr-2 block h-4 w-4 text-blue-500" />
							<span class="text-xxs my-auto">{item.name}</span>
						</a>
					{/each}
				</PopoverPanel>
			</div>
		{/if}
	</Popover>
{:else if !minimal}
	<div class="{navMode === 'navbar' && !thinNavbar ? 'py-2' : ''} flex flex-col">
		<div
			class="w-full px-2 {navMode === 'navbar' &&
				!thinNavbar &&
				'py-2'} my-auto text-left text-sm font-medium"
		>
			<div class="flex w-full items-center justify-between">
				<span class="flex min-w-0 items-center justify-between space-x-2">
					<span class="flex min-w-0 flex-1 flex-col">
						<span class="truncate text-sm font-medium text-gray-600 dark:text-white">
							{title}
						</span>
					</span>
				</span>
			</div>
		</div>
	</div>
{/if}

<style>
	div :global(.cloud-menu-container) {
		z-index: 9000 !important;
	}
</style>
