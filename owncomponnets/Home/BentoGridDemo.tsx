
import React from "react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { bgs, bigImagea, imageladyImage, imagemenImage, imageSend } from "@/constants/Logo";

export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[18rem]">
            <BentoGridItem title="Mountain Retreat"
            animationVariant={"linear"}
                description="Discover serene landscapes and breathtaking views in our mountain getaway destinations."  overLay={true} header={imageSend} className="col-span-3" />

            <BentoGridItem title="Organization of 1800+ People"
             animationVariant={"anticipate"}
                description="Comprised of dedicated resale and backroom teams." header={bgs} overLay={true} className="col-span-2" />
            <BentoGridItem title="400+"
            animationVariant={"circInOut"}
                description="On Roll Sales Executive."  header={imagemenImage} overLay={false} className="col-span-1" />

            <BentoGridItem title="Mountain Retreat"
                  animationVariant={"circOut"}
                description="Discover serene landscapes and breathtaking views in our mountain getaway destinations." header={imageladyImage} className="col-span-1" />
            <BentoGridItem title="Mountain Retreat"
             animationVariant={"circOut"}
                description="Discover serene landscapes and breathtaking views in our mountain getaway destinations."  overLay={true} header={bigImagea} className="col-span-1" />
            <BentoGridItem title="Mountain Retreat"
             animationVariant={"circOut"}
                description="Discover serene landscapes and breathtaking views in our mountain getaway destinations."  header={imageSend} className="col-span-1" />

            <BentoGridItem title="Mountain Retreat"
             animationVariant={"circOut"}
                description="Discover serene landscapes and breathtaking views in our mountain getaway destinations." header={imageSend} className="col-span-1" />
            <BentoGridItem title="Mountain Retreat"
             animationVariant={"circOut"}
                description="Discover serene landscapes and breathtaking views in our mountain getaway destinations." header={bigImagea} className="col-span-2" />




        </BentoGrid>
    );
}

