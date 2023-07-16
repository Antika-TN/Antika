import React from 'react'

const AdminPage = () => {
  return (
    <div>
    <div className='cards'>
    
    <Cards/>
    
    </div>
    <div>
     
      <DashboardTable sellersname={sellersname} />
    </div>
    </div>
  )
}

export default AdminPage