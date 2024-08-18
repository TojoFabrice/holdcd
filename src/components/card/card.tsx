import React from 'react'
import Image from "next/image";
import { motion, Variants } from "framer-motion";


function Card({
    image, 
    title, 
    c1,
    c2
}: {
    image:string,
    title: string,
    c1: string,
    c2?: string
}) {

    const cardVariants: Variants = {
        offscreen: {
          y: 500
        },
        onscreen: {
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

    return (
        <motion.div 
        className="card w-96 shadow-xl bg-primary"
        variants={cardVariants}>
            <figure>
                <Image
                    src={image}
                    alt="My Image Description"
                    width={500}
                    height={300}
                    layout="responsive"
                />
            </figure>
            <div className="card-body text-text ">
                <h2 className="card-title justify-center text-title">
                    {title}
                </h2>
                <div>
                    <ul className="text-minibar">
                        <li className='text-center'>{c1}</li>
                        <li className='text-center mt-3'>{c2}</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Card
