import FullbodyImg from "../../assets/comms/fullbody.png";

import fbn1 from '../../assets/comms/fullbody/normal/fbn1.png'
import fbn2 from '../../assets/comms/fullbody/normal/fbn2.png'
import fbn3 from '../../assets/comms/fullbody/normal/fbn3.png'
import fbn4 from '../../assets/comms/fullbody/normal/fbn4.png'
import fbn5 from '../../assets/comms/fullbody/normal/fbn5.png'

export default {
    name: 'Full Bodies',
    link: 'fullbody',
    img: FullbodyImg,
    desc: 'Show off your character(s) in a dynamic pose',
    start: '65.00',
    info: [
        {
            name: "Fullbody Drawing",
            desc: "This is a placeholder description",
            base: "65.00",
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
            imgs: [fbn1, fbn2, fbn3, fbn4, fbn5],
        },
    ],
}
