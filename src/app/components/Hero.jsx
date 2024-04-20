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
           logo: <FaCss3 size={30} className="text-blue-200 transition-all group-hover:text-blue-700" />,
           txt: ".css3 {years: 8};",
           hoverColor: "pt-3 transition-all group-hover:text-blue-700",
        },
        {
            id: "Javascript",
            logo: <FaSquareJs size={30} className="text-blue-200 transition-all group-hover:text-[#f7df1e]" />,
            txt: "const myExperience = getElementById('8 years');",
            hoverColor: "pt-3 transition-all group-hover:text-[#f7df1e]",
        },
        {
            id: "PHP",
            logo: <FaPhp size={30} className="text-blue-200 transition-all group-hover:text-[#7a86b8]" />,
            txt: "function myExperience() { echo '8 years'; }",
            hoverColor: "pt-3 transition-all group-hover:text-[#7a86b8]",
        },
    ];

    const frameworks = [
        {
            id: "jQuery",
            logo: <DiJqueryLogo size={30} className="text-blue-200 transition-all group-hover:text-[#0868ac]" />,
            txt: "$('.my-experience').addClass('eight-years');",
            hoverColor: "pt-3 transition-all group-hover:text-[#0868ac]",
        },
        {
            id: "React",
            logo: <FaReact size={30} className="text-blue-200 transition-all group-hover:text-[#61dbfb]" />,
            txt: "import { myReactExperience } from '2022';",
            hoverColor: "pt-3 transition-all group-hover:text-[#61dbfb]",
        },
        {
            id: "Next.js",
            logo: <SiNextdotjs size={30} className="text-blue-200 transition-all group-hover:text-white" />,
            txt: "import { myNextExperience } from '2022';",
            hoverColor: "pt-3 transition-all group-hover:text-white",
        },
        {
            id: "Bootstrap",
            logo: <FaBootstrap size={30} className="text-blue-200 transition-all group-hover:text-[#840afa]" />,
            txt: ".active {years: 5;}",
            hoverColor: "pt-3 transition-all group-hover:text-[#840afa]",
        },
        {
            id: "Tailwind",
            logo: <SiTailwindcss size={30} className="text-blue-200 transition-all group-hover:text-[#38bdf8]" />,
            txt: 'className="my-experience yr-2"',
            hoverColor: "pt-3 transition-all group-hover:text-[#38bdf8]",
        },
    ]

    const contentMgmt = [
        {
            id: "WordPress",
            logo: <FaWordpress size={30} className="text-blue-200 transition-all group-hover:text-[#207196]" />,
            txt: 'WordPress: 8 years',
            hoverColor: "pt-3 transition-all group-hover:text-[#207196]",
        },
        {
            id: "WooCommerce",
            logo: <SiWoo size={30} className="text-blue-200 transition-all group-hover:text-[#7c51ad]" />,
            txt: 'WooCommerce: 5 years',
            hoverColor: "pt-3 transition-all group-hover:text-[#7c51ad]",
        },
        {
            id: "Storyblok",
            logo: <SiStoryblok size={30} className="text-blue-200 transition-all group-hover:text-[#05adab]" />,
            txt: 'Storyblok: 2 years',
            hoverColor: "pt-3 transition-all group-hover:text-[#05adab]",
        },
    ]

    const uiux = [
        {
            id: "XD",
            logo: <SiAdobexd size={30} className="text-blue-200 transition-all group-hover:text-[#f75eee]" />,
            txt: 'XD: 8 years',
            hoverColor: "pt-3 transition-all group-hover:text-[#f75eee]",
        },
        {
            id: "Photoshop",
            logo: <SiAdobephotoshop size={30} className="text-blue-200 transition-all group-hover:text-[#2fa3f7]" />,
            txt: 'Photoshop: 8 years',
            hoverColor: "pt-3 transition-all group-hover:text-[#2fa3f7]",
        },
        {
            id: "Illustrator",
            logo: <SiAdobeillustrator size={30} className="text-blue-200 transition-all group-hover:text-[#f79500]" />,
            txt: 'Illustrator: 8 years',
            hoverColor: "pt-3 transition-all group-hover:text-[#f79500]",
        },
        {
            id: "After Effects",
            logo: <SiAdobeaftereffects size={30} className="text-blue-200 transition-all group-hover:text-[#9494f7]" />,
            txt: 'After Effects: 8 years',
            hoverColor: "pt-3 transition-all group-hover:text-[#9494f7]",
        },
    ]

  return (
    <div className="content-wrapper">
        <div className="flex flex-col lg:flex-row">
            <div className="basis-full w-full lg:basis-1/2 p-10">
                <div id="About" className='text-3xl font-semibold text-gray-300 border-b-4 border-teal-600 max-w-max pb-2 mb-8'>
                    About Me
                </div>
                <div className='mb-10'>
                    <p className='mb-6'>
                    As a web developer, I work extensively with Javascript, PHP, CSS3, jQuery, and React.
                    </p>
                    <p className='mb-6'>
                    As a designer, I use the Adobe Suite every day, with a focus on Photoshop, Illustrator, XD, and After Effects.
                    </p>
                    <p className='mb-6'>
                    I am very passionate about working on all phases of website development, from the first day with a blank canvas, to the last day of a project when the code is pushed to the live website.
                    </p> 
                </div>
                <div id="hero-images" className='relative bg-gradient-to-l from-cyan-500 to-blue-500 w-full mx-auto rounded-2xl max-h-[896px] max-w-[700px] text-center pr-[10px] pb-[10px] hover:p-0'>
                    <Image src="/fisherman_drawing_2.png" width="700" height="896" className="rounded-2xl relative z-20 transition-all duration-300"/>
                    <Image src="/fisherman_picture.jpg" width="700" height="896" className="bottom-photo rounded-2xl absolute bottom-0 z-10 transition-all duration-300"/>
                    <div id="more-about-me" className='absolute top-1/4 z-30 w-3/4 left-[12.5%] opacity-0 transition-all duration-300 text-white bg-slate-800/65 p-6 rounded-xl hidden backdrop-blur-sm sm:block'>
                        I have been working in web development for over 8 years. I am currently the in-house web developer, UI/UX designer, and marketing lead for an industrial motion control company in Rochester, NY. I enjoy taking on new challenges and working on projects that take me out of my comfort zone.
                    </div>
                    <div id="more-about-me-btn" className='absolute z-30 bottom-10 text-2xl text-white px-6 py-4 mx-auto rounded-md left-1/2 ml-[-120px] cursor-default bg-slate-800/65 transition-all duration-300 backdrop-blur-sm hidden md:block'>
                        More About Me
                    </div>
                </div>   
            </div>

            <div className="basis-full w-full lg:basis-1/2 p-10">
                <div className="flex-col">
                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4">
                        Languages
                    </div>

                    <ul className={firaCode.className}>
                        {languages.map(({ id, logo, txt, hoverColor }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4 group">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8 transition-all h-fit group-hover:bg-slate-900">
                                    {logo}
                                </div>
                                <div className={hoverColor}>
                                    {txt}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4 mt-8">
                        Frameworks
                    </div>
                    <ul className={firaCode.className}>
                        {frameworks.map(({ id, logo, txt, hoverColor }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4 group">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8 transition-all h-fit hover:bg-slate-900">
                                    {logo}
                                </div>
                                <div className={hoverColor}>
                                    {txt}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4 mt-8">
                        Content Management
                    </div>
                    <ul className={firaCode.className}>
                        {contentMgmt.map(({ id, logo, txt, hoverColor }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4 group">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8 transition-all h-fit hover:bg-slate-900">
                                    {logo}
                                </div>
                                <div className={hoverColor}>
                                    {txt}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="text-gray-300 text-lg border-solid border-b-1 border-gray-600 pb-2 mb-4 mt-8">
                        UI/UX Design & Marketing
                    </div>
                    <ul className={firaCode.className}>
                        {uiux.map(({ id, logo, txt, hoverColor }) => (
                            <li key={id} className="flex text-gray-300 mb-4 mt-4 group">
                                <div className="bg-gray-800 p-2 border-1 border-solid border-gray-700 rounded-md mr-8 transition-all hover:bg-slate-900">
                                    {logo}
                                </div>
                                <div className={hoverColor}>
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
