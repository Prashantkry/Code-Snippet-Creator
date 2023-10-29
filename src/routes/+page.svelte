<!-- Writing functionality -->
<script lang="ts">
	// must put lang="ts" else snippet will not work
	import CodeSnippetCard from '../CodeSnippetCard.svelte';
	import { snippetStore, addSnippet } from '../Snippet';
	import type { PageData } from './$types';
	export let data: PageData; // get access of data from page.ts

	let formData: CodeSnippetInput = {
		title: '',
		language: 'html', // keeping it default
		code: ''
	};
	/*
		Whenever we crate code snippet we can have parameter 
			createSnippet(Input:CodeSnippetInput)
	*/

	/*
		Snippet store 
			a local writeAble that allow us to store code snippets
			create / delete snippet 
			favorite snippets 
			+page.ts -> to initially load in some example snippets (mocking a database request)
	*/

	// accessing data from store
	snippetStore.set(data.snippets);
</script>

<!-- Project Structure  -->
<div class="flex justify-center">
	<div class=" grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<!-- Heading  -->
		<h3 class=" text-center py-6 font-thin text-2xl text-black">Create a Code Snippet</h3>
		<div class="card p-4 w-full text-token shadow-lg">
			<!-- ! Structure for title  -->
			<label for="title" class="label">
				<span>Snippet Title 💬</span>
				<input
					type="text"
					class="input"
					placeholder="Enter Your Title"
					bind:value={formData.title}
				/>
			</label>

			<!-- ! Structure for selecting programming language -->
			<label for="programming language" class="label">
				<span>Choose Programming Language 🧑‍💻</span>
				<select class="select" bind:value={formData.language}>
					<option value="Select">Select</option>
					<option value="Java">Java</option>
					<option value="JavaScript">JavaScript</option>
					<option value="C++">C++</option>
					<option value="C++">HTML</option>
					<option value="C++">Python</option>
				</select>
			</label>

			<!-- ! Structure for writing snippet -->
			<label for="writing snippet" class="label">
				<span>Code Snippet ⌨️</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter Code Snippet..."
					bind:value={formData.code}
				/>
			</label>

			<!-- ! button for creating snippet  -->
			<button
				class=" btn btn-sm variant-filled-tertiary mt-4"
				on:click={() => addSnippet(formData)} 
			>	<!--formData is given as it have properties of addSnippet(input: CodeSnippetInput)-->
				Create Snippet</button
			>
		</div>

		<div class=" text-center py-6">
			<h2 class=" text-2xl text-black">My Code Snippet</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<!--gave access to value in snippetStore & also listening to it-->
			<CodeSnippetCard {snippet} {index} />
			<!--Making it accessible to writing it in textarea then posting -->
		{/each}
		<!--max work is done in cardComponents-->
	</div>
</div>
