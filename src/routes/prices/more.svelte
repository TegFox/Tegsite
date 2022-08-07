<script>
    import globalVars from "../../vars/GlobalVars.js";
    import More from "../../vars/comms/More.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import InfoPage from "../../comps/prices/InfoPage.svelte";
</script>

<title>
    More - Teg Fox
</title>

<InfoPage info={More} showTitleWhenSolo={true}/>
