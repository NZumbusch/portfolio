<script>
    import UsedTechnologies from "../../UsedTechnologies.svelte";

    let images = [
        "/src/assets/Coding/HBZHomepage/Articles.PNG",
        "/src/assets/Coding/HBZHomepage/SplashScreen.PNG"
    ]

    let projectImage = images[0];
</script>



<div class="h-screen w-screen relative">
    <img class="object-cover w-screen h-screen" src={projectImage} alt={"Splash Screen"}>

    <div 
        class="
            absolute bg-black/80 flex flex-col justify-center items-center p-8

            bottom-0 left-0 right-0 
            md:top-0 md:left-1/2
        "
    >
        <h1 class="text-3xl text-white">HBZ Homepage</h1>
        <p class="text-lg text-white p-5">
            I created a new web presence for the highly skilled class of the Heinrich-Suso-Gymnasium Konstanz. This included a landing page with a quick summary of the class as well as a more in depth article collection/blog. The project was completed using Typescript and SCSS for the front- and PHP for the backend.
        </p>

        <div class="absolute bottom-5 right-5">
            <UsedTechnologies technologies={["html", "ts", "sass", "php"]} />
        </div>
    </div>
</div>