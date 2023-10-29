<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Skelton UI
	import { AppBar, AppShell,storeHighlightJs} from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js'
	// to make skelton UI to be aware of highlighter by saying store ⬇
	storeHighlightJs.set(hljs)
	// Even we can import theme for highlighting code snippet 
	import 'highlight.js/styles/an-old-hope.min.css'

</script>

<!-- Importing tools of skelton for project -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar> <!--Its is nav bar-->
			<h3 class=" text-left font-semibold line-clamp-1 text-inherit text-red-600 text-xl font-mrs-saint-delafield">CodeShare</h3>
		</AppBar>
	</svelte:fragment>
	
	<svelte:fragment slot="footer">
		<div class="w-[100%]">
			<h3 class="text-sm mt-4 font-serif w-[100%] h-[6vh] text-center shadow-inner pt-3 text-black">&#169; Prashant Kumar ,2023</h3>
		</div>
	</svelte:fragment>
	<slot />

</AppShell>
