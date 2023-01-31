import React from 'react'

function SectionRoadmapMobile() {
  return (
    <div className='sectionRoadmapMobile'>
        <h5>Roadmap</h5>
        <div className='mobileRoadmapList'>
            <div className='mobileRoadmapList_Card'>
                <div>
                <p className='description'>Ticket</p>
                <p className='caption'>NFT Events</p>
                </div>

                <span className='inWork'>Coming Soon</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <div>
                <p className='description'>VPN</p>
                <p className='caption'>Pay Ton</p>
                </div>
                <span className='inWork'>Coming Soon</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <div>
                <p className='description'>Screen</p>
                <p className='caption'>Wallet</p>
                </div>
                <span className='inData'>2023ç・Q4</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <div>
                <p className='description'>Battle</p>
                <p className='caption'>NFT game</p>
                </div>
                <span className='inData'>2024・Q4</span>
            </div>
        </div>
    </div>
  )
}

export default SectionRoadmapMobile