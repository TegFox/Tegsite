<script>
    import Error from "../../comps/common/Error.svelte";
    import Header from "../../comps/header/Header.svelte";
</script>

<svelte:head>
    <title>
        Error 404: Not Found
    </title>
</svelte:head>

<Header/>
<Error status="404" message="Not Found"/>
