<script lang="ts">
	import type { IconSource } from '@steeze-ui/svelte-icon/types';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {page} from "$app/stores";

	export let href: string;
	export let icon: IconSource;
	export let name: string;
	export let minimal: boolean;
	export let navMode = 'sidebar';
	export let thinNavbar = false;
</script>

<a
	{href}
	class:active={$page.url.pathname === href}
	class="my-auto {navMode === 'navbar' && thinNavbar ? '' : 'rounded-md'}
  text-gray-600 dark:text-white flex items-center px-2 py-1.5 text-xs"
>
	{#if icon}
		<Icon src={icon} theme="outline" class="text-blue-500 block h-4 w-4" />
	{/if}
	<span class="{minimal && 'hidden'} ml-2 whitespace-nowrap">{name}</span>
</a>
