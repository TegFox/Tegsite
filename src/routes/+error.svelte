<script>
    import Error from "../comps/common/Error.svelte";
    import {page} from '$app/stores'
    import Header from "../comps/header/Header.svelte";

    const status = $page.status;
    const message = $page.error.message;
</script>

<svelte:head>
    <title>
        Error {status}: {message}
    </title>
</svelte:head>

<Header/>
<Error {status} {message}/>
