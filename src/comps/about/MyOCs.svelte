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

<div style:margin-bottom="2rem">
    <Card background={`linear-gradient(-30deg, ${globalVars.colors.teg_dark}, ${globalVars.colors.teg_light})`}>
        <div style:text-align="center" class="text">
            <div class="h2">
                My OCs!
            </div>
            <p style:margin-top="0" class="text">
                These are all of my characters! More on the way 🦊
            </p>
        </div>
        <div class="col-center">
            <div class="about-flex-wrap">
                <CharacterIcon bold={true} img={Teg} name="Teg" />
                <CharacterIcon bold={true} img={Kai} name="Kai" />
                <CharacterIcon bold={true} img={Alex} name="Alex" />
                <CharacterIcon bold={true} img={Piper} name="Piper" />
                <CharacterIcon img={EdgeHusky} name="Edge Husky" />
                <CharacterIcon img={Richard} name="Richard" />
            </div>
        </div>
    </Card>
</div>

<style>
    .about-flex-wrap {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        gap: 1rem;
    }
</style>
