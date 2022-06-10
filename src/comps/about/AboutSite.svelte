<script>
    import globalVars from "../../globalVars.js";
    import Body from "../../lib/Body.svelte";
    import SideBySide from "../../lib/SideBySide.svelte";
    import Svelte from '../../assets/icons/svelte-full.svg'
    import StackPanel from "../../lib/StackPanel.svelte";
    import HCardButton from "../common/HCardButton.svelte";
    import Icon from "../../lib/Icon.svelte";
    import {siGithub, siSvelte} from 'simple-icons/icons'
</script>

<Body color={globalVars.colors.teg_grey}>
    <div class="h3" style:margin-bottom="1rem">
        About This Site
    </div>
    <SideBySide>
        <div slot="left" class="col-center">
            <img style:width="100%" style:max-width="30rem" style:margin="2rem" src={Svelte}/>
        </div>
        <div slot="right">
            <div class="h4 allcaps wide">
                This website was made with SvelteKit
            </div>

            <p>
                This website was written in HTML5 CSS3 and Javascript ES6 using the Svelte Framework.
                Libraries used include <code>svelte-scrollto</code>, <code>svelte-bootstrap-icons</code>,
                and <code>simple-icons</code>.
            </p>
            <p>
                This site doesn't rely on a server and is completely static. It is hosted on github pages
                with a domain from Google Domains.
            </p>
            <p>
            Clicks the links below to see relevant links!
            </p>

            <div class="bold wide allcaps col-center">
                <StackPanel direction="row" align="center" gap="0.25rem">
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
