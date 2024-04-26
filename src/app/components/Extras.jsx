'use client';

import { SiXaml, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiMailchimp } from "react-icons/si";
import { useState } from "react";
import Image from 'next/image';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({subsets: ["latin"]});

function Extras() {

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  }

  const myExtras = [
    {
      index: 1,
      id: 'ClearView/XAML',
      desc: 'Duis est officia aliquip proident magna non adipisicing cupidatat adipisicing ea proident velit in consectetur. Nostrud enim consectetur sunt eiusmod commodo veniam nisi ullamco in ut. Nisi Lorem ipsum reprehenderit sint proident ut laborum qui incididunt excepteur ea. Consequat fugiat Lorem sit eiusmod qui esse veniam reprehenderit non velit consequat sunt occaecat. Dolore enim reprehenderit labore aliqua culpa consequat cupidatat consectetur. Qui incididunt voluptate sit elit qui. Amet ipsum nulla nisi voluptate tempor.',
      img: '',
      icon1: <SiXaml size={40} className="text-[#0d9488] basis-1/5" />,
      icon2: <SiAdobephotoshop size={40} className="text-[#0d9488] basis-1/5" />,
    },
    {
      index: 2,
      id: 'Pasture Stand',
      desc: 'Duis est officia aliquip proident magna non adipisicing cupidatat adipisicing ea proident velit in consectetur. Nostrud enim consectetur sunt eiusmod commodo veniam nisi ullamco in ut. Nisi Lorem ipsum reprehenderit sint proident ut laborum qui incididunt excepteur ea. Consequat fugiat Lorem sit eiusmod qui esse veniam reprehenderit non velit consequat sunt occaecat. Dolore enim reprehenderit labore aliqua culpa consequat cupidatat consectetur. Qui incididunt voluptate sit elit qui. Amet ipsum nulla nisi voluptate tempor.',
      img: '',
      icon1: <SiAdobeillustrator size={40} className="text-[#0d9488] basis-1/5" />,
      icon2: <SiAdobexd size={40} className="text-[#0d9488] basis-1/5" />,
    },
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto mb-12 p-4 lg:p-6">
      <div className='text-3xl font-semibold text-gray-300 border-b-4 border-teal-600 max-w-max pb-2 mb-16'>
          More Designs
      </div>
       <div className="p-2">
          <div className="mb-4 text-center flex flex-col md:flex-row">
            <button
              className={`${
                activeTab === 1
                  ? 'bg-white/20 text-white transition-all'
                  : 'bg-white/5 text-white transition-all hover:bg-white/20'
              } py-2 px-4 mx-2 focus:outline-none`}
              onClick={() => changeTab(1)}
            >
              ClearView/XAML
            </button>
            <button
              className={`${
                activeTab === 2
                ? 'bg-white/20 text-white transition-all'
                : 'bg-white/5 text-white transition-all hover:bg-white/20'
              } py-2 px-4 mx-2 focus:outline-none`}
              onClick={() => changeTab(2)}
            >
              Pasture Stand
            </button>
            <button
              className={`${
                activeTab === 3
                ? 'bg-white/20 text-white transition-all'
                : 'bg-white/5 text-white transition-all hover:bg-white/20'
              } py-2 px-4 mx-2 focus:outline-none`}
              onClick={() => changeTab(3)}
            >
              Mailers
            </button>
          </div>
        </div>
        <div>
          {activeTab === 1 && 
            <div className="flex flex-col lg:flex-row basis-1 w-full relative p-2">
              <div className="basis-1/3 p-4">
                <div className={firaCode.className}><span className="text-emerald-400">ClearView/XAML</span></div>
                <div className="my-4">
                  I had the opportunity to work on the UI design for a customer-facing software program at Teknic. This involved creating wireframes for 20+ interfaces; I was also able to learn XAML and write a significant portion of the code to implement these designs.
                </div>  
                <div className="flex flex-row">
                  <SiXaml size={40} className="text-[#0d9488] basis-1/5" />
                  <SiAdobexd size={40} className="text-[#0d9488] basis-1/5" />
                </div>
              </div>
              <div className="basis-2/3 text-center p-4">
                <Image src="/clearview-tiles.png" alt="clearview software" width="1452" height="884" className="rounded-xl transition-all duration-300 mx-auto"/>
              </div>              
            </div>
          }
          {activeTab === 2 && 
            <div className="flex flex-col lg:flex-row basis-1 relative p-2">
              <div className="basis-1/3 p-4">
                <div className={firaCode.className}>
                  <Image src="/pasture-stand-logo_header.svg" alt="pasture stand logo" height="150" width="220" />
                </div>
                <div className="my-4">
                  Pasture Stand was a startup that created an online farmer&apos;s market, which allowed farmers to sell directly to customers that live nearby. I designed the company logo and UI/UX, and completed a large chunk of the development for the website.
                </div>  
                <div className="flex flex-row">
                  <SiAdobeillustrator size={40} className="text-[#0d9488] basis-1/5" />
                  <SiAdobexd size={40} className="text-[#0d9488] basis-1/5" />
                </div>
              </div>
              <div className="basis-2/3 text-center p-4">
                <Image src="/pasture-stand-tiles.png" width="1899" height="954" className="rounded-xl transition-all duration-300 mx-auto"/>
              </div>              
            </div>
          }
          {activeTab === 3 && 
            <div className="flex flex-col lg:flex-row basis-1 relative p-2">
              <div className="basis-1/3 p-4">
                <div className={firaCode.className}>
                  <span className="text-emerald-400">Marketing Mailers</span>
                </div>
                <div className="my-4">
                  I run a monthly mailer campaign at Teknic that we send out to about 50,000 subscribers. It has become a tradition for me to send a silly themed mailer once a year; these are some of the mailer images I&apos;ve designed. I enjoy it as an opportunity to make something odd and hopefully funny for the subscribers.
                </div>  
                <div className="flex flex-row">
                  <SiAdobephotoshop size={40} className="text-[#0d9488] basis-1/5" />
                  <SiMailchimp size={40} className="text-[#0d9488] basis-1/5" />
                </div>
              </div>
              <div className="basis-2/3 text-center p-4">
                <Image src="/mailer-tiles.png" width="1306" height="871" className="rounded-xl transition-all duration-300 mx-auto"/>
              </div>
            </div>
          }
        </div>
        
    </div>
    
  )
}

export default Extras
