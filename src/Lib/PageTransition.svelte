<script>

    import {fly} from 'svelte/transition'
    import {cubicIn, cubicOut} from 'svelte/easing'

    export let url = ''
    export let dist = 35
    export let duration = 300

</script>

{#key url}
    <div in:fly={{  y: dist * -1, duration: duration, easing: cubicOut }}>
        <slot/>
    </div>
{/key}
