import Image from 'next/image';
import { FaReact, FaSquareJs, FaCss3, FaPhp, FaBootstrap, FaWordpress } from 'react-icons/fa6';
import { DiJqueryLogo } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiWoo, SiStoryblok, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobexd } from  'react-icons/si';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({subsets: ["latin"]});

function Portfolio() {
    const projects = [
        {
            id: '01',
            title: 'Build-your-own motor module',
            url: 'https://teknic.com/build-hudson-model/M-3422S-Lx-xxD/',
            urlName: 'teknic.com',
            image: '',
            explainer: "This page allows users to build a custom servo motor by choosing from a set of potential options and/or upgrades to optimize these motors into their machine design. Completing the customizer brings the user to the page of the part number that was created, where the user can purchase that part number through the website's e-commerce.",
            icon1: <FaSquareJs size={30} className="text-cyan-950" />,
            icon2: <FaPhp size={30} className='text-cyan-950' />,
            icon3: <FaCss3 size={30} className='text-cyan-950' />,
            icon4: <FaWordpress size={30} className='text-cyan-950' />,
            icon5: <SiAdobephotoshop size={30} className='text-cyan-950' />,
        },
        {
            id: '02',
            title: 'Orthopedic Surgical Group Website',
            url: 'https://www.arnotortho.com/',
            urlName: 'arnotortho.com',
            image: '',
            explainer: "The Arnot Orthopedic group was intent on creating a website that is easy to navigate for existing (and potential) patients. The group also wanted the ability to add patient resources and useful information on their own without learning how to code. This Next.js application was built with Storyblok CMS, which allows the doctors to add content by filling out a few fields and clicking 'Publish.'",
            icon1: <FaReact size={30} className="text-cyan-950" />,
            icon2: <SiNextdotjs size={30} className='text-cyan-950' />,
            icon3: <SiTailwindcss size={30} className='text-cyan-950' />,
            icon4: <SiStoryblok size={30} className='text-cyan-950' />,
            icon5: <SiAdobephotoshop size={30} className='text-cyan-950' />,
        },
        {
            id: '03',
            title: 'Product Acessories Guide',
            url: 'https://teknic.com/clearpath-accessories-guide/accessories-guide-sd-dc-sealed/',
            urlName: 'teknic.com',
            image: '',
            explainer: "This page guides users through the process of purchasing required and optional accessories to complete a servo motor system. I used Bootstrap and jQuery to create a guide that is easy to use and provides a substantial amount of information to the user without overwhelming them.",
            icon1: <DiJqueryLogo size={30} className="text-cyan-950" />,
            icon2: <FaBootstrap size={30} className='text-cyan-950' />,
            icon3: <FaCss3 size={30} className='text-cyan-950' />,
            icon4: <FaWordpress size={30} className='text-cyan-950' />,
            icon5: <SiAdobeillustrator size={30} className='text-cyan-950' />,
        },
        {
            id: '04',
            title: 'Revered Campaigns',
            url: 'https://www.reveredcampaigns.com/',
            urlName: 'reveredcampaigns.com/',
            image: '',
            explainer: "This page guides users through the process of purchasing required and optional accessories to complete a servo motor system. I used Bootstrap and jQuery to create a guide that is easy to use and provides a substantial amount of information to the user without overwhelming them.",
            icon1: <FaReact size={30} className="text-cyan-950" />,
            icon2: <SiNextdotjs size={30} className='text-cyan-950' />,
            icon3: <SiTailwindcss size={30} className='text-cyan-950' />,
            icon5: <SiAdobeillustrator size={30} className='text-cyan-950' />,
        },

    ]

  return (
    <div id="Portfolio" className="w-full max-w-[1600px] mx-auto mt-[50px]">
        <div className="flex lg:flex-row md:flex-col sm:flex-col">
            <div className="basis-1/2 p-10">
                <div id="About" className='text-3xl font-semibold text-gray-300 border-b-4 border-teal-600 max-w-max pb-2 mb-8'>
                    Portfolio
                </div>
            </div>
            <div className="basis-1/2 p-10">

            </div>
        </div>
    </div>
  )
}

export default Portfolio
