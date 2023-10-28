<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- Importing tools of skelton for project -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar> <!--Its is nav bar-->
			<h3 class=" text-left font-semibold line-clamp-1 text-inherit">CodeShare</h3>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
