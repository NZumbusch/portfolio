<script>
    import { onMount } from "svelte";   
    import PageEuphonium from "./Pages/PageEuphonium.svelte";
    import PageBouldering from "./Pages/PageBouldering.svelte";
    import PageCoding from "./Pages/PageCoding.svelte";

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
</script>




<div class="aboutme relative w-full min-h-full">
    <div class="z-1 relative w-full min-h-screen pointer-events-none flex flex-col justify-center items-center">
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

`



`

    <div class="z-1 relative w-full min-h-screen pointer-events-none flex flex-col justify-center items-center">
        <h1 class="nz-handwriting text-black subpixel-antialiased text-7xl text-center w-fit h-fit mb-8">
            My hobbies
        </h1>

        <p class="max-w-xl">
            Aside from coding, I also enjoy a variety of other activities, the most prominent of which are playing the Euphonium as well as Bouldering. 
        </p>
    </div>

    <PageEuphonium />

    <PageBouldering />


    <div class="z-1 relative w-full min-h-screen pointer-events-none flex flex-col justify-center items-center">
        <h1 class="nz-handwriting text-black subpixel-antialiased text-7xl text-center w-fit h-fit mb-8">
            Coding Projects
        </h1>

        <p class="max-w-xl">
            I started tinkering around with a laptop over 10 years ago. Since then I have always strived to get to know new technologies and learn more and more. From my first projects with Python to first tries of using C to calculate prime numbers to investing more and more of my time into webdevelopement, I have always been open towards new opportunities and problems to solve. 
        </p>
    </div>


    <PageCoding />
</div>
