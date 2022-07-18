import HalfbodyImg from "../../assets/comms/halfbody.png";
import hbn1 from '../../assets/comms/halfbody/normal/hbn1.png'
import hbn2 from '../../assets/comms/halfbody/normal/hbn2.png'
import hbn3 from '../../assets/comms/halfbody/normal/hbn3.png'

export default {
    name: 'Half Bodies',
    link: 'halfbody',
    img: HalfbodyImg,
    desc: 'Art of around half your character 🤷 ',
    start: '50.00',
    info: [
        {
            name: "Halfbody Drawing",
            desc: "This is a placeholder description",
            base: "50.00",
            prices: [
                {
                    amnt: "25.00",
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
            imgs: [hbn1, hbn2, hbn3],
        },
    ],
}
