<script>
    import Header from "../comps/header/Header.svelte";
    import '../app.css'
    import Footer from "../comps/footer/Footer.svelte";
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

