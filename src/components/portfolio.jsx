import React, { useEffect } from 'react'

const Portfolio = ({sr}) => {
    useEffect(()=>{
        sr.reveal(".portfolio_title")
        sr.reveal(".portfolio_grid", {delay:500})
    }, [])
    return (
        <div className='portfolio mt-[80px] md:mt-[100px] relative z-20 py-12 bg-neutral-700 font-primary'>
            <div className="container mx-auto px-0">
                <div>
                    <h2 className='portfolio_title text-6xl font-bold pb-10 text-white'>My Portfolio</h2>
                </div>
                <div className="portfolio_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px] ">
                    <div
                        className='portfolio_item w-full max-w-[382px] h-[520px] border border-black rounded-xl p-5 hover:bg-slate-200 
                        transition-all group cursor-pointer mx-auto xl:mx-0 bg-white'
                    >
                        <div className='h-1/2 rofl bg-travel bg-cover relative bg-bottom rounded-t-xl '>
                            <div className='absolute text-white p-3 bottom-0 text-3xl align-bottom'>
                                Travel

                            </div>
                        </div>
                        <ul className='h-[40%] flex flex-col py-4 text-left px-12'>
                            <li className='flex-grow'>Instagramable places</li>
                            <li className='flex-grow'>Where to go</li>
                            <li className='flex-grow'>City - Landscaping</li>
                            <li className='flex-grow'>Itineraries (coming soon)</li>
                        </ul>
                        <div className=''>
                            <button className='btn-card btn-primary mx-auto px-12'>See more..</button>

                        </div>

                    </div>
                    <div
                        className='portfolio_item w-full max-w-[382px] h-[520px] border border-black rounded-xl p-5 hover:bg-slate-200 
                        transition-all group cursor-pointer mx-auto xl:mx-0 bg-white'
                    >
                        <div className='h-1/2 rofl bg-hotel bg-cover relative bg-center rounded-t-xl'>
                            <div className='absolute text-white p-3 bottom-0 text-3xl align-bottom'>
                                Hotel - Brands

                            </div>
                        </div>
                        <ul className='h-[40%] flex flex-col py-4 text-left px-12'>
                            <li className='flex-grow'>Collaborations</li>
                            <li className='flex-grow'>Where to stay</li>
                        </ul>
                        <div className=''>
                            <button className='btn-card btn-primary mx-auto'>See more..</button>

                        </div>

                    </div>
                    <div
                        className='portfolio_item w-full max-w-[382px] h-[520px] border border-black rounded-xl p-5 hover:bg-slate-200 
                        transition-all group cursor-pointer mx-auto xl:mx-0 bg-white md:col-span-2 lg:col-span-1'
                    >
                        <div className='h-1/2 rofl bg-ucg bg-cover relative bg-bottom  rounded-t-xl '>
                            <div className='absolute text-white p-3 bottom-0 text-3xl align-bottom'>
                                UCG

                            </div>
                        </div>
                        <ul className='h-[40%] flex flex-col py-4 text-left px-12'>
                            <li className='flex-grow'>User-generated content.</li>
                            <li className='flex-grow'>Original, brand-specific content</li>
                            <li className='flex-grow'>Created published on social media or other channels</li>
                        </ul>
                        <div className=''>
                            <button className='btn-card btn-primary mx-auto'>See more..</button>

                        </div>

                    </div>
                </div>
            </div>
            <div className='mb-64'></div>
        </div>
    )
}

export default Portfolio