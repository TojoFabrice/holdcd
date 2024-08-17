import React from 'react'
import Image from "next/image";

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

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <Image
                    src={image}
                    alt="My Image Description"
                    width={500}
                    height={300}
                    layout="responsive"
                />
            </figure>
            <div className="card-body text-text">
                <h2 className="card-title justify-center text-title">
                    {title}
                </h2>
                <div>
                    <ul className="">
                        <li className='text-center'>{c1}</li>
                        <li className='text-center mt-3'>{c2}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
