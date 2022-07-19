import StickersImg from "../../assets/comms/stickers.png";

import se1 from '../../assets/comms/stickers/emotes/se1.png'
import se2 from '../../assets/comms/stickers/emotes/se2.png'
import se3 from '../../assets/comms/stickers/emotes/se3.png'

import ss1 from '../../assets/comms/stickers/stickers/ss1.png'


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
            desc: "This is a placeholder description",
            base: "8.00",
            prices: [
                {
                    amnt: "30.00",
                    desc: "Add Extra Character"
                },
                {
                    amnt: "20.00+",
                    desc: "Add Detailed background"
                },
                {
                    desc: "Extra Charge for Complex Characters"
                },
            ],
            extra: [

            ],
            imgs: [se1, se2, se3],
        },
        {
            name: "Stickers",
            desc: "This is a placeholder description",
            base: "10.00",
            prices: [
                {
                    amnt: "30.00",
                    desc: "Add Extra Character"
                },
                {
                    amnt: "20.00+",
                    desc: "Add Detailed background"
                },
                {
                    desc: "Extra Charge for Complex Characters"
                },
            ],
            extra: [

            ],
            imgs: [ss1],
        },
    ]
}
