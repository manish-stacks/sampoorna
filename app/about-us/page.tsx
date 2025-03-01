import { AboutTimeline } from '@/owncomponnets/Aboutus/AboutTimeline'
import { BackgroundLinesDemo } from '@/owncomponnets/Aboutus/BreadAbout'
import TeamSection from '@/owncomponnets/Aboutus/Team'
import { SpotlightNewDemo } from '@/owncomponnets/SpotlightNewDemo/SpotlightNewDemo'
import React from 'react'

const page = () => {
    return (
        <div className='overflow-hidden'>
            <BackgroundLinesDemo />
            <AboutTimeline />
            <TeamSection />
            <SpotlightNewDemo />
        </div>
    )
}

export default page