<script lang="ts">
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import { createPopperActions } from 'svelte-popperjs';
	import { Briefcase, ChevronDown, ArrowRightOnRectangle, User } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	const [popperRef] = createPopperActions();
	export let navMode: string;
	export let minimal: boolean;
	export let thinNavbar: boolean;

	const getInitials = (name: string = 'User') => {
		const parts = name.split(' ');
		let initials = '';
		for (let i = 0; i < parts.length; i++) {
			if (parts[i].length > 0 && parts[i] !== '') {
				initials += parts[i][0];
			}
		}
		return initials;
	};

	const menuItems = [
		{
			title: 'Profile',
			icon: User,
			href: '/'
		},
		{
			title: 'System Info',
			icon: Briefcase,
			href: '/'
		},
		{
			title: 'Logout',
			icon: ArrowRightOnRectangle,
			href: '/'
		}
	];
</script>

<Popover
	class="{!minimal && 'px-2'} {navMode === 'navbar' && !thinNavbar
		? 'py-2'
		: ''} flex w-full flex-col"
	let:open
>
	<PopoverButton use={[popperRef]} class="group w-full text-left text-sm font-medium">
		<div class="my-auto flex w-full items-center justify-between">
			<div class="flex min-w-0 items-center {!minimal && 'justify-between space-x-2'}">
				{#if !thinNavbar}
					<div class="flex min-w-0 flex-1 flex-col">
						<div
							class="{minimal && 'mx-auto'} flex h-8 w-8 flex-col items-center
                    rounded-full bg-blue-600 group-hover:bg-blue-700 {open
								? 'dark:text-blue-300 bg-blue-700 text-blue-600'
								: 'dark:text-white text-gray-600'}"
						>
							<span class="my-auto text-sm font-semibold text-white">
								{getInitials()}
							</span>
						</div>
					</div>
				{/if}
				{#if !minimal}
					<div class="flex min-w-0 flex-shrink-0 flex-col">
						<span
							class="text-xxs truncate font-medium group-hover:text-blue-600 dark:group-hover:text-blue-300
                      {open ? 'dark:text-blue-300 text-blue-600' : 'dark:text-white text-gray-600'}"
						>
							<!-- {userData.name} -->
						</span>
					</div>
				{/if}
			</div>
			{#if !minimal}
				<div
					class="ml-auto group-hover:text-blue-600 dark:group-hover:text-blue-300 {open
						? 'dark:text-blue-300 text-blue-600'
						: 'dark:text-gray-400 text-gray-600'}"
				>
					<Icon
						src={ChevronDown}
						class="ml-2 h-4 w-4 flex-shrink-0 {navMode === 'sidebar' && 'rotate-180'}"
						aria-hidden="true"
					/>
				</div>
			{/if}
		</div>
	</PopoverButton>
	{#if open}
		<div class:z-50={open}>
			<PopoverPanel
				class="menu-container absolute max-h-96 w-48 origin-bottom-left overflow-y-auto
                rounded-md bg-white p-1.5 shadow-lg ring-1 ring-black ring-opacity-5
                focus:outline-none dark:border dark:border-gray-700 dark:bg-gray-900
                {navMode === 'sidebar'
					? '-translate-y-full -bottom-12'
					: thinNavbar
					? 'top-7 right-1'
					: 'top-11 right-1'}"
			>
				{#each menuItems as item}
					<button
						href={item.href}
						class="text-xxs flex w-full flex-row items-center whitespace-nowrap
                    rounded-md px-2 py-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-400
                    dark:hover:bg-gray-800 dark:hover:text-white"
					>
						<Icon src={item.icon} theme="outline" class="mr-2 block h-4 w-4 text-blue-500" />
						<span class="text-xxs my-auto">{item.title}</span>
					</button>
				{/each}
			</PopoverPanel>
		</div>
	{/if}
</Popover>

<style>
	div :global(.menu-container) {
		z-index: 9000 !important;
	}
</style>
