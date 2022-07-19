import HeadshotImg from "../../assets/comms/headshot.png"

import hsl1 from '../../assets/comms/headshot/lined/hsl1.png'
import hsl2 from '../../assets/comms/headshot/lined/hsl2.png'
import hsl3 from '../../assets/comms/headshot/lined/hsl3.png'

import hsls1 from '../../assets/comms/headshot/lineless/hsls1.png'
import hsls2 from '../../assets/comms/headshot/lineless/hsls2.png'
import hsls3 from '../../assets/comms/headshot/lineless/hsls3.png'

export default {
    name: 'Headshots',
    link: 'headshot',
    img: HeadshotImg,
    desc: 'Art of your character from the chest up',
    start: '25.00',
    info: [
        {
            name: "Lined Headshot",
            desc: "Just a standard headshot of your character!",
            base: "25.00",
            prices: [
                {
                    amnt: "5.00",
                    desc: "Add detailed background"
                },
                {
                    desc: "Extra Charge for Complex Characters"
                }
            ],
            extra: [
                "Double headshots are available! These allow for 2 characters side by side and can be split down to middle to use as 2 individual headshots",
                "Additional items and props can be added, although it may increase the price"
            ],
            imgs: [hsl1, hsl2, hsl3],
        },
        {
            name: "Lineless Headshot",
            desc: "Headshot of your character in a lineless style",
            base: "40.00",
            prices: [
                {
                    amnt: "5.00",
                    desc: "Add detailed background"
                },
                {
                    desc: "Extra Charge for Complex Characters"
                }
            ],
            extra: [
                "These headshots can be done in a more clean or a more paintery, sketchy style. Just specify which you'd prefer!",
                "Additional items and props can be added, although it may increase the price"
            ],
            imgs: [hsls1, hsls2, hsls3],
        },
    ],
}
