<script>
    import UsedTechnologies from "../../UsedTechnologies.svelte";

    let images = [
        "/src/assets/Coding/HBZForum/Overview.PNG",
        "/src/assets/Coding/HBZForum/Articles.PNG",
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
        <h1 class="text-3xl text-white">HBZ Forum</h1>
        <p class="text-white p-5">
            In addition to the new Homepage I designed and created for the highly skilled class of the Heinrich-Suso-Gymnasium Konstanz, I also developed a forum to allow for easy communication between students, teachers, parents and alumni. Despite it not having been widely adapted yet, it is fully functional and includes a user system, chats and an article system complete with my own sorting algorithms and comment functionality as well as content moderation and notifications. The forum was built using Javascript for the SPA-Frontend, PHP for the Backend and SQL (mariaDB) for the backend. 
        </p>


        <div class="absolute bottom-[30px] xl:bottom-5 xl:left-5 text-white">
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://hbz.suso.schulen.konstanz.de/forum/v2/">Live Website</a>
            <a class="rounded border-2 p-1 border-white mr-1 transition hover:text-teal-500 hover:border-teal-500" href="https://github.com/HBZ-Suso/forum">Sourcecode</a>
        </div>
        <div class="absolute bottom-16 xl:bottom-2 xl:right-2">
            <UsedTechnologies technologies={["htmlcss", "js", "php", "sql"]} />
        </div>
    </div>
</div>