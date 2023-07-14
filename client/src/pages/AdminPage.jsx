import React, { useState , useEffect } from 'react'
import DashboardTable from '../Components/Admin/Table.jsx'
import Cards from '../Components/Admin/cards.jsx';


const AdminPage = () => {
  const [sellersname, setSellersname] = useState([]);

  useEffect(() => {
    fetchSellersData();
  }, []);

  async function fetchSellersData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getSellers');
      const data = await response.json();


      setSellersname(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
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