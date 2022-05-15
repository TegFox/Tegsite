<script>
    import Header from "../comps/Header.svelte";
    import '../app.css'
    import Footer from "../comps/Footer.svelte";
</script>

<header>
    <Header/>
</header>

<main>
    <slot/>
</main>

<footer>
    <Footer/>
</footer>

