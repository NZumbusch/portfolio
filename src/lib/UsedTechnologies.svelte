<script lang="ts">

    export let technologies: string[];

    let options = {
        "ts": "/src/assets/Logos/Typescript.svg.png",
        "js": "/src/assets/Logos/Javascript.png",
        "php": "/src/assets/Logos/PHP.svg.png",
        "sass": "/src/assets/Logos/SASS.svg.png",
        "figma": "/src/assets/Logos/Figma.svg",
        "css": "/src/assets/Logos/Css.svg.png",
        "html": "/src/assets/Logos/HTML.svg.png",
        "htmlcss": "/src/assets/Logos/HTMLCSS.png",
        "svelte": "/src/assets/Logos/svelte.png",
        "sql": "/src/assets/Logos/SQL.png",
        "tailwind": "/src/assets/Logos/Tailwind.svg.png",
        "react": "/src/assets/Logos/React-icon.svg.png",
        "mysql": "/src/assets/Logos/Mysql.svg.png",
        "plesk": "/src/assets/Logos/Plesk.svg.png",
        "vite": "/src/assets/Logos/vite.svg.png",
        "cra": "/src/assets/Logos/cra.svg.png",
        "vue": "/src/assets/Logos/vue.svg.png",
        "python": "/src/assets/Logos/Python.svg.png",
        "java": "/src/assets/Logos/Java.svg",
        "vscode": "/src/assets/Logos/vscode.svg.png",
        "github": "/src/assets/Logos/github.png",
        "wappalyzer": "/src/assets/Logos/wappalyzer.png",
        "stackoverflow": "/src/assets/Logos/stackoverflow.svg.png",
        "gitlab": "/src/assets/Logos/gitlab.png",
        "git": "/src/assets/Logos/git.svg.png",
    }
</script>



<div class="flex flex-row flex-wrap justify-center">
    {#each technologies as tech} 
        {#if (Object.keys(options).indexOf(tech) !== -1)}
            <img class="p-2 h-12" src={options[tech]} alt={tech}/>
        {/if}
    {/each}
</div>