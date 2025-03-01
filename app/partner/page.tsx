import { Breadcrumb } from '@/owncomponnets/Breadcrumb/BackgroundBeamsWithCollisionDemo'
import { HeroParallaxDemo } from '@/owncomponnets/Home/HeroParallaxDemo'
import Partners from '@/owncomponnets/Partner/PartnerComponent'
import { SpotlightNewDemo } from '@/owncomponnets/SpotlightNewDemo/SpotlightNewDemo'
import React from 'react'

const page = () => {
    return (
        <div>

            <Breadcrumb firstPart={"Building Strong "} secondPart={"Relationships "} thirdPart={"for Mutual Success"} centerPart={"Partners"} />
            <Partners />
                  <SpotlightNewDemo />
            <HeroParallaxDemo />
        </div>
    )
}

export default page