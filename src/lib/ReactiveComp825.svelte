<div class="outer">
    <div class="main">
        <slot name="main"/>
    </div>
    <div class="alt">
        <slot name="alt"/>
    </div>
</div>

<style>
    .main {display: block}
    .alt {display: none}
    @media (max-width: 825px) {
        .main {display: none}
        .alt {display: block}
    }
</style>
