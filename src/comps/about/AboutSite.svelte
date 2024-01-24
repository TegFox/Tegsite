<script>
    import globalVars from "../../vars/GlobalVars.js";
    import Body from "../../lib/Body.svelte";
    import SideBySide from "../../lib/SideBySide.svelte";
    import Svelte from '../../assets/icons/svelte-full.svg'
    import StackPanel from "../../lib/StackPanel.svelte";
    import HCardButton from "../common/HCardButton.svelte";
    import Icon from "../../lib/Icon.svelte";
    import {siGithub, siSvelte} from 'simple-icons/icons'
    import SvelteKit from "../common/SvelteKit.svelte";

    const background = "#00000088"
</script>

<div>
    <Body background={globalVars.colors.teg_grey}>
        <div class="h3" style:margin-bottom="1rem">
            About This Site
        </div>
        <SideBySide>
            <div slot="left" class="col-center">
                <SvelteKit maxWidth="30rem"/>
            </div>
            <div slot="right">
                <div class="h4 allcaps wide">
                    This website was built with SvelteKit
                </div>

                <p class="text">
                    This website was written in HTML5 CSS3 and Javascript ES6 using the SvelteKit Framework.
                    A static version of the site is deployed to GitHub pages using gh-pages. I do not collect any of
                    your data on this website.
                </p>
                <p class="text">
                    Clicks the buttons below for the code for this site and other relevant links!
                </p>

                <div class="bold wide allcaps mobile-center-825">
                    <StackPanel direction="row" align="center" gap="0.25rem" styleClass="mobile-space-evenly-825">
                        <HCardButton href={globalVars.external.siterepo} {background}>
                            <Icon icon={siGithub}/>
                            Site Repo
                        </HCardButton>
                        <HCardButton href={globalVars.external.svelte} {background}>
                            <Icon icon={siSvelte}/>
                            Svelte
                        </HCardButton>
                        <HCardButton href={globalVars.external.sveltekit} {background}>
                            <Icon icon={siSvelte}/>
                            SvelteKit
                        </HCardButton>
                    </StackPanel>
                </div>
            </div>
        </SideBySide>
    </Body>
</div>

