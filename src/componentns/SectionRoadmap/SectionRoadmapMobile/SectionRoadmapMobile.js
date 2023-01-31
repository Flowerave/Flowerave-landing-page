import React from 'react'

function SectionRoadmapMobile() {
  return (
    <div className='sectionRoadmapMobile'>
        <h5>Roadmap</h5>
        <div className='mobileRoadmapList'>
            <div className='mobileRoadmapList_Card'>
                <p className='description'>Ticket</p>
                <p className='caption'>NFT Events</p>
                <span className='inWork'>Coming Soon</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <p className='description'>VPN</p>
                <p className='caption'>Pay Ton</p>
                <span className='inWork'>Coming Soon</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <p className='description'>Screen</p>
                <p className='caption'>Wallet</p>
                <span className='inWork'>Coming Soon</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <p className='description'>Battle</p>
                <p className='caption'>NFT game</p>
                <span className='inWork'>Coming Soon</span>
            </div>
        </div>
    </div>
  )
}

export default SectionRoadmapMobile