<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                status,
                message: error.message,
            }
        };
    }
</script>

<script>

    import Error from "../comps/common/Error.svelte";

    export let status
    export let message
</script>

<svelte:head>
    <title>
        Error {status}: {message}
    </title>
</svelte:head>

<Error {status} {message}/>
