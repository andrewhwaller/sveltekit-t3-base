<script>
  import { notifications } from '$lib/notifications';
  import Toast from '$lib/components/Toast.svelte';
</script>

<div class="notifications gap-3">
  {#each $notifications as notification (notification.id)}
    <Toast { ...notification } />
  {/each}
</div>
