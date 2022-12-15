<script>

    export let icon
    export let color = 'white'
    export let height = 24
    export let width = height

</script>

<svg viewBox="0 0 24 24" {height} {width}>
    <path d={icon.path} fill={color}/>
</svg>

