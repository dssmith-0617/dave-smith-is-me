"use client";

import Image from 'next/image';
import { FaReact, FaSquareJs, FaCss3, FaPhp, FaBootstrap, FaWordpress } from 'react-icons/fa6';
import { DiJqueryLogo } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiWoo, SiStoryblok, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobexd } from  'react-icons/si';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({subsets: ["latin"]});

function Hero() {
    

    const languages = [
        {
           id: "CSS3",
           logo: <FaCss3 size={30} className="text-blue-200" />,
           txt: ".css3 {years: 8};",
        },
        {
            id: "Javascript",
            logo: <FaSquareJs size={30} className="text-blue-200" />,
            txt: "const myExperience = getElementById('8 years');",
        },
        {
            id: "PHP",
            logo: <FaPhp size={30} className="text-blue-200" />,
            txt: "function myExperice() { echo '8 years'; }",
        },
    ];

    const frameworks = [
        {
            id: "jQuery",
            logo: <DiJqueryLogo size={30} className="text-blue-200" />,
            txt: "$('.my-experience').addClass('eight-years');",
        },
        {
            id: "React",
            logo: <FaReact size={30} className="text-blue-200" />,
            txt: "import { myReactExperience } from '2022';",
        },
        {
            id: "Next.js",
            logo: <SiNextdotjs size={30} className="text-blue-200" />,
            txt: "import { myNextExperience } from '2022';",
        },
        {
            id: "Bootstrap",
            logo: <FaBootstrap size={30} className="text-blue-200" />,
            txt: ".active {years: 5;}",
        },
        {
            id: "Tailwind",
            logo: <SiTailwindcss size={30} className="text-blue-200" />,
            txt: 'className="my-experience yr-2"',
        },
    ]

    const contentMgmt = [
        {
            id: "WordPress",
            logo: <FaWordpress size={30} className="text-blue-200" />,
            txt: 'WordPress: 8 years',
        },
        {
            id: "WooCommerce",
            logo: <SiWoo size={30} className="text-blue-200" />,
            txt: 'WooCommerce: 5 years',
        },
        {
            id: "Storyblok",
            logo: <SiStoryblok size={30} className="text-blue-200" />,
            txt: 'Storyblok: 2 years',
        },
    ]

    const uiux = [
        {
            id: "XD",
            logo: <SiAdobexd size={30} className="text-blue-200" />,
            txt: 'XD: 8 years',
        },
        {
            id: "Photoshop",
            logo: <SiAdobephotoshop size={30} className="text-blue-200" />,
            txt: 'Photoshop: 8 years',
        },
        {
            id: "Illustrator",
            logo: <SiAdobeillustrator size={30} className="text-blue-200" />,
            txt: 'Illustrator: 8 years',
        },
        {
            id: "After Effects",
            logo: <SiAdobeaftereffects size={30} className="text-blue-200" />,
            txt: 'After Effects: 8 years',
        },
    ]

  return (
    <div id="content-wrapper" className='mt-96'>
        <div className="flex lg:flex-row md:flex-col sm:flex-col">
            <div className="basis-1/2 p-4">
                <div id="hero-images" className='pr-8 relative bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-2xl max-h-[896px]'>
                    <Image src="/fisherman_drawing.png" width="700" height="896" className="rounded-2xl absolute z-20 transition-all"/>
                    <Image src="/fisherman_picture.jpg" width="700" height="896" className="rounded-2xl absolute z-10 transition-all"/>
                </div>   
            </div>

            <div className="basis-1/2 p-4">
                <div className="flex-col">
                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4">
                        Languages
                    </div>

                    <ul className={firaCode.className}>
                        {languages.map(({ id, logo, txt }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8">
                                    {logo}
                                </div>
                                <div className="pt-3">
                                    {txt}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4 mt-8">
                        Frameworks
                    </div>
                    <ul className={firaCode.className}>
                        {frameworks.map(({ id, logo, txt }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8">
                                    {logo}
                                </div>
                                <div className="pt-3">
                                    {txt}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4 mt-8">
                        Content Management
                    </div>
                    <ul className={firaCode.className}>
                        {contentMgmt.map(({ id, logo, txt }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8">
                                    {logo}
                                </div>
                                <div className="pt-3">
                                    {txt}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4 mt-8">
                        UI/UX Design & Marketing
                    </div>
                    <ul className={firaCode.className}>
                        {uiux.map(({ id, logo, txt }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8">
                                    {logo}
                                </div>
                                <div className="pt-3">
                                    {txt}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>    
        </div>
        
           
       
        
    </div>
   
  )
}

export default Hero
