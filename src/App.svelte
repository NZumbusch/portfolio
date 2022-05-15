<script lang="ts">
    import TailwindCss from './TailwindCSS.svelte';
    import SplashPage from './lib/SplashPage.svelte';
    import AboutMe from './lib/AboutMe.svelte';
    

</script>

<main>
    <TailwindCss />

    <div class="mainContainer hideScrollbar absolute bottom-0 left-0 top-0 right-0 overflow-auto scrollbar-hide">
        <SplashPage></SplashPage>
        <AboutMe></AboutMe>
    </div>
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

</style>
