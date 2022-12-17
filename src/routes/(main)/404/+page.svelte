<script>
    import Error from "../../../comps/common/Error.svelte";
    import {page} from "$app/stores";
    let message = `Not Found: ${$page.url.pathname ?? ''}`
</script>

<svelte:head>
    <title>
        Error 404: {message}
    </title>
</svelte:head>

<Error status="404" {message}/>
