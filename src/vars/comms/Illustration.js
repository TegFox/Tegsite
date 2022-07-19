import IllustrationImg from "../../assets/comms/illustration.png";

import ic1 from '../../assets/comms/illustration/char/ic1.png'
import ic2 from '../../assets/comms/illustration/char/ic2.png'
import ic3 from '../../assets/comms/illustration/char/ic3.png'
import ic4 from '../../assets/comms/illustration/char/ic4.png'

import is1 from '../../assets/comms/illustration/scene/is1.png'
import is2 from '../../assets/comms/illustration/scene/is2.png'
import is3 from '../../assets/comms/illustration/scene/is3.png'
import is4 from '../../assets/comms/illustration/scene/is4.png'


export default {
    name: 'Illustration',
    link: 'illustration',
    img: IllustrationImg,
    desc: 'Show off your character(s) in a dynamic pose',
    start: '65.00',
    info: [
        {
            name: "Character Drawing",
            desc: "This is a placeholder description",
            base: "65.00",
            prices: [
                {
                    amnt: "30.00",
                    desc: "Add Extra Character"
                },
                {
                    desc: "Extra Charge for Complex Characters"
                },
            ],
            extra: [

            ],
            imgs: [ic1, ic2, ic3, ic4],
        },
        {
            name: "Scene Drawing",
            desc: "This is a placeholder description",
            base: "85.00",
            prices: [
                {
                    amnt: "30.00",
                    desc: "Add Extra Character"
                },
                {
                    desc: "Extra Charge for Complex Characters"
                },
            ],
            extra: [

            ],
            imgs: [is1, is2, is3, is4],
        },
    ],
}
