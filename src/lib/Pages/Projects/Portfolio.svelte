<script>
    import UsedTechnologies from "../../UsedTechnologies.svelte";

    let images = [
        "/src/assets/Coding/HBZForum/Overview.PNG",
    ]

    let projectImage = images[0];
</script>



<div class="h-screen w-screen relative">
    <img class="absolute object-left object-cover w-screen h-screen md:w-1/2" src={projectImage} alt={"Splash Screen"}>

    <div 
        class="
            absolute bg-black/80 flex flex-col justify-center items-center p-8

            bottom-0 left-0 right-0 pb-[min(25vh)]
            md:top-0 md:left-1/2 xl:pb-0
        "
    >
        <h1 class="text-3xl text-white">Portfolio</h1>
        
        <p class="text-white p-5">
            When I decided to design and build myself a portfolio, I had - from the get go - an idea in mind: I wanted my portfolio to be as minimalist & simple as possible whilst still presenting important and interesting information about myself. When  I was thinking about possible technologies to use, I was quick to decide to use Vite + Svelte which I had come to love from other side projects of mine. Something new I had wanted to try for sometime was tailwind, which I finally got to use in a project. 
        </p>


        <div class="absolute bottom-[30px] xl:bottom-5 xl:left-5 text-white">
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://hbz.suso.schulen.konstanz.de/forum/v2/">Live Website</a>
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://github.com/HBZ-Suso/forum">Sourcecode</a>
        </div>
        <div class="absolute bottom-16 xl:bottom-2 xl:right-2">
            <UsedTechnologies technologies={["svelte", "ts", "tailwind"]} />
        </div>
    </div>
</div>