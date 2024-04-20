// 'use client';

import { SiXaml, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from "react-icons/si";


// import { useState } from "react";

function Extras() {

  // const [activeTab, setActiveTab] = useState(1);

  const myExtras = [
    {
      id: 'ClearView/XAML',
      desc: 'Duis est officia aliquip proident magna non adipisicing cupidatat adipisicing ea proident velit in consectetur. Nostrud enim consectetur sunt eiusmod commodo veniam nisi ullamco in ut. Nisi Lorem ipsum reprehenderit sint proident ut laborum qui incididunt excepteur ea. Consequat fugiat Lorem sit eiusmod qui esse veniam reprehenderit non velit consequat sunt occaecat. Dolore enim reprehenderit labore aliqua culpa consequat cupidatat consectetur. Qui incididunt voluptate sit elit qui. Amet ipsum nulla nisi voluptate tempor.',
      img: '',
      icon1: <SiXaml size={40} className="text-[#0d9488] basis-1/5" />,
      icon2: <SiAdobephotoshop size={40} className="text-[#0d9488] basis-1/5" />,
    },
    {
      id: 'Pasture Stand',
      desc: 'Duis est officia aliquip proident magna non adipisicing cupidatat adipisicing ea proident velit in consectetur. Nostrud enim consectetur sunt eiusmod commodo veniam nisi ullamco in ut. Nisi Lorem ipsum reprehenderit sint proident ut laborum qui incididunt excepteur ea. Consequat fugiat Lorem sit eiusmod qui esse veniam reprehenderit non velit consequat sunt occaecat. Dolore enim reprehenderit labore aliqua culpa consequat cupidatat consectetur. Qui incididunt voluptate sit elit qui. Amet ipsum nulla nisi voluptate tempor.',
      img: '',
      icon1: <SiAdobeillustrator size={40} className="text-[#0d9488] basis-1/5" />,
      icon2: <SiAdobexd size={40} className="text-[#0d9488] basis-1/5" />,
    },
  ];

  return (
    <>
      {myExtras.map(({ id, desc, img, icon1, icon2 }) => (
        <div key={id}>
          <div>{id}</div>
          <div>{desc}</div>
          <div>{img}</div>
          <div>{icon1}</div>
          <div>{icon2}</div>
        </div>
      ))}
    </>
    
  )
}

export default Extras
