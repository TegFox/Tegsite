import HeadshotImg from "./assets/comms/headshot.png";
import HalfbodyImg from "./assets/comms/halfbody.png";
import FullbodyImg from "./assets/comms/fullbody.png";
import RefSheetImg from "./assets/comms/refsheet.png";
import StickersImg from "./assets/comms/stickers.png";
import MoreImg from "./assets/comms/more.png";

const commtypes = {
    headshot: {
        name: 'Headshots',
        link: 'headshot',
        img: HeadshotImg,
        desc: 'Art of your character from the chest up',
        start: '25.00',
    },
    fullbody: {
        name: 'Full Bodies',
        link: 'fullbody',
        img: FullbodyImg,
        desc: 'Show off your character(s) in a dynamic pose',
        start: '65.00',
    },
    halfbody: {
        name: 'Half Bodies',
        link: 'halfbody',
        img: HalfbodyImg,
        desc: 'Art of around half your character 🤷 ',
        start: '50.00',
    },
    refsheet: {
        name: 'Reference Sheets',
        link: 'refsheet',
        img: RefSheetImg,
        desc: 'A spread to detail every facet of your character',
        start: '60.00',
    },
    stickers: {
        name: 'Stickers',
        link: 'stickers',
        img: StickersImg,
        desc: 'Small icons with defined expressions',
        start: '8.00',
        contain: true,
    },
    more: {
        name: 'More',
        link: 'more',
        img: MoreImg,
        desc: "Other stuff that I'm trying out!",
        start: undefined,
    },
}



export default commtypes
