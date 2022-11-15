<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { XMark } from '@steeze-ui/heroicons';
	import { SidebarCollapse, SidebarExpand } from '@steeze-ui/octicons';

	export let show: boolean;
	export let minimal: boolean;
	export let allowClose: boolean;
</script>

<div class="flex flex-col gap-2">
	<button
		on:click={() => (minimal = !minimal)}
		type="button"
		class="my-auto flex items-center gap-1 rounded-md px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-200
                      hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
	>
		<Icon
			src={minimal ? SidebarExpand : SidebarCollapse}
			class=" h-3 w-3 {minimal && 'ml-0.5 my-0.5'} rotate-180"
		/>
		<span class="{minimal && 'hidden'} my-auto ml-2">Minimize sidebar</span>
	</button>
	{#if allowClose}
		<button
			on:click={() => (show = !show)}
			type="button"
			class="my-auto flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-200
                        hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
		>
			<Icon src={XMark} theme="solid" class="h-3 w-3 {minimal && 'ml-0.5 my-0.5'}" />
			<span class="{minimal && 'hidden'} my-auto ml-1">Close sidebar</span>
		</button>
	{/if}
</div>
