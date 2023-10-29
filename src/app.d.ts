// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}


// It can be sent to backend or when something is created 
interface CodeSnippetInput{
	title:string
	language:string
	code:string
}


// for type script 
interface CodeSnippet{
	title:string
	language:string
	code:string
	favorite:boolean
	// type for example
		// userCreated : User , createdOn:string
}

