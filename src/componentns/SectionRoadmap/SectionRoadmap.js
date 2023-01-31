import React from 'react'
import SectionRoadmapMobile from './SectionRoadmapMobile/SectionRoadmapMobile'
import SectionRoadmapWeb from './SectionRoadmapWeb/SectionRoadmapWeb'

function SectionRoadmap() {
  return (
    <div id='sectionRoadmap' className='sectionRoadmap'>
        <SectionRoadmapWeb />
        <SectionRoadmapMobile />
    </div>
  )
}

export default SectionRoadmap