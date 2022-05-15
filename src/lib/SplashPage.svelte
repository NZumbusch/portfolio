<script lang="ts">
    import { onMount } from "svelte";
    import { shuffle } from "../assets/utility/shuffle";


    let images = [
        ["/src/assets/Landscape/lowres/20220219_164441.jpg", "/src/assets/Landscape/highres/20220219_164441.jpg", ""],
        ["/src/assets/Landscape/lowres/20220219_164648.jpg", "/src/assets/Landscape/highres/20220219_164648.jpg", ""],
        ["/src/assets/Landscape/lowres/20220228_104005.jpg", "/src/assets/Landscape/highres/20220228_104005.jpg", ""],
        ["/src/assets/Landscape/lowres/20220303_111725.jpg", "/src/assets/Landscape/highres/20220303_111725.jpg", ""],
        ["/src/assets/Landscape/lowres/20220304_091112.jpg", "/src/assets/Landscape/highres/20220304_091112.jpg", ""],
        ["/src/assets/Landscape/lowres/20220326_100430.jpg", "/src/assets/Landscape/highres/20220326_100430.jpg", ""],
        ["/src/assets/Landscape/lowres/20220415_201734.jpg", "/src/assets/Landscape/highres/20220415_201734.jpg", ""],
        ["/src/assets/Landscape/lowres/20220415_201758.jpg", "/src/assets/Landscape/highres/20220415_201758.jpg", ""],
        ["/src/assets/Landscape/lowres/20220417_182531.jpg", "/src/assets/Landscape/highres/20220417_182531.jpg", ""],
        ["/src/assets/Landscape/lowres/20220417_185038.jpg", "/src/assets/Landscape/highres/20220417_185038.jpg", ""]
    ]
    images = shuffle(images);




    let currentLetter = 0;
    let animationDone = false;
    onMount(async () => {
        setTimeout(flashLetter, 1000);

        document.querySelector(".mainContainer").addEventListener("scroll", () => { animationDone = true; })
    });
    function flashLetter () {
        for (let elem of document.querySelectorAll(".splashImage")) {
            elem.children[1].innerHTML = "";
            elem.children[0].classList.remove("opacity-50")
        }

        while (true) {
            let elemListUncut = document.querySelectorAll(".splashImage");
            if (elemListUncut.length == 0) {
                console.debug("No image found");
                return false;
            }

            let elemList = [];
            for (let i = 0; i < elemListUncut.length; i++) {
                if (window.innerWidth < 640 && i <= 2) { elemList.push(elemListUncut[i]); }
                else if (window.innerWidth > 1280 && i < 10) { elemList.push(elemListUncut[i]); }
                else if (window.innerWidth > 1024 && i < 8) { elemList.push(elemListUncut[i]); }
                else if (window.innerWidth > 768 && i < 6) { elemList.push(elemListUncut[i]); }
                else if (window.innerWidth > 768 && i < 4) { elemList.push(elemListUncut[i]); }
            }

            let elem = elemList[Math.floor(Math.random() * (elemList.length - 1))];
            // @ts-ignore  This is surely an HTML Element
            if (!!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)) {
                elem.children[0].classList.add("opacity-50")
                elem.children[1].innerHTML = "<p>" + (["N", "A", "T", "H", "A", "N", "Z", "U", "M", "B", "U", "S", "C", "H"])[currentLetter] + "</p>";

                currentLetter++;
                if (currentLetter > 13) { 
                    currentLetter = 0; 
                    setTimeout(flashLetter, 1700); 
                    setTimeout(() => {
                        if (!animationDone) {
                            document.querySelector(".aboutme").scrollIntoView({behavior: "smooth"});
                            animationDone = true;
                        }
                    }, 700);
                } else { 
                    setTimeout(flashLetter, 700); 
                }
                return;
            }
        }
    }
</script>

<div class="relative h-full w-full overflow-hidden">
    <div class="z-0 h-full w-full flex flex-row flex-wrap justify-evenly items-center p-2">
        {#each images as image} 
            <div class="splashImage h-1/2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 relative">
                <img 
                    class="opacity-full grayscale-[70%] hover:grayscale-0 object-cover h-full w-full rounded-lg" 
                    src={image[0]} 
                    alt={image[2]} 
                >


                <!-- svelte-ignore a11y-missing-content -->
                <h1 class="text-9xl text-center absolute top-0 bottom-0 left-0 right-0 flex flex-row justify-center items-center pointer-events-none" />
            </div>
        {/each}
    </div>
</div>