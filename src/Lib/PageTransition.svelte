<script>

    import {fly} from 'svelte/transition'
    import {cubicIn, cubicOut} from 'svelte/easing'

    let outerWidth

    export let url = ''
    export let dist = 35
    export let duration = 300
    export let outduration = duration * 0.5
    export let delayconst = 0.75

    const mobileBreakpoint = 700

    $: outduration = outerWidth > mobileBreakpoint ? duration * 0.5 : 0

</script>

<svelte:window bind:outerWidth/>

{#key url}
    <div in:fly={{  y: dist * -1, duration: duration, delay: outduration * delayconst, easing: cubicOut }}
         out:fly={{ y: dist, duration: outduration, easing: cubicIn }}>
        <slot/>
    </div>
{/key}
