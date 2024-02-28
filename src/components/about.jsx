import React, { useEffect } from 'react'

const About = ({sr}) => {
    useEffect(()=>{
        sr.reveal('.about_text', {origin: 'left'});
        sr.reveal('.about_img', {origin: 'right', delay: 400})

    }, [])
    return (
        <div className='about mt-[80px] xl:mt-[100px] relative z-20  '>
            <div className='container mx-auto xl:px-0 ' >
                <div className='flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-8 md:gap-[16px] md:h-[640px] '>
                    {/* -------text---------- */}
                    <div className='about_text flex-1 order-2 md:order-none max-w-xl flex flex-col items-center md:items-start gap-8 h-full px-6 md:px-0'>
                        <h2 className='text-6xl font-bold my-2 '>Hello there!</h2>
                        <p className='text-xl md:text-lg text-justify md:text-left'>I’m Daniela, a travel photography enthusiast with a
                            passion for capturing experiences through my lens.
                            From bustling cityscapes to serene landscapes. I hope I
                            can inspire and guide you on this journey through travel
                            photography, and let’s discover together the most
                            instagrammable places around the world!

                        </p>
                        <p className='text-xl md:text-lg text-justify md:text-left '>
                            I’m from Venezuela, but I moved to Porto 7 years ago,
                            and since I always loved to travel (who doesn’t , right?),
                            I decided to share my experiences through my photos
                            on instagram, and through the years I’ve learn more and
                            more about photography and the art of aesthetic
                            memories.
                        </p>
                        <p className='text-xl md:text-lg text-justify md:text-left '>
                            So, I hope you join me in this journey can take the most
                            advantage of your next trip!

                        </p>
                    </div>
                    {/* -------IMAGE---------- */}
                    <div className='container about_img order-1 md:order-none mx-auto md:w-1/2 md:mx-0 md:h-full h-[280px] w-[280px] '>
                        <div className=' w-full h-full object-cover rounded-full md:rounded-none bg-about bg-cover bg-center'  ></div>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default About