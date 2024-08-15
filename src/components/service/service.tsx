import React from 'react'
import Image from "next/image";


function Service({positionImage}:{positionImage:string}) {
    return (
        <div>
            {
                positionImage == 'left' ?
                <div className='flex flex-col items-center justify-start md:flex-row md:justify-between gap-8'>
                    <div className='w-full: md:w-1/3'>
                        <Image
                            src="/images/industrie.png"
                            alt="logo"
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className='w-full mb-20 md:w-2/3 md:mb-0'>
                        <div className='text-title font-semibold'>Title</div>
                        <div>
                            <ul className="list-disc ml-5">
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className='flex flex-col-reverse items-center justify-start md:flex-row md:justify-between gap-8'>
                    <div className='w-full mb-20 md:w-2/3 md:mb-0'>
                        <div className='text-title font-semibold'>Title</div>
                        <div>
                            <ul className="list-disc ml-5">
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos labore dolore, eos blanditiis voluptates quam corporis aliquid</li>
                            </ul>
                        </div>                    </div>
                    <div className='w-full: md:w-1/3 flex justify-end'>
                        <Image
                            src="/images/industrie.png"
                            alt="logo"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default Service
