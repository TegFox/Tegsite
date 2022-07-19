import HeadshotImg from "../../assets/comms/headshot.png"

import hsl1 from '../../assets/comms/headshot/lined/hsl1.png'
import hsl2 from '../../assets/comms/headshot/lined/hsl2.png'

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
            desc: "This is a placeholder description",
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

            ],
            imgs: [hsl1, hsl2],
        },
        {
            name: "Lineless Headshot",
            desc: "This is a placeholder description",
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

            ],
            imgs: [hsls1, hsls2, hsls3],
        },
    ],
}
