<script lang="ts">
    export let technologies: string[];

    let options = {
        "ts": "/src/assets/Logos/Typescript.svg.png",
        "js": "/src/assets/Logos/Javascript.png",
        "php": "/src/assets/Logos/PHP.svg.png",
        "sass": "/src/assets/Logos/SASS.svg.png",
        "figma": "/src/assets/Logos/Figma.svg.png",
        "css": "/src/assets/Logos/Css.svg.png",
        "html": "/src/assets/Logos/HTML.svg.png",
        "htmlcssjs": "/src/assets/Logos/HTMLCSSJS.jpg",
        "svelte": "/src/assets/Logos/svelte.png"
    }
</script>



<div class="flex flex-row">
    {#each technologies as tech} 
        {#if (Object.keys(options).indexOf(tech) !== -1)}
            <img class="p-2 h-14" src={options[tech]} alt={tech}>
        {/if}
    {/each}
</div>