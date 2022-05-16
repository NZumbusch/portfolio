<script>
    import UsedTechnologies from "../../UsedTechnologies.svelte";

    let images = [
        "/src/assets/Coding/KSP/About.PNG",
        "/src/assets/Coding/HBZForum/Articles.PNG",
    ]

    let projectImage = images[0];
</script>



<div class="h-screen w-screen relative">
    <img class="absolute object-right object-cover w-screen h-screen md:w-1/2 md:left-1/2" src={projectImage} alt={"Splash Screen"}>

    <div 
        class="
            absolute bg-black/80 flex flex-col justify-center items-center p-8

            bottom-0 left-0 right-0 pb-[120px]
            md:top-0 md:right-1/2 lg:pb-0
        "
    >
        <h1 class="text-3xl text-white">KSP</h1>
        <p class="text-white p-5">
            I created a new web presence for the local student council. The project included setting up a landingpage with basic information and images as well as helping them establish a wordpress blog. I designed the landingpage using Figma and then implemented it with HTML/SCSS/JS. A main concern with this project was simplicity, accessibility and facility.
        </p>


        <div class="absolute bottom-[30px] lg:bottom-5 lg:left-5 text-white">
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://konstanzerschuelerparlament.de/">Live Website</a>
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://github.com/NZumbusch/KSP-HP/">Sourcecode</a>
        </div>
        <div class="absolute bottom-16 lg:bottom-2 lg:right-2">
            <UsedTechnologies technologies={["figma", "html", "sass", "js"]} />
        </div>
    </div>
</div>