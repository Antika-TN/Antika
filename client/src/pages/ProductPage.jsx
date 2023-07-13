import React from 'react';

const ProductPage = () => {
  return (
    <div>
      <div style={{ marginLeft: 230, width: 1040, height: 355, background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 5 }}>
        <img style={{ marginTop: 300, marginLeft: 450, width: 120, height: 120, borderRadius: '50%', border: '1.5px solid white' }} src="https://via.placeholder.com/120x120" alt="Product" />
      </div>
      <div style={{ width: 164, height: 45, padding: 10, background: '#6C5DD3', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
        <div style={{ width: 14, height: 14, background: 'white' }}></div>
        <div style={{ color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '600', wordWrap: 'break-word' }}>Edit Profile</div>
      </div>
      <div style={{ width: 1440, height: 2468, background: 'linear-gradient(123deg, #984D38 0%, #181E41 63%)' }}></div>
      <img style={{ width: 43, height: 43, borderRadius: '50%' }} src="https://via.placeholder.com/43x43" alt="User" />
      <div style={{ color: 'white', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '600', wordWrap: 'break-word' }}>Farhan Khan</div>
      <div style={{ color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '400', wordWrap: 'break-word' }}>4m</div>
      <div style={{ color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '500', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <img style={{ width: 666, height: 426, borderRadius: 5 }} src="https://via.placeholder.com/666x426" alt="Image" />
    </div>
  );
};

export default ProductPage;
