import NavigationBar from '@/componentns/Navigation/NavigationBar';
import SectionFooter from '@/componentns/SectionFooter/SectionFooter';
import SectionMain from '@/componentns/SectionMain/SectionMain';
import SectionNFT from '@/componentns/SectionNFT/SectionNFT';
import SectionRose from '@/componentns/SectionRose/SectionRose';
import SectionService from '@/componentns/SectionService/SectionService';
import React from 'react';

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <SectionMain />
      <SectionRose />
      <SectionService />
      <SectionNFT />
      <SectionFooter />
    </main>
  )
}