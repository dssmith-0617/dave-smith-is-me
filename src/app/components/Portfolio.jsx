import Image from 'next/image';
import Link from 'next/link';
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
            image: '/build-hudson.jpg',
            explainer: "This page allows users to build a custom servo motor by choosing from a set of potential options and/or upgrades to optimize these motors into their machine design. Completing the customizer brings the user to the page of the part number that was created, where the user can purchase that part number through the website's e-commerce.",
            icon1: <FaSquareJs size={50} className="text-slate-950 basis-1/5" />,
            icon2: <FaPhp size={50} className='text-slate-950 basis-1/5' />,
            icon3: <FaCss3 size={50} className='text-slate-950 basis-1/5' />,
            icon4: <FaWordpress size={50} className='text-slate-950 basis-1/5' />,
            icon5: <SiAdobephotoshop size={50} className='text-slate-950 basis-1/5' />,
        },
        {
            id: '02',
            title: 'Orthopedic Surgical Group Website',
            url: 'https://www.arnotortho.com/',
            urlName: 'arnotortho.com',
            image: '/arnot-skeleton.jpg',
            explainer: "The Arnot Orthopedic group was intent on creating a website that is easy to navigate for existing (and potential) patients. The group also wanted the ability to add patient resources and useful information on their own without learning how to code. This Next.js application was built with Storyblok CMS, which allows the doctors to add content by filling out a few fields and clicking 'Publish.'",
            icon1: <FaReact size={50} className="text-slate-950 basis-1/5" />,
            icon2: <SiNextdotjs size={50} className='text-slate-950 basis-1/5' />,
            icon3: <SiTailwindcss size={50} className='text-slate-950 basis-1/5' />,
            icon4: <SiStoryblok size={50} className='text-slate-950 basis-1/5' />,
            icon5: <SiAdobephotoshop size={50} className='text-slate-950 basis-1/5' />,
        },
        {
            id: '03',
            title: 'Product Acessories Guide',
            url: 'https://teknic.com/clearpath-accessories-guide/accessories-guide-sd-dc-sealed/',
            urlName: 'teknic.com',
            image: '/accessories-guide-opera.png',
            explainer: "This page guides users through the process of purchasing required and optional accessories to complete a servo motor system. I used Bootstrap and jQuery to create a guide that is easy to use and provides a substantial amount of information to the user without overwhelming them.",
            icon1: <DiJqueryLogo size={50} className="text-slate-950 basis-1/5" />,
            icon2: <FaBootstrap size={50} className='text-slate-950 basis-1/5' />,
            icon3: <FaCss3 size={50} className='text-slate-950 basis-1/5' />,
            icon4: <SiAdobexd size={50} className='text-slate-950 basis-1/5' />,
            icon5: <SiAdobeillustrator size={50} className='text-slate-950 basis-1/5' />,
        },
        {
            id: '04',
            title: 'Revered Campaigns',
            url: 'https://www.reveredcampaigns.com/',
            urlName: 'reveredcampaigns.com/',
            image: '/revere.jpg',
            explainer: "The Revered Campaigns website was built by a fellow developer and I as a marketing website for web development projects that cater to doctors and other medical professionals. We are currently at work on a custom CMS to simplify the process for busy doctors. The CMS will incorporate the use of AI to assist users with writing website copy.",
            icon1: <FaReact size={50} className="text-slate-950 basis-1/5" />,
            icon2: <SiNextdotjs size={50} className='text-slate-950 basis-1/5' />,
            icon3: <SiTailwindcss size={50} className='text-slate-950 basis-1/5' />,
            icon4: <SiAdobexd size={50} className='text-slate-950 basis-1/5' />,
            icon5: <SiAdobeillustrator size={50} className='text-slate-950 basis-1/5' />,
        },

    ];

  return (
    <div id="Portfolio" className="w-full max-w-[1600px] mx-auto mt-[50px]">
        <div className="flex lg:flex-row md:flex-col sm:flex-col">
            <div className="basis-full p-10">
                <div className='text-3xl font-semibold text-gray-300 border-b-4 border-teal-600 max-w-max pb-2 mb-16'>
                    Portfolio
                </div>
                {projects.map(({ id, title, url, urlName, image, explainer, icon1, icon2, icon3, icon4, icon5 }) => (
                <div key={id} className="relative w-full mb-48 flex flex-row">
                    <div className='relative bg-gradient-to-l from-cyan-500 to-blue-500 rounded-2xl max-w-max max-h-max basis-1/2 w-full pr-[10px] pb-[10px] hover:p-0 transition-all'>
                        <Image src={image} width="750" height="622" className="rounded-2xl relative z-20 transition-all duration-300 w-full max-w-max" />
                    </div>
                    
                    <div className='relative top-1/2 z-20 max-w-[650px] basis-1/2 w-full p-10'>
                        <div className='bg-gradient-to-b from-slate-500 to-slate-900 rounded-2xl p-[1px] relative top-1/4 mx-auto'>
                            <div className='bg-[#22294b] rounded-[16px] shadow-box'>
                                <div className="noiselayer p-4">
                                    
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
