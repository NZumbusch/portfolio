<script lang="ts">
    import { onMount } from "svelte";
    import { shuffle } from "../assets/utility/shuffle";


    let images = [
        ["/src/assets/Landscape/lowres/20220219_164441.jpg", "/src/assets/Landscape/avif/a4t00-pxugt.avif", "/src/assets/Landscape/webp/20220219_164441.webp", ""],
        ["/src/assets/Landscape/lowres/20220219_164648.jpg", "/src/assets/Landscape/avif/a9qwk-51i8v.avif", "/src/assets/Landscape/webp/20220219_164648.webp", ""],
        ["/src/assets/Landscape/lowres/20220228_104005.jpg", "/src/assets/Landscape/avif/ad6ky-8039x.avif", "/src/assets/Landscape/webp/20220228_104005.webp", ""],
        ["/src/assets/Landscape/lowres/20220303_111725.jpg", "/src/assets/Landscape/avif/addq3-rg113.avif", "/src/assets/Landscape/webp/20220303_111725.webp", ""],
        ["/src/assets/Landscape/lowres/20220304_091112.jpg", "/src/assets/Landscape/avif/adkck-xtkyv.avif", "/src/assets/Landscape/webp/20220304_091112.webp", ""],
        ["/src/assets/Landscape/lowres/20220326_100430.jpg", "/src/assets/Landscape/avif/aettj-tk6v8.avif", "/src/assets/Landscape/webp/20220326_100430.webp", ""],
        ["/src/assets/Landscape/lowres/20220415_201734.jpg", "/src/assets/Landscape/avif/ajahy-jbn71.avif", "/src/assets/Landscape/webp/20220415_201734.webp", ""],
        ["/src/assets/Landscape/lowres/20220415_201758.jpg", "/src/assets/Landscape/avif/au2g3-8vwny.avif", "/src/assets/Landscape/webp/20220415_201758.webp", ""],
        ["/src/assets/Landscape/lowres/20220417_182531.jpg", "/src/assets/Landscape/avif/auecl-6wzwa.avif", "/src/assets/Landscape/webp/20220417_182531.webp", ""],
        ["/src/assets/Landscape/lowres/20220417_185038.jpg", "/src/assets/Landscape/avif/awltv-2mdkf.avif", "/src/assets/Landscape/webp/20220417_185038.webp", ""]
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
            elem.children[0].classList.remove("h-0");
            elem.children[0].classList.remove("w-0");
            elem.children[0].classList.add("w-full");
            elem.children[0].classList.add("h-full");
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
                elem.children[0].classList.add("h-0");
                elem.children[0].classList.add("w-0");
                elem.children[0].classList.remove("w-full");
                elem.children[0].classList.remove("h-full");

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
                    }, 1000);
                } else { 
                    setTimeout(flashLetter, 1000); 
                }
                return;
            }
        }
    }
</script>

<div class="relative h-full w-full overflow-hidden">
    <div class="z-0 h-full w-full flex flex-row flex-wrap justify-evenly items-center p-2">
        {#each images as image} 
            <div class="splashImage h-1/2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 relative flex justify-center items-center">
                <div 
                    class="transition-all duration-300 opacity-100 bg-cover h-full w-full rounded-lg" 
                    style="background-image: url('{ image[1] }')"
                />


                <!-- svelte-ignore a11y-missing-content -->
                <h1 class="absolute bg-white font-bold bg-clip-text text-[250px] text-center top-2 bottom-2 left-2 right-2 flex flex-row justify-center items-center pointer-events-none bg-cover" style="color: transparent; background-image: url('{ image[1] }')" />
            </div>
        {/each}
    </div>
</div>