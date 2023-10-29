import type { PageLoad } from "./$types";

export const load =(()=>{
    return {
        snippets:[
            {
				title: "HTML Code snippet",
				language: 'html',
				code: '<div>Hello HTML</div>',
				favorite:false
			},
			{
				title: "JavaScript Code snippet",
				language: 'JavaScript',
				code: "console.log('Hello JavaScript')",
				favorite:false
			}
        ]
    }
})satisfies PageLoad // pageLoad -> PageData (in frontEnd part)



// It will be permanents default snippet on page load  but can be deleted or fav/unfav