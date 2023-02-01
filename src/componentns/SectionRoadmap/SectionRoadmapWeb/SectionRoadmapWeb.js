import React from 'react'

function SectionRoadmapWeb() {
  return (
    <div className='sectionRoadmapWeb'>
        <video className="stars" loop={'true'} muted={'true'} autoPlay={'true'} playsInline={'true'}>
            <source src="/stars.mp4" type="video/mp4" />
        </video>

        <div className='content'>
        <div className='mobileRoadmapList'>
            <div className='mobileRoadmapList_CardDone'>
                <div>
                <p className='description'>Deploy NFT</p>
                <p className='caption'>Create collection</p>
                </div>
                <span className='inDone'>Done</span>
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
                <p className='description'>Ticket</p>
                <p className='caption'>NFT Events</p>
                </div>

                <span className='inData'>2023・Q2</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <div>
                <p className='description'>Screen</p>
                <p className='caption'>Wallet</p>
                </div>
                <span className='inData'>2023・Q4</span>
            </div>
            <div className='mobileRoadmapList_Card'>
                <div>
                <p className='description'>Battle</p>
                <p className='caption'>NFT game</p>
                </div>
                <span className='inData'>2024・Q2</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SectionRoadmapWeb