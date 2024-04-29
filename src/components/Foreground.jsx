import React, { useRef, useState } from "react";
import Card from "./Card";


function Foreground() {
    const ref = useRef(null);
    const data = [
        {
          desc: "Downloadable document with Lorem ipsum content.",
          filesize: ".9mb",
          close: true,
          tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600"},
        },
        {
          desc: "Detailed document discussing various topics.",
          filesize: "1.2mb",
          close: false,
          tag: { isOpen: false, tagTitle: "View Details", tagColor: "bg-blue-600"},
        },
        {
          desc: "Free trial version of a software product.",
          filesize: "1.5mb",
          close: true,
          tag: { isOpen: true, tagTitle: "Free Trial", tagColor: "bg-orange-500"},
        },
        {
          desc: "Informational guide on minim veniam concepts.",
          filesize: ".8mb",
          close: false,
          tag: { isOpen: false, tagTitle: "Learn More", tagColor: "bg-purple-600"},
        },
        {
          desc: "Purchase-ready product for immediate use.",
          filesize: ".7mb",
          close: true,
          tag: { isOpen: true, tagTitle: "Buy Now", tagColor: "bg-red-600"},
        },
        {
          desc: "Subscription service for ongoing benefits.",
          filesize: ".6mb",
          close: false,
          tag: { isOpen: false, tagTitle: "Subscribe", tagColor: "bg-yellow-500"},
        },
        {
          desc: "Add to cart item with Lorem ipsum details.",
          filesize: "1.0mb",
          close: true,
          tag: { isOpen: true, tagTitle: "Add to Cart", tagColor: "bg-cyan-600"},
        },
        {
          desc: "Explore various features and functionalities.",
          filesize: ".9mb",
          close: false,
          tag: { isOpen: false, tagTitle: "Explore", tagColor: "bg-teal-600"},
        },
        {
          desc: "Upgrade option for enhanced capabilities.",
          filesize: "1.3mb",
          close: true,
          tag: { isOpen: true, tagTitle: "Upgrade", tagColor: "bg-pink-600"},
        },
        {
          desc: "Join now for exclusive access and benefits.",
          filesize: "1.1mb",
          close: false,
          tag: { isOpen: false, tagTitle: "Join Now", tagColor: "bg-brown-600"},
        },
      ];
      
    
    
  
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item,index)=> (
            <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
}

export default Foreground;
