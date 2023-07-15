import React from 'react'

const AdminPage = () => {
  return (
    <div>
      
    <div className='cards'>
    
    <Cards/>
    
    </div>
    <h1 className='title'>Top Market Statistics</h1>
    <h2 className='underTitle'>The NFTs on_____ ,ranked by volume,floor price and other statistics</h2>
    <div>
     
      <DashboardTable sellersname={sellersname} />
    </div>
    </div>
  )
}

export default AdminPage