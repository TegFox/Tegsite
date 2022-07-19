import RefSheetImg from "../../assets/comms/refsheet.png";

import rss1 from '../../assets/comms/refsheet/rss1.png'
import rss2 from '../../assets/comms/refsheet/rss2.png'
import rss3 from '../../assets/comms/refsheet/rss3.png'

export default {
    name: 'Reference Sheets',
    link: 'refsheet',
    img: RefSheetImg,
    desc: 'A spread to detail every facet of your character',
    start: '60.00',
    info: [
        {
            name: "Reference Sheet",
            desc: "This is a placeholder description",
            base: "60.00",
            prices: [
                {
                    amnt: "5.00",
                    desc: "Additional Small Element (Paws, Tail, etc.)"
                },
                {
                    amnt: "10.00",
                    desc: "Additional Large Element (Bust, Outfit, etc.)"
                },
                {
                    amnt: "20.00+",
                    desc: "Additional Full Body Pose"
                },
                {
                    desc: "Extra charge for Complex Characters"
                },
            ],
            extra: [

            ],
            imgs: [rss1, rss2, rss3],
        },
    ],
}
