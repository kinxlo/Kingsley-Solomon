import { RiGithubLine, RiLinkedinLine, RiMailSendLine, RiTwitterLine, RiWhatsappLine } from 'react-icons/ri'
const contacts = [
    {
        id: 1,
        name: `LinkedIn`,
        icon: RiLinkedinLine,
        link: `https://www.linkedin.com/in/kingsley-solomon-b90339b2/`,
        text: `LI`
    },
    {
        id: 2,
        name: `GitHub`,
        icon: RiGithubLine,
        link: `https://github.com/kinxlo`,
        text: `GH`
    },
    {
        id: 3,
        name: `Twitter`,
        icon: RiTwitterLine,
        link: `https://twitter.com/kinxlo`,
        text: `TW`
    },
    // {
    //     id: 4,
    //     name: `whatsapp`,
    //     icon: RiWhatsappLine,
    //     link: ``
    // },
    {
        id: 5,
        name: `Google`,
        icon: RiMailSendLine,
        link: `mailto:kinxly@gmail.com`,
        text: `GM`
    },
]

export default contacts