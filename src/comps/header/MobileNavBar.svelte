<script>
    import {Hamburger} from "svelte-hamburgers";

    export let open

</script>


<div style:z-index="25">
    <Hamburger bind:open type="spin-r" --color="white" --border-radius="1px" --layer-height="2px" --z-index="30"/>
</div>



