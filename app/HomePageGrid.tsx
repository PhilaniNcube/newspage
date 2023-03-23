/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const HomePageGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
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
        <div className="col-span-3 lg:col-span-1 bg-dark-blue py-6 px-4 w-full text-white flex flex-col justify-center">
          <h2 className="text-soft-orange text-2xl md:text-3xl font-extrabold">New</h2>
          <section className="pr-8 mt-5 pb-3 border-b border-white/75">
            <h3 className="font-extrabold text-lg lg:text-xl">Hydrogen VS Electric Cars</h3>
            <p className="mt-1 text-base">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </section>
          <section className="pr-8 mt-7 pb-3 border-b border-white/75">
            <h3 className="font-extrabold text-lg lg:text-xl">The Downside of AI Artistry</h3>
            <p className="mt-1 text-base">What are the possible adverse effects of on-demand AI image generation?</p>
          </section>
          <section className="pr-8 mt-7 pb-3">
            <h3 className="font-extrabold text-lg lg:text-xl">Is VC Funding Drying Up?</h3>
            <p className="mt-1 text-base">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </section>
        </div>
      </section>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
       <article className="w-full flex gap-4">
        <img src="/images/image-retro-pcs.jpg" alt="Article Images" className="w-32 object-cover" />
        <div>
          <h2 className="font-extrabold text-dark-gray text-xl tracking-wider mb-3">01</h2>
          <h3 className="font-extrabold text-gray-700 text-lg mb-4">Reviving Retro PCs</h3>
          <p className="text-base text-dark-gray">What happens when old PCs are given modern upgrades?</p>
        </div>
       </article>
       <article className="w-full flex gap-4">
        <img src="/images/image-top-laptops.jpg" alt="Article Images" className="w-32 object-cover" />
        <div>
          <h2 className="font-extrabold text-dark-gray text-xl tracking-wider mb-3">02</h2>
          <h3 className="font-extrabold text-gray-700 text-lg mb-4">Top 10 Laptops of 2022</h3>
          <p className="text-base text-dark-gray">Our best picks for various needs and budgets.</p>
        </div>
       </article>
       <article className="w-full flex gap-4">
        <img src="/images/image-gaming-growth.jpg" alt="Article Images" className="w-32 object-cover" />
        <div>
          <h2 className="font-extrabold text-dark-gray text-xl tracking-wider mb-3">03</h2>
          <h3 className="font-extrabold text-gray-700 text-lg mb-4">The Growth of Gaming</h3>
          <p className="text-base text-dark-gray">How the pandemic has sparked fresh opportunities</p>
        </div>
       </article>
    </div>

    </div>
  );
}

export default HomePageGrid
