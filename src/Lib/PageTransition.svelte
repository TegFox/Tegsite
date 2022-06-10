<script>

    import {fly} from 'svelte/transition'
    import {cubicIn, cubicOut} from 'svelte/easing'

    export let url = ''
    export let dist = 20
    export let duration = 250
    export let delayconst = 0.4

</script>

{#key url}
    <div in:fly={{  y: dist * -1, duration: duration, delay: duration * delayconst, easing: cubicOut }}
         out:fly={{ y: dist, duration: duration * 0.5, easing: cubicIn }}>
        <slot/>
    </div>
{/key}
