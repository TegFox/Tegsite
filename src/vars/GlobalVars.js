import Headshot from './comms/Headshot.js'
import Illustration from './comms/Illustration.js'
import RefSheet from "./comms/RefSheet.js";
import Stickers from "./comms/Stickers.js";
import More from "./comms/More.js"

export default  {
    comms: 'closed', // 'open', 'closed', 'askme', anything else will just show the text
    comm_form: 'https://forms.gle/DWfqsnRutFfebx6n8',
    comm_types: [Headshot, Illustration, RefSheet, Stickers, More],
    colors: {
        teg_grey: '#192231',
        teg_bloo: '#44daff',
        teg_light: '#35AEFF',
        teg_dark: '#01327E',
    },
    external: {
        placeholder: 'https://liusef.github.io/dance-goat-dance/',
        twitter: 'https://twitter.com/floofybluething',
        trello: 'https://trello.com/b/zi6VfP7F/stuff',
        patreon: 'https://liusef.github.io/dance-goat-dance/',
        email: 'mailto:tegfox+site@outlook.com',
        siterepo: 'https://github.com/TegFox/TegSite',
        svelte: 'https://svelte.dev/',
        sveltekit: 'https://kit.svelte.dev/'
    },
}
