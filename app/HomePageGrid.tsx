import Image from 'next/image'
import React from 'react'

const HomePageGrid = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="w-full grid grid-cols-3 gap-4">
        <article className="col-span-3 lg:col-span-2 flex flex-col gap-4">
          <Image
            src="/images/image-web-3-desktop.jpg"
            alt="Web 3"
            className="w-full object-cover"
            width={1460}
            height={600}
          />
          <div className="flex flex-col md:flex-row gap-6">
            <h1 className="text-3xl lg:text-6xl font-extrabold">
              The Bright Future of Web 3.0
            </h1>
            <div className="w-full h-full flex flex-col justify-between  flex-auto">
              <p className="text-base text-dark-gray leading-7">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <button
                type="button"
                className="w-1/2 py-2 text-center text-white uppercase tracking-widest text-lg font-medium bg-soft-red mt-3"
              >
                Read More
              </button>
            </div>
          </div>
        </article>
        <div className="col-span-3 lg:col-span-1 bg-black py-6 px-4 w-full text-white">
          <h2 className="text-soft-orange text-2xl md:text-3xl font-extrabold">New</h2>
          <section className="pr-8 mt-5 pb-3 border-b border-white/75">
            <h3 className="font-extrabold text-lg lg:text-xl">Hydrogen VS Electric Cars</h3>
            <p className="mt-1 text-base">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </section>
          <section className="pr-8 mt-7 pb-3 border-b border-white/75">
            <h3 className="font-extrabold text-lg lg:text-xl">Hydrogen VS Electric Cars</h3>
            <p className="mt-1 text-base">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </section>
          <section className="pr-8 mt-7 pb-3">
            <h3 className="font-extrabold text-lg lg:text-xl">Hydrogen VS Electric Cars</h3>
            <p className="mt-1 text-base">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default HomePageGrid
