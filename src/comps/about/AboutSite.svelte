<script>
    import globalVars from "../../globalVars.js";
    import Body from "../../lib/Body.svelte";
    import SideBySide from "../../lib/SideBySide.svelte";
    import Svelte from '../../assets/icons/svelte-full.svg'
    import StackPanel from "../../lib/StackPanel.svelte";
    import HCardButton from "../common/HCardButton.svelte";
    import Icon from "../../lib/Icon.svelte";
    import {siGithub, siSvelte} from 'simple-icons/icons'
    import SvelteKit from "../common/SvelteKit.svelte";
</script>

<div>
    <Body color={globalVars.colors.teg_grey}>
        <div class="h3" style:margin-bottom="1rem">
            About This Site
        </div>
        <SideBySide>
            <div slot="left" class="col-center">
                <SvelteKit maxWidth="40rem"/>
            </div>
            <div slot="right">
                <div class="h4 allcaps wide">
                    This website was built with SvelteKit
                </div>

                <p class="text">
                    This website was written in HTML5 CSS3 and Javascript ES6 using the SvelteKit Framework. This project
                    uses Svelte, and a static version of the site is deployed to GitHub pages using gh-pages.
                </p>
                <p class="text">
                    Libraries used include <code>svelte-scrollto</code>, <code>svelte-bootstrap-icons</code>,
                    and <code>simple-icons</code>.
                </p>
                <p class="text">
                    Clicks the buttons below for relevant links!
                </p>

                <div class="bold wide allcaps mobile-center-825">
                    <StackPanel direction="row" align="center" gap="0.25rem" styleClass="mobile-space-evenly-825">
                        <HCardButton href={globalVars.external.placeholder} background="#00000088">
                            <Icon icon={siGithub}/>
                            Site Repo
                        </HCardButton>
                        <HCardButton href={globalVars.external.placeholder} background="#00000088">
                            <Icon icon={siSvelte}/>
                            Svelte
                        </HCardButton>
                        <HCardButton href={globalVars.external.placeholder} background="#00000088">
                            <Icon icon={siSvelte}/>
                            SvelteKit
                        </HCardButton>
                    </StackPanel>
                </div>
            </div>
        </SideBySide>
    </Body>
</div>

