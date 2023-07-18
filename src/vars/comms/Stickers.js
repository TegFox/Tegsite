import StickersImg from "../../assets/comms/stickers.png";

import se1 from '../../assets/comms/stickers/emotes/se1.png'
import se2 from '../../assets/comms/stickers/emotes/se2.png'
import se3 from '../../assets/comms/stickers/emotes/se3.png'
import se4 from '../../assets/comms/stickers/emotes/se4.png'

import ss1 from '../../assets/comms/stickers/stickers/ss1.png'
import ss2 from '../../assets/comms/stickers/stickers/ss2.png'


export default {
    name: 'Stickers & Emotes',
    link: 'stickers',
    img: StickersImg,
    desc: 'Small icons with defined expressions',
    start: '8.00',
    contain: true,
    info: [
        {
            name: "Emotes",
            desc: "A small and simple emote, great for Discord and similar platforms!",
            base: "8.00 per",
            prices: [
                {
                    amnt: "8.00+",
                    desc: "Add additional character"
                },
                {
                    amnt: "5.00",
                    desc: "Add 'YCH' placeholder character",
                },
                {
                    desc: "Extra Charge for adding items or props",
                },
                {
                    desc: "Extra Charge for Complex Characters"
                },
            ],
            extra: [
                "Stickers will be drawn at 512 x 512 px. This allows you to quickly upload to telegram if desired, while keeping the file sizes small enough to upload to discord.",
                "All emotes come with a 'display' image that shows off all your emotes in one place!"
            ],
            imgs: [se1, se2, se3, se4],
        },
        {
            name: "Stickers",
            desc: "Simple icons drawn from the waist up with more details and nuanced expressions!",
            base: "10.00 per",
            prices: [
                {
                    amnt: "10.00+",
                    desc: "Add additional character"
                },
                {
                    amnt: "7.00",
                    desc: "Add 'YCH' placeholder character",
                },
                {
                    desc: "Extra Charge for adding items or props",
                },
                {
                    desc: "Extra Charge for Complex Characters"
                },
            ],
            extra: [
                "Stickers will be drawn at 512 x 512 px. This allows you to quickly upload to telegram, discord, or any other platforms that allow user created stickers!",
                "All stickers come with a 'display' image that shows off all your stickers in one place!"
            ],
            imgs: [ss1, ss2],
        },
    ]
}
