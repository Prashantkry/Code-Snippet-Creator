<script lang="ts">
	// It help for styling and show off code in app write language and its snippet
	import { CodeBlock } from '@skeletonlabs/skeleton';

	// exporting code snippet & store for backend
	export let snippet: CodeSnippet = {
		title: '',
		language: 'html',
		code: '',
		favorite: false
	};

	export let index: number;


	// adding functionality of ++ -- snippet 
	import { deleteSnippet,addSnippet, toggleFavorite } from './Snippet';
</script>

<main>
	<!-- Layout of card is created here after posting of content -->
	<div class="card">
		<header class="card-header">
			<!-- Title of Snippet -->
			{snippet.title}
			<div class="float-right">
				<button type="button" class="btn btn-sm variant-filled-primary" on:click={()=>toggleFavorite(index)}>
					<!-- Favorite  -->
					{snippet.favorite ? 'unfavorite' : 'favorite'}
				</button>
				<button type="button" class="btn btn-sm variant-filled-error" on:click={()=>deleteSnippet(index)}> X </button>
			</div>
		</header>

		<!-- language code-->
		<section class=" p-5">
			<CodeBlock language={snippet.language} code={snippet.code} />
		</section>
	</div>
</main>
