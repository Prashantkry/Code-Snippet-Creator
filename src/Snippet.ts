
import { writable , get} from "svelte/store";

// Snippet store
// Code Snippet
// Title, Code, Language, Favorite
export const snippetStore = writable<CodeSnippet[]>([]) // will be created like CodeSnippet1,CodeSnippet2...



// add snippet ||   creating new snippet from input data 
export function addSnippet(input : CodeSnippetInput){ // got accessed to CodeSnippetInput from page.svelte
    const snippets = get(snippetStore) // get is for getting data 
    snippetStore.update(()=>{  // creating array of snippets 
        return [{...input,favorite:false},...snippets]
    })
}


// delete Snippet
export function deleteSnippet(index : number){ // in when using database but as of local storage using index
    const snippets = get(snippetStore) // get is for getting data 
    snippets.splice(index,1)    // deleting snippets 
    snippetStore.update(()=>{  
        return snippets
    })
}


// toggleFavorite
export function toggleFavorite(index : number){
    const snippets = get(snippetStore) 
    snippetStore.update(()=>{ // change T -> F && F->T
        return snippets.map((snippet,snippetIndex)=>{
            if(snippetIndex===index){  
                return {...snippet,favorite:!snippet.favorite}
            }
            return snippet
        }) // ["1","2","3","changed obj"]
    })
}

// send all these data to snippet store and it can be accessed any where in app

// ! Its like CRUD operation created 