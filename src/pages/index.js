import React from 'react';

import NavigationBar from '@/componentns/Navigation/NavigationBar';
import SectionFooter from '@/componentns/SectionFooter/SectionFooter';
import SectionMain from '@/componentns/SectionMain/SectionMain';
import SectionArtist from '@/componentns/SectionArtist/SectionArtist';
import SectionRose from '@/componentns/SectionRose/SectionRose';
import SectionService from '@/componentns/SectionService/SectionService';
import SectionNFT from '@/componentns/SectionNFT/SectionNFT';
import SectionRoadmap from '@/componentns/SectionRoadmap/SectionRoadmap';

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <NavigationBar />

      {/* SECTION */}
      <SectionMain    />
      <SectionRose    />
      <SectionNFT     />
      <SectionService />
      <SectionArtist  />

      <SectionRoadmap />

      {/* FOOTER */}
      <SectionFooter  />
    </main>
  )
}