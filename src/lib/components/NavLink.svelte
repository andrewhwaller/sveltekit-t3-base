<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/config';

	export let item: NavItem;
	export let minimal: boolean = false;
	export let navMode = 'sidebar';
	export let thinNavbar = false;
</script>

<a
	href={item.href}
	class:active={$page.url.pathname === item.href}
	class="my-auto {navMode === 'navbar' && thinNavbar ? '' : 'rounded-md'}
  flex items-center px-2 py-1.5 text-xs text-gray-600 dark:text-white"
>
	{#if item.icon}
		<Icon src={item.icon} theme="outline" class="block h-4 w-4 text-blue-500" />
	{/if}
	<span class="{minimal && 'hidden'} ml-2 whitespace-nowrap">{item.name}</span>
</a>
