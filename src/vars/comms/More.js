import MoreImg from "../../assets/comms/more.png";

import sketchpage1 from '../../assets/comms/more/sketchpage1.png'
import sketchpage2 from '../../assets/comms/more/sketchpage2.png'

import chibi1 from '../../assets/comms/more/chibi1.png'
import chibi2 from '../../assets/comms/more/chibi2.png'
import chibi3 from '../../assets/comms/more/chibi3.png'
import chibi4 from '../../assets/comms/more/chibi4.png'

import drawover1 from '../../assets/comms/more/drawover1.png'
import drawover2 from '../../assets/comms/more/drawover2.png'
import drawover3 from '../../assets/comms/more/drawover3.png'

import comic1 from '../../assets/comms/more/comic1.png'
import comic2 from '../../assets/comms/more/comic2.png'

export default {
    name: 'More Stuff & Things',
    link: 'more',
    img: MoreImg,
    desc: "Other stuff that I'm trying out!",
    start: undefined,
    info: [
        {
            name: "Sketch Page",
            desc: "A group of simple drawings all together on the same page",
            extra: [
                "These would typically contain 5-8 sketches, but can have more or fewer! They're generally rougher and unshaded, but can be changed if wanted!",
                "I don't have any definitive pricing for these, but it would likely be quite expensive (Think $100+). If you're interested feel free to ask me for a quote!",
            ],
            imgs: [sketchpage1, sketchpage2],
        },
        {
            name: "Chibis",
            desc: "You, but smol",
            extra: [
                "Pricing on these would likely be somewhat less than illustrations. Feel free to ask for a quote!"
            ],
            imgs: [chibi1, chibi2, chibi3, chibi4],
        },
        {
            name: "Drawovers",
            desc: "Your character drawn onto a picture!",
            extra: [
                "You can choose any picture you'd like, whether its a picture of you with some friends, or an album cover!",
                "I have no idea on pricing for these, so they're Pay What You Want for now :3"
            ],
            imgs: [drawover1, drawover2, drawover3],
        },
        {
            name: "Comics",
            desc: "Tell a story about yourself!",
            extra: [
                "Since comics are really time consuming to make, expect much higher prices compared to some of the other commission types I take."
            ],
            imgs: [comic1, comic2],
        },
    ]
}
