<script>
    import {fly} from 'svelte/transition'
    import {cubicOut} from 'svelte/easing'

    export let update = undefined
    export let dist = 35
    export let duration = 300

</script>

{#key update}
    <div in:fly|global={{  y: dist * -1, duration: duration, easing: cubicOut }}>
        <slot/>
    </div>
{/key}
