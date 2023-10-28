
## Creating a project

```bash
# create a new project in the current directory and all command at a glance 
npm create svelte@latest
npm run dev -> start the server and open the app in a new browser tab
npm run dev -- --open
npm run build -> To create a production version of your app

```

## Developing
Once you've created a project and installed dependencies with `npm install` start a development server.
You can preview the production build with `npm run preview`.

[`everything can be seen on github repo`]

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.



# All About the project at glance 
```bash
# Project is of posting idea on different programming language
It will have option of selecting language then writing title and then code snippet then create snippet button 

# Goal
Learn typescript and svelte kit 
```

## Tools used here 
```
Skelton is used for UI purpose 
Tailwind CSS for designing purpose 
``` 

# Start
1. Work start from layout page of routes in src 
   1. Here layout is created which will be common throughout the project
2. Page file in routes 
   1. here main page structure is created 
3. CodeSnippetCard file is created in src
   1. Here layout of card is created when snippet is created
   2. also out content as Favorite or delete it 
   3. mark it unfavorite when not needed
   4. also functionality is made in script tag 
   5. **[`CodeBlock`]** -> It help for styling and show off code in app is imported from skelton
   6. then it is exported to routes page.svelte and used there for creating snippet 
4. then in layout [`storeHighlightJs`] is imported from skelton also [`npm i highlight.js`] is installed and it help to high light code in field ticket application and then it is imported in layout file 
5. Example can be seen 
	```ruby
	**Skelton UI**
	import { AppBar, AppShell,storeHighlightJs} from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js'
	# to make skelton UI to be aware of highlighter by saying store ⬇
	storeHighlightJs.set(hljs)
	# Even we can import theme for highlighting code snippet 
	import 'highlight.js/styles/an-old-hope.min.css'
    ```
6. 
