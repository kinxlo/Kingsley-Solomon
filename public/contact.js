import { RiGithubLine, RiLinkedinLine, RiMailSendLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri'
const contacts = [
    {
        id: 1,
        name: `LinkedIn`,
        icon: RiLinkedinLine,
        link: `https://www.linkedin.com/in/kingsley-solomon-b90339b2/`,
        text: `LI`,
        msg: `...you can connect with kingsley on linkedin`

    },
    {
        id: 2,
        name: `GitHub`,
        icon: RiGithubLine,
        link: `https://github.com/kinxlo`,
        text: `GH`,
        msg: `...this link will take you to kingsley's Github page.`
    },
    {
        id: 3,
        name: `Twitter`,
        icon: RiTwitterLine,
        link: `https://twitter.com/kinxlo`,
        text: `TW`,
        msg: `...he is a huge fan of twitter...i wonder why he has so little followers`
    },
    {
        id: 5,
        name: `Google`,
        icon: RiMailSendLine,
        link: `mailto:kinxly@gmail.com`,
        text: `GM`,
        msg: `...A quick mail is never out of style.`
    },
]

export default contacts