'use client';

import { SiXaml, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from "react-icons/si";
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
    <div className="w-full max-w-[1200px] mx-auto mb-12">
       <div className="p-2">
          <div className="mb-4 text-center">
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
          </div>
        </div>
        <div>
          {activeTab === 1 && 
            <div className="flex flex-row basis-1 relative p-2">
              <div className="basis-1/2 p-4">
                <div className={firaCode.className}>ClearView/XAML</div>
                <div className="my-4">
                  I had the opportunity to work on the UI design for a customer-facing software program at Teknic. This involved creating wireframes for 20+ interfaces; I was also able to learn XAML and write a significant portion of the code to implement these designs.
                </div>  
                <div className="flex flex-row">
                  <SiXaml size={40} className="text-[#0d9488] basis-1/5" />
                  <SiAdobexd size={40} className="text-[#0d9488] basis-1/5" />
                </div>
              </div>
              <div className="basis-1/2 p-4">
                <Image src="/old-clearview.png" alt="clearview software" width="700" height="896" className="rounded-xl transition-all duration-300"/>
              </div>              
            </div>
          }
          {activeTab === 2 && 
            <div className="flex flex-row basis-1 relative p-2">
              <div className="basis-1/2 p-4">
                <div className={firaCode.className}>
                  <Image src="/pasture-stand-logo_header.svg" alt="pasture stand logo" height="150" width="220" />
                </div>
                <div className="my-4">
                  Proident laborum irure officia aute occaecat. Ipsum magna anim do laboris eu culpa consequat cupidatat excepteur ut laborum eu. Aliqua qui exercitation magna labore laboris velit eiusmod aliquip nulla. Ea qui quis enim ad proident anim sint sit.
                </div>  
                <div className="flex flex-row">
                  <SiAdobeillustrator size={40} className="text-[#0d9488] basis-1/5" />
                  <SiAdobexd size={40} className="text-[#0d9488] basis-1/5" />
                </div>
              </div>
              <div className="basis-1/2 p-4">
                <Image src="/pasture-stand-homepage.jpg" width="700" height="896" className="rounded-xl transition-all duration-300"/>
              </div>              
            </div>
          }
        </div>
        
    </div>
    
  )
}

export default Extras
