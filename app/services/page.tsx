import React from 'react'
import { Breadcrumb } from '@/owncomponnets/Breadcrumb/BackgroundBeamsWithCollisionDemo'
import { Preview } from '@/owncomponnets/PreviewSecond/Preview'
import { InfiniteMovingCardsDemo } from '@/owncomponnets/Home/InfiniteMovingCardsDemo'
import { Cover } from '@/components/ui/cover'
import { StickyScrollRevealDemo } from '@/owncomponnets/Home/StickyScrollRevealDemo'
// import LampDemo from '@/components/ui/lamp'
import DistributionProcess from '@/owncomponnets/DistributionProcess/DistributionProcess'
import { SpotlightNewDemo } from '@/owncomponnets/SpotlightNewDemo/SpotlightNewDemo'

const data = [
  {
    title: "1. General Trade",
    description:
      "General trade, comprising retailers and small stores, is the largest and most prevalent channel in India. It forms a key part of our distribution network, enabling widespread market coverage for your products.",
    image: "https://i.ibb.co/C5xPkZy9/image.png",
  },
  {
    title: "2. Traditional Wholesale",
    description:
      "SAMPOORN MARKETING, as a leading FMCG wholesale distributor, serves over 3,700 key accounts in traditional wholesale, categorized into Platinum, Gold, and Silver tiers based on business scale and growth potential.",
    image: "https://i.ibb.co/PZbbVz63/image.png",
  },
  {
    title: "3. Modern Trade (National)",
    description:
      "Establish exclusive partnerships with top Indian retail chains to enhance sales and brand visibility through optimized shelf space and displays, maximizing market reach and impact.",
    image: "https://i.ibb.co/9kc6Lj72/image.png",
  },
  {
    title: "4. Modern Trade (Regional)",
    description:
      "We've forged strong ties with regional store chains and are expanding to include new outlets, ensuring broad coverage and continued growth.",
    image: "https://i.ibb.co/LKHjJxS/image.png",
  },
  {
    title: "5. Cash & Carry",
    description:
      "We collaborate with International and national companies in India's cash and carry retail sector, ensuring widespread market presence.",
    image: "https://i.ibb.co/5W60pY1L/image.png",
  },
  {
    title: "6. E-Commerce",
    description:
      "Utilize our expert e-commerce team to boost your brand's visibility and competitiveness on top online retail platforms in India, using effective strategies and established methods.",
    image: "https://i.ibb.co/NdbX1CQt/image.png",
  },
  {
    title: "7. Quick Commerce",
    description:
      "Boost product visibility on India's fast-growing quick commerce platforms, expanding reach, driving sales, and reaching more customers effectively.",
    image: "https://i.ibb.co/jBj7dwm/image.png",
  },
  {
    title: "8. Airports",
    description:
      "We've forged unique partnerships with airport retailers, offering travelers premium products for their convenience on-the-go.",
    image: "https://i.ibb.co/jBj7dwm/image.png",
  },
  {
    title: "9. CPC Canteen",
    description:
      "Ensuring your products are available among preferred choices for public servants and amplifying reach to diverse consumer bases.",
    image: "https://i.ibb.co/jBj7dwm/image.png",
  },
  {
    title: "10. Thankyou",

  },
];

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <div className='px-2 py-3 mb-3'>
      <InfiniteMovingCardsDemo />
      </div>
      <Preview />
      <div className="px-5 md:px-0 max-w-7xl mx-auto text-center">
        <div className="font-bold text-lg md:text-4xl dark:text-white text-black">
          <Cover>We ensure your products reach every </Cover>
          <span className="text-neutral-400">

          </span>
        </div>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          distribution channel across  India
        </p>
      </div>
      <StickyScrollRevealDemo sendThisData={data} hide={false} />
      {/* <LampDemo /> */}
      <DistributionProcess/>
      <SpotlightNewDemo/>
      

    </div>
  )
}

export default page