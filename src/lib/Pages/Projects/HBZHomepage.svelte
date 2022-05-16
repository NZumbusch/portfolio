<script>
    import UsedTechnologies from "../../UsedTechnologies.svelte";

    let images = [
        "/src/assets/Coding/HBZHomepage/Articles.PNG",
        "/src/assets/Coding/HBZHomepage/SplashScreen.PNG"
    ]

    let projectImage = images[0];
</script>



<div class="h-screen w-screen relative">
    <img class="absolute object-cover w-screen h-screen md:w-1/2 md:left-1/2" src={projectImage} alt={"Splash Screen"}>

    <div 
        class="
            absolute bg-black/80 flex flex-col justify-center items-center p-8

            bottom-0 left-0 right-0 pb-[120px]
            md:top-0 md:right-1/2 lg:pb-0
        "
    >
        <h1 class="text-3xl text-white">HBZ Homepage</h1>
        <p class="text-white p-5">
            I created a new web presence for the highly skilled class of the Heinrich-Suso-Gymnasium Konstanz. This included a landing page with a quick summary of the class as well as a more in depth article collection/blog. The project was completed using Javascript and SCSS for the front- and PHP for the backend.
        </p>


        <div class="absolute bottom-[30px] lg:bottom-5 lg:left-5 text-white">
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://hbz.suso.schulen.konstanz.de/HBZ/">Live Website</a>
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://github.com/NZumbusch/HBZ">Sourcecode</a>
        </div>
        <div class="absolute bottom-16 lg:bottom-2 lg:right-2">
            <UsedTechnologies technologies={["html", "js", "sass", "php"]} />
        </div>
    </div>
</div>