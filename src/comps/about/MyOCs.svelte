<script>
    import Card from "../../lib/Card.svelte";
    import globalVars from "../../globalVars.js";
    import CharacterIcon from "../common/CharacterIcon.svelte";
    import Teg from '../../assets/chars/teg.png'
    import Kai from '../../assets/chars/kai.png'
    import Alex from '../../assets/chars/alex.png'
    import Piper from '../../assets/chars/piper.png'
    import EdgeHusky from '../../assets/chars/edgehusky.png'
    import Richard from '../../assets/chars/richard.png'
</script>

<Card background={`linear-gradient(-30deg, ${globalVars.colors.teg_dark}, ${globalVars.colors.teg_light})`}>
    <div style:text-align="center" class="text">
        <div class="h2">
            My OCs!
        </div>
        These are all of my characters! More on the way 🦊
    </div>
    <div class="col-center">
        <div class="about-flex-wrap">
            <CharacterIcon margin="2rem 0 0 0" bold={true} img={Teg} name="Teg" />
            <CharacterIcon margin="2rem 0 0 0" bold={true} img={Kai} name="Kai" />
            <CharacterIcon margin="2rem 0 0 0" bold={true} img={Alex} name="Alex" />
            <CharacterIcon margin="2rem 0 0 0" bold={true} img={Piper} name="Piper" />
            <CharacterIcon margin="2rem 0 0 0" img={EdgeHusky} name="Edge Husky" />
            <CharacterIcon margin="2rem 0 0 0" img={Richard} name="Richard" />
        </div>
    </div>
</Card>

<style>
    .about-flex-wrap {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        gap: 1rem;
    }
</style>
