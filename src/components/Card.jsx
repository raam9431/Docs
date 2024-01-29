// Card.jsx
import React from 'react';
import { PiFiles } from 'react-icons/pi';
import { LuDownload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Card({ data, cardContainerRef }) {
  return (
    <motion.div
      drag// Enable both X-axis and Y-axis dragging
      dragConstraints={cardContainerRef} // Use the ref for constraints
      whileDrag={{ scale: 1.2 }}
      whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
      whileTap={{ scale: 0.9 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      dragElastic={0.1}
      className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/20 text-white px-8 py-10 overflow-hidden'
    >
      <PiFiles />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-3 '>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".8rem" color='#000' />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-900" : "bg-purple-900"} flex item-center justify-center`}>
            <h3 className='text-sm'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
