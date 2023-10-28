<script lang="ts">
    // It help for styling and show off code in app write language and its snippet
	import { CodeBlock } from '@skeletonlabs/skeleton'; 
</script>

<main>
	<!-- Layout of card is created here after posting of content -->
	<div class="card">
		<header class="card-header">
			Title of Snippet
			<div class="float-right">
				<button type="button" class="btn btn-sm variant-filled-primary"> Favorite </button>
				<button type="button" class="btn btn-sm variant-filled-error"> X </button>
			</div>
		</header>

		<section class=" p-5">
			<CodeBlock language={'HTML'} code={`<h1>Hello Coder you I'm HTML</h1>`} />
		</section>
	</div>
</main>
