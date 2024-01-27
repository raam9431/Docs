// Foreground.jsx
import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    }, 
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload Now", tagColor: "green"},
    },
  ];

  // Define a ref for constraining Card components within Foreground
  const cardContainerRef = useRef(null);

  return (
    <div ref={cardContainerRef} className='fixed top-0 left-0 z-[3] w-full h-full overflow-hidden gap-10 flex p-5'>
      {data.map((item, index) => (        
        <Card key={index} data={item} cardContainerRef={cardContainerRef} />
      ))}
    </div>
  );
}

export default Foreground;
export default Foreground;
