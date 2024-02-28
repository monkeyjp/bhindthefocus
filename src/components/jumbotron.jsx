import React, { useEffect } from 'react'

const Jumbotron = ({sr}) => {
    
    useEffect(()=>{
        sr.reveal(".hero-text", {origin: "top"});

    }, [])
  return (
    <>
        <main className='max-w-[1920px] mx-auto bg-white overflow-hidden text-white'>
            {/* hero */}
            <section className='hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed relative z-20 '>
                <div className='container mx-auto h-full flex items-center justify-center xl:justify-start'>
                    <div className='hero-text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start'>
                        <h3 className='text-2xl mb-8 font-primary'>Welcome to</h3>
                        <h1 className='text-[32px] sm:text-[64px] lg:text-[84px] leading-none mb-8 font-secondary '>BHINDTHEFOCUS</h1>
                        <h2 className='text-3xl mb-8'>City & Travel Photography</h2>
                        <button className='btn btn-primary mx-auto xl:mx-0'>
                            Learn more
                        </button>
                    </div>
                </div>

            </section>

        </main>
        
    </>
  )
}

export default Jumbotron
{/* <div className='jumboBackground 2xl:container mx-auto h-3/4 relative' >
    <img
        src="https://vastphotos.com/files/uploads/photos/10429/high-resolution-hawaii-landscape-photo-l.jpg?v=20220712073521" 
        className=' w-full h-full object-cover absolute '
        alt="" 
    />

    <div className="absolute inset-0 bg-black opacity-25 font-sans"></div>    
        
    <div className='overlayStyle relative z-10 h-full flex items-center text-white '>
        <div className='m-auto jumboContent'>
            <h3 className='text-2xl font-serif'>Welcome to</h3>
            <h1 className='text-4xl md:text-6xl xl:text-8xl mt-6 mb-3'>BHINDTHEFOCUS</h1>
            <h2 className='text-3xl md:text-4xl xl:text-5xl'>City & Travel Photography</h2>

        </div>

    </div>
</div> */}