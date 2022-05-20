<style global>
    @tailwind utilities;
    @tailwind components;
    @tailwind base;



    .hideScrollbar {
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
    }

    .hideScrollbar::-webkit-scrollbar {
        display: none;
    }


    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    .nz-handwriting {
        font-family: Pacifico, sans-serif;
    }


    .underline-animation {
        display: inline-block;
        position: relative;
    }

    .underline-animation:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        right: 0;
        background-color: black;
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
    }

    .underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom right;
    }
</style>