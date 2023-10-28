
<!-- Writing functionality -->
<script>
	import CodeSnippetCard from "../CodeSnippetCard.svelte";
</script>


<!-- Project Structure  -->
<div class="flex justify-center">
	<div class=" grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<!-- Heading  -->
		<h3 class=" text-center py-6">Create a Code Snippet</h3>
		<div class="card p-4 w-full text-token">
			<!-- Structure for title  -->
			<label for="title" class="label">
				<span>Snippet Title 💬</span>
				<input type="text" class="input" placeholder="Enter Your Title" />
			</label>

			<!-- Structure for selecting programming language -->
			<label for="programming language" class="label">
				<span>Choose Programming Language 🧑‍💻</span>
				<select class="select">
					<option value="Select">Select</option>
					<option value="Svelte">Svelte</option>
					<option value="JavaScript">JavaScript</option>
					<option value="C++">C++</option>
					<option value="Java">HTML</option>
				</select>
			</label>

			<!-- Structure for writing snippet -->
			<label for="writing snippet" class="label">
				<span>Code Snippet ⌨️</span>
				<textarea class="textarea" rows="4" placeholder="Enter Code Snippet..."></textarea>
			</label>
		</div>

		<div class=" text-center py-6">
			<h2>My Code Snippet</h2>
		</div>
		<CodeSnippetCard/>
	</div>
</div>
