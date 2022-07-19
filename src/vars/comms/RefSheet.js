import RefSheetImg from "../../assets/comms/refsheet.png";

import rss1 from '../../assets/comms/refsheet/rss1.png'
import rss2 from '../../assets/comms/refsheet/rss2.png'

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
                    desc: "Small Element (Paws, Tail, etc.)"
                },
                {
                    amnt: "10.00",
                    desc: "Large Element (Bust, Outfit, etc.)"
                },
                {
                    amnt: "15.00+",
                    desc: "Chibi Drawing"
                },
                {
                    amnt: "20.00+",
                    desc: "Full Body Pose"
                },
                {
                    desc: "Extra charge for Complex Characters"
                },
            ],
            extra: [
                "All reference sheets include a front pose, a back pose, a color palette, and some basic information.",
                "Don't have any existing references? I can work off of a text description to create a reference sheet! This will cause the price to increase depending on complexity",
                "Don't have a character or want to rework an existing one? No worries! I can work with you to throw together a new character design! This will cause the price to increase depending on complexity",
                "Reference sheets can not and will not be shaded. This is so artists can be sure what color things are. For the love of god please do not shade your ref sheets.",
            ],
            imgs: [rss1, rss2],
        },
    ],
}
