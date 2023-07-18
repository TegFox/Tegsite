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
    desc: 'Show off your characters in a dynamic pose',
    start: '65.00',
    info: [
        {
            name: "Character Drawing",
            desc: "A half or full body drawing of your character or characters!",
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
                "Whether the art is shaded, and what type of shading is up to the commissioner! By default I do a hybrid of cel and soft shading.",
                "Adding additional props or items to the art may increase the price depending on the item.",
                "I can add a simple background, though this may increase the price depending on the complexity."
            ],
            imgs: [ic1, ic2, ic3, ic4],
        },
        {
            name: "Scene Drawing",
            desc: "A fully drawn scene with your characters and a background!",
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
                "Adding additional props or items to the art may increase the price depending on the item.",
                "The complexity of the posing and background will affect the price. If the art piece is too complex, I likely won't be able to take your commission."
            ],
            imgs: [is1, is2, is3, is4],
        },
    ],
}
