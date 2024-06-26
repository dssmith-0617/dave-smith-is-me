import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaSquareJs, FaCss3, FaPhp, FaBootstrap, FaWordpress } from 'react-icons/fa6';
import { DiJqueryLogo } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiWoo, SiStoryblok, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobexd } from  'react-icons/si';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({subsets: ["latin"]});

function Portfolio() {
    const projects = [
        {
            id: '01',
            title: 'Build-your-own motor module',
            url: 'https://teknic.com/build-hudson-model/M-3422S-Lx-xxD/',
            urlName: 'teknic.com',
            image: '/build-hudson.jpg',
            explainer: "This page allows users to build a custom servo motor by choosing from a set of potential options and/or upgrades to optimize these motors into their machine design. Completing the customizer brings the user to the page of the part number that was created, where the user can purchase that part number through the website's e-commerce.",
            challenges: "The prompt for this project was simple: build a configurator that brings the user to the selected model after selecting from 3-4 inputs (e.g., connector type, shaft size, and encoder density). The primary challenges here were two-fold: 1) There are several thousand possible part numbers that could be created, and 2) Every rule for these motors has at least one exception (e.g., building a motor with waterproof connectors and a motor shaft that is not waterproof would create a motor that is no longer waterproof).",
            icon1: <FaSquareJs size={40} className="text-[#0d9488] basis-1/5" />,
            icon2: <FaPhp size={40} className='text-[#0d9488] basis-1/5' />,
            icon3: <FaCss3 size={40} className='text-[#0d9488] basis-1/5' />,
            icon4: <FaWordpress size={40} className='text-[#0d9488] basis-1/5' />,
            icon5: <SiAdobephotoshop size={40} className='text-[#0d9488] basis-1/5' />,
        },
        {
            id: '02',
            title: 'Orthopedic Surgical Group Website',
            url: 'https://www.arnotortho.com/',
            urlName: 'arnotortho.com',
            image: '/arnot-skeleton.jpg',
            explainer: "The Arnot Orthopedic group was intent on creating a website that is easy to navigate for existing (and potential) patients. The group also wanted the ability to add patient resources and useful information on their own without learning how to code. This Next.js application was built with Storyblok CMS, which allows the doctors to add content by filling out a few fields and clicking 'Publish.'",
            challenges: "The biggest challenge with this project was the amount of planning required before creating the CMS and architecting the website structure so it was easy for doctors to edit, and also easy for existing and prospective patients to navigate.",
            icon1: <FaReact size={40} className="text-[#0d9488] basis-1/5" />,
            icon2: <SiNextdotjs size={40} className='text-[#0d9488] basis-1/5' />,
            icon3: <SiTailwindcss size={40} className='text-[#0d9488] basis-1/5' />,
            icon4: <SiStoryblok size={40} className='text-[#0d9488] basis-1/5' />,
            icon5: <SiAdobephotoshop size={40} className='text-[#0d9488] basis-1/5' />,
        },
        {
            id: '03',
            title: 'Product Acessories Guide',
            url: 'https://teknic.com/clearpath-accessories-guide/accessories-guide-sd-dc-sealed/',
            urlName: 'teknic.com',
            image: '/accessories-guide.jpg',
            explainer: "This page guides users through the process of purchasing required and optional accessories to complete a servo motor system. I used Bootstrap and jQuery to create a guide that is easy to use and provides a substantial amount of information to the user without overwhelming them.",
            challenges: "This project was a major redesign with the primary goal of lowering customer support calls. This step in the buying process can be extremely complex and confusing, so a great deal of attention and work went into helping customers feel comfortable moving through each step with confidence.",
            icon1: <DiJqueryLogo size={40} className="text-[#0d9488] basis-1/5" />,
            icon2: <FaBootstrap size={40} className='text-[#0d9488] basis-1/5' />,
            icon3: <FaCss3 size={40} className='text-[#0d9488] basis-1/5' />,
            icon4: <SiAdobexd size={40} className='text-[#0d9488] basis-1/5' />,
            icon5: <SiAdobeillustrator size={40} className='text-[#0d9488] basis-1/5' />,
        },
        {
            id: '04',
            title: 'K & D Creations',
            url: 'https://www.kanddcreations.com/',
            urlName: 'kanddcreations.com/',
            image: '/kandd-creations.png',
            explainer: "The K&D Creations website was in disrepair when I was hired to fix some major structural problems and also complete a major theme redesign. The client required this project to be done on a very short timeline to be ready for a major tradeshow, so I was able to complete the bulk of this project in just a few weeks. The website now has a cohesive theme that matches the client's portfolio images and shows off their expertise to potential clients.",
            challenges: "This project required a backup restoration, copy writing, logo creation, and photo editing on top of substantial website design and coding.",
            icon1: <FaWordpress size={40} className='text-[#0d9488] basis-1/5' />,
            icon2: <FaPhp size={40} className='text-[#0d9488] basis-1/5' />,
            icon3: <FaCss3 size={40} className='text-[#0d9488] basis-1/5' />,
            icon4: <SiAdobexd size={40} className='text-[#0d9488] basis-1/5' />,
            icon5: <SiAdobephotoshop size={40} className='text-[#0d9488] basis-1/5' />,
        },

    ];

  return (
    <div id="Portfolio" className="w-full max-w-[1600px] mx-auto mt-[50px]">
        <div className="flex lg:flex-row md:flex-col sm:flex-col">
            <div className="basis-full p-4 lg:p-6">
                <div className='text-3xl font-semibold text-gray-300 border-b-4 border-teal-600 max-w-max pb-2 mb-16'>
                    Portfolio
                </div>
                {projects.map(({ id, title, url, urlName, image, explainer, challenges, icon1, icon2, icon3, icon4, icon5 }) => (
                <div key={id} className="relative w-full mb-36 basis-full flex flex-col lg:flex-row">
                    <div className='basis-full w-full lg:basis-1/2 p-2 mx-auto'>
                        <div className='portfolio-image group relative bg-gradient-to-l from-cyan-500 to-blue-500 rounded-[20px] max-w-max max-h-max w-full pr-[10px] pb-[10px] mx-auto hover:p-0 transition-all'>
                            <Image src={image} alt={title} width="750" height="622" className="rounded-[18px] relative z-20 transition-all duration-300 w-full max-w-max " />
                            <div className="more-about-me absolute top-0 z-30 w-3/4 left-[12.5%] opacity-0 transition-all text-sm duration-300 text-white bg-slate-800/65 backdrop-blur-sm p-6 rounded-xl hidden lg:block">
                                {challenges}
                            </div>
                            <Link href={url} target="_blank" className='absolute z-30 bottom-10 text-xl text-white px-6 py-2 mx-auto rounded-lg left-1/2 ml-[-85px] cursor-pointer bg-slate-800/65 transition-all duration-300 flex hover:bg-slate-800 backdrop-blur-sm'>
                                Visit Page <IoIosArrowRoundForward className='ml-2 align-middle relative top-1'/>
                            </Link>
                        </div>    
                    </div>

                    <div className='relative z-20 basis-full w-full lg:basis-1/2 p-2 lg:p-4 mx-auto'>
                        <div className='rounded-2xl p-[1px] relative top-[5%] mx-auto'>
                            <div className='rounded-[16px]'>
                                <div className="p-4">
                                        <div className={firaCode.className}>
                                            <span className='text-emerald-400'>{id}</span>
                                        </div> 
                                        <div className="text-lg py-1">{title}</div>
                                        <Link href={url} target='_blank' className='underline py-1 transition-all hover:text-emerald-400'>{urlName}</Link>
                                        <div className='py-4'>
                                       {explainer}
                                        </div>
                                        <div className="flex flex-row w-full mt-2">
                                            {icon1}
                                            {icon2}
                                            {icon3}
                                            {icon4}
                                            {icon5}                                       
                                        </div>  
                                    
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                 ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
