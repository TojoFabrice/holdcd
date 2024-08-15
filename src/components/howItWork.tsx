import React from 'react'
import Image from "next/image";


function HowItWork() {
    return (
        <section id="howToWork" className="bg-[#F9F8F8] p-10 mt-16 m-auto">
            <div>
                <div className="text-title	text-3xl font-medium">
                    Comment ça marche?
                </div>
                <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>
            <div className='flex justify-between'>
                <div className='w-1/3'>
                    <div className='w-full flex justify-start'>
                        <table className='text-text'>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center', padding: '10px' }}>Customer</th>
                                    <th style={{ textAlign: 'center', padding: '10px' }}></th>
                                    <th colSpan={2} style={{ textAlign: 'center', padding: '10px' }}>Supplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={5} className="vertical-center" style={{ padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td rowSpan={5} className="vertical-center image-cell" style={{ padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrow.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td style={{ padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                    <td style={{ padding: '0px 15px', height: '60px' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 15px', height: '60px' }}></td>
                                    <td style={{ padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td style={{ padding: '0px 15px', height: '60px' }}></td>
                                    <td style={{ padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                    <td style={{ padding: '0px 15px', height: '60px' }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full flex justify-start'>
                        <Image
                            src="/images/Vector1.png"
                            alt="fiable"
                            width={340}
                            height={0}
                        />
                    </div>
                    <div className='w-full mt-2'>
                        <div className='text-center font-semibold text-title'>ETAPE 1</div>
                        <div className='w-2/3 m-auto text-center text-sm text-text mt-2'>Trouver le bon fournisseur <br></br> Demande de devis</div>
                    </div>
                </div>
                <div className='w-2/3'>
                    <div className='w-full flex justify-end'>
                        <table className='text-text'>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center', padding: '10px' }}>Customer</th>
                                    <th style={{ textAlign: 'center' }}></th>
                                    <th style={{ textAlign: 'center' }}>Contacts</th>
                                    <th style={{ textAlign: 'center' }}></th>
                                    <th style={{ textAlign: 'center' }}>Transport</th>
                                    <th style={{ textAlign: 'center' }}></th>
                                    <th style={{ textAlign: 'center' }}>Formalités</th>
                                    <th style={{ textAlign: 'center' }}></th>
                                    <th style={{ textAlign: 'center' }}>Supplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={4} className="vertical-center" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td rowSpan={4} className="vertical-center image-cell" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrow.png"
                                            alt="fiable"
                                            width={90}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/contact.png"
                                            alt="fiable"
                                            width={40}
                                            height={50}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/avion.png"
                                            alt="fiable"
                                            width={50}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/formalite.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        /></td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/contact.png"
                                            alt="fiable"
                                            width={40}
                                            height={50}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/avion.png"
                                            alt="fiable"
                                            width={50}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/formalite.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/contact.png"
                                            alt="fiable"
                                            width={40}
                                            height={50}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/avion.png"
                                            alt="fiable"
                                            width={50}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/formalite.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/contact.png"
                                            alt="fiable"
                                            width={40}
                                            height={50}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/avion.png"
                                            alt="fiable"
                                            width={50}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/formalite.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/arrowSimple.png"
                                            alt="fiable"
                                            width={70}
                                            height={80}
                                        />
                                    </td>
                                    <td className="multi-line" style={{ textAlign: 'center', padding: '0px 15px', height: '60px' }}>
                                        <Image
                                            src="/images/industrie.png"
                                            alt="fiable"
                                            width={40}
                                            height={80}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full flex justify-end'>
                        <Image
                            src="/images/Vector2.png"
                            alt="fiable"
                            width={840}
                            height={0}
                        />
                    </div>
                    <div className='w-full mt-2'>
                        <div className='text-center font-semibold text-title'>ETAPE 1</div>
                        <div className='w-2/3 m-auto text-center text-sm text-text mt-2'>Commande et livraison</div>
                    </div>
                </div>
            </div>
                <div  className='w-full flex justify-center'>
                    <Image
                        src="/images/Vector3.png"
                        alt="fiable"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
        </section>
    )
}

export default HowItWork
