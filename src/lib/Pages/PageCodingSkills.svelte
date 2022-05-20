<script>
    import UsedTechnologies from "../UsedTechnologies.svelte";
</script>



<div class="h-screen w-full relative">
    <div class="relative md:absolute object-left object-cover w-screen h-auto md:h-screen md:w-1/2 bg-black/80 flex flex-wrap flex-col justify-center items-center text-white" >
        <p class="italic">programming languages i have worked with</p>
        <div class="max-w-full">
            <UsedTechnologies technologies={["htmlcss", "js", "ts", "node", "php", "sql", "sass", "java", "python"]} />
        </div>

        <p class="italic mt-10">technologies i am used to using</p>
        <UsedTechnologies technologies={["svelte", "tailwind", "git", "react", "mysql", "plesk", "cra", "vite", "vue"]} />

        <p class="italic mt-10">tools i utilise</p>
        <UsedTechnologies technologies={["vscode", "stackoverflow", "wappalyzer", "github", "gitlab"]} />
    </div>

    <div 
        class="
            relative md:absolute bg-black/80 flex flex-col justify-center items-center p-8

            bottom-0 left-0 right-0
            md:top-0 md:left-1/2 xl:pb-0
        "
    >
        <h1 class="text-3xl text-white">My Skills</h1>
        <p class="text-white p-5">
            In recent years I have come to know a wide array of programming languages and technologies to help me realise projects, be it personal or for clients. I am always open to learning new technologies or deepening my knowledge of the ones I already got to use.
        </p>
    </div>
</div>