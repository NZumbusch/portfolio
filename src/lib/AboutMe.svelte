<script>
    import { onMount } from "svelte";   
    import PageEuphonium from "./Pages/PageEuphonium.svelte";
    import PageBouldering from "./Pages/PageBouldering.svelte";
    import PageCodingProjects from "./Pages/PageCodingProjects.svelte";

    import linkedIn from "./../assets/Logos/linkedin.png";
    import github from "./../assets/Logos/github.png";
    import mail from "./../assets/Logos/mail.png";
    import PageCodingSkills from "./Pages/PageCodingSkills.svelte";




    /**  Text Switch Stuff */
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    onMount(async () => {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    });




    /** Intersection Observer / Menu */
    onMount(() => {
        

        let options = {
            root: document.querySelector('.mainContainer'),
            rootMargin: '0px',
            threshold: 0.7
        }
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    if (entries[0].target.classList.contains("nz-main-heading-page")) {
                        document.getElementById("menuContainer").classList.add("mt-[-52px]");
				    }
                    if (entries[0].target.classList.contains("nz-hobbies-heading-page")) {
                        document.getElementById("menuContainer").classList.remove("mt-[-52px]");
				    }
                }
			}, options);




            let mainHeadingPage = document.querySelector(".nz-main-heading-page");
            let hobbiesHeadingPage = document.querySelector(".nz-hobbies-heading-page");
            

            observer.observe(mainHeadingPage); // Hide menu
			observer.observe(hobbiesHeadingPage); // Show Menu
		}
	});
</script>


<div class="aboutme relative w-full min-h-full">
    <div id="contentContainer" class="relative h-auto w-full transition-all transition-500">
        <div class="nz-main-heading-page z-1 relative w-full min-h-screen pointer-events-none flex flex-col justify-center items-center">
            <h1 class="nz-handwriting text-black subpixel-antialiased text-7xl text-center w-fit h-fit">
                Nathan Zumbusch
            </h1>
    
            <!-- svelte-ignore a11y-missing-content -->
            <h2 
                class="txt-rotate "
                data-period="2000"
                data-rotate='[ "boulder", "code", "play the euphonium", "eat", "repeat" ]'
            />
        </div>
    


        <div class="z-1 relative w-full min-h-screen pointer-events-none flex flex-col justify-center items-center bg-black/80 text-white">
            <h1 class="nz-handwriting subpixel-antialiased text-7xl text-center w-fit h-fit mb-8 ">
                Programming
            </h1>
    
            <p class="max-w-xl">
                I started tinkering around with a laptop over 10 years ago. Since then I have always strived to get to know new technologies and learn more and more. From my first projects with Python to first tries of using C to calculate prime numbers to investing more and more of my time into webdevelopement, I have always been open towards new opportunities and problems to solve. 
            </p>
        </div>
    
        <PageCodingSkills />

        <PageCodingProjects />
    
    
        <div class="nz-hobbies-heading-page z-1 relative w-full min-h-screen pointer-events-none flex flex-col justify-center items-center bg-black/80">
            <h1 class="nz-handwriting text-white subpixel-antialiased text-7xl text-center w-fit h-fit mb-8">
                My hobbies
            </h1>
    
            <p class="max-w-xl text-white">
                Aside from coding, I also enjoy a variety of other activities, the most prominent of which are playing the Euphonium as well as Bouldering. 
            </p>
        </div>
    
        <PageEuphonium />
    
        <PageBouldering />
    </div>
    
    <div id="menuContainer" class="mt-[-52px] transition-all duration-500 ease-in-out fixed top-0 right-0 left-0 h-[52px] w-auto flex flex-row justify-left lg:justify-center items-center bg-white shadow-lg">
        <p class="hidden lg:block absolute left-0 top-0 h-full text-black capitalize tracking-widest text-lg p-3 pl-6 font-semibold">Nathan Zumbusch</p>
        
        <a href="#aboutme" class="pl-3 pt-1 pb-1 pr-6 font-semibold text-lg text-black capitalize tracking underline-animation">About me</a>
        <a href="#aboutme" class="pl-3 pt-1 pb-1 pr-6 font-semibold text-lg text-black capitalize tracking underline-animation">Hobbies</a>
        <a href="#aboutme" class="pl-3 pt-1 pb-1 pr-6 font-semibold text-lg text-black capitalize tracking underline-animation">Coding Projects</a>

        <div class="absolute h-full right-0 flex justify-right items-center p-3 pr-6">
            <img class="h-full hover:cursor-pointer pr-3" src={linkedIn} alt="LI"/>
            <img class="h-full hover:cursor-pointer pr-3" src={github} alt="GH"/>
            <img class="h-full hover:cursor-pointer" src={mail} alt="MAIL"/>
        </div>
    </div>
</div>