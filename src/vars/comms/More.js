import MoreImg from "../../assets/comms/more.png";

import sketchpage1 from '../../assets/comms/more/sketchpage1.png'

import chibi1 from '../../assets/comms/more/chibi1.png'

import drawover1 from '../../assets/comms/more/drawover1.png'
import drawover2 from '../../assets/comms/more/drawover2.png'

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
                "These would typically contain 5-8 unshaded sketches, but can have more or fewer!",
                "I don't have any definitive pricing for these, but it would likely be quite expensive (Think $100+). If you're interested feel free to ask me for a quote!",
            ],
            imgs: [sketchpage1],
        },
        {
            name: "Chibis",
            desc: "You, but small",
            extra: [
                "Pricing on these would likely be somewhat less than illustrations. Feel free to ask for a quote!"
            ],
            imgs: [chibi1],
        },
        {
            name: "Drawovers",
            desc: "Your character drawn onto a picture!",
            extra: [
                "You can choose any picture you'd like, whether its a picture of you with some friends, or an album cover!",
                "I have no idea on pricing for these, so they're Pay What You Want for now :3"
            ],
            imgs: [drawover1, drawover2],
        },
    ]
}
