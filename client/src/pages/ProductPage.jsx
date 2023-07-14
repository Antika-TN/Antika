import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const ProductPage = () => {
  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap');
          
          body {
            font-family: 'Roboto Condensed', sans-serif;
          }
        `}
      </style>
      <div className="Footer" style={{ width: 1197, height: 202, left: 122, top: 2226, position: 'absolute' }}></div>
      <div className="Banner" style={{ width: 1040, height: 542, left: 201, top: 147, position: 'absolute' }}>
        <div className="CoverImage" style={{ width: 1040, height: 355, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 5 }}></div>
        <div className="EditCoverImage" style={{ width: 49, height: 49, padding: 10, left: 971, top: 287, position: 'absolute', background: '#6C5DD3', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
          <button className="Vector"  style={{ width: 49, height: 49, background: 'transparent', border: 'none', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={console.log('ok')} >
            <AiOutlineEdit style={{ color: 'black', width: 13, height: 16 }}  />
          </button>
        </div>
      </div>
      <div className="EditProfile" style={{ width: 164, height: 30, padding: 10, left: 1062, top: 518, position: 'absolute', background: '#6C5DD3', borderRadius: 150, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
        <div className="Vector" style={{ width: 14, height: 14, background: 'transparent' }}>
          <AiOutlineEdit style={{ color: 'black', width: 16, height: 16 }} />
        </div>
        <div className="EditProfile" style={{ color: 'white', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '600', wordWrap: 'break-word' }}>Edit Profile</div>
      </div>
      <div className="ProfilePic" style={{ width: 120, height: 124, left: 460, top: 285, position: 'absolute' }}>
        <img className="Ellipse251" style={{ width: 120, height: 120, left: 0, top: 0, position: 'absolute', borderRadius: 9999, border: '1.50px white solid' }} src="https://via.placeholder.com/120x120" />
        <div className="Ellipse252" style={{ width: 31, height: 31, left: 86, top: 93, position: 'absolute', background: '#6C5DD3', borderRadius: 9999 }}></div>
        <div className="Vector" style={{ width: 14, height: 12, left: 95, top: 103, position: 'absolute', background: 'white' }}>
          <AiOutlineEdit style={{ color: 'black', width: 14, height: 12 }} />
        </div>
      </div>
      <div className="Text" style={{ width: 896, height: 115, left: 71, top: 427, position: 'absolute' }}>
        <div className="FarhanKhan" style={{ left: 371, top: 0, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'SF Pro Display', fontWeight: '600', wordWrap: 'break-word' }}>Farhan Khan</div>
        <div className="Farhan" style={{ left: 417, top: 34, position: 'absolute', color: 'rgba(255, 255, 255, 0.40)', fontSize: 18, fontFamily: 'SF Pro Display', fontWeight: '400', wordWrap: 'break-word' }}>@farhan</div>
      </div>
      <div className="PhotosSec" style={{ width: 345, height: 371, left: 200, top: 771, position: 'absolute' }}>
        <div className="Group48095548" style={{ width: 345, height: 371, left: 0, top: 0, position: 'absolute' }}>
          <div className="Rectangle1905" style={{ width: 345, height: 371, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.10)', borderRadius: 5 }}></div>
          <div className="Photos" style={{ left: 20, top: 20, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.20, wordWrap: 'break-word' }}>Photos</div>
          <div className="SeeAllPhotos" style={{ left: 221, top: 23, position: 'absolute', color: '#6C5DD3', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word' }}>See All Photos</div>
        </div>
        <img className="Rectangle1906" style={{ width: 95, height: 91, left: 20, top: 65, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
        <img className="Rectangle1909" style={{ width: 95, height: 91, left: 20, top: 166, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
        <img className="Rectangle1912" style={{ width: 95, height: 91, left: 20, top: 267, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
        <img className="Rectangle1907" style={{ width: 95, height: 91, left: 125, top: 65, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
        <img className="Rectangle1910" style={{ width: 95, height: 91, left: 125, top: 166, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
        <img className="Rectangle1913" style={{ width: 95, height: 91, left: 125, top: 267, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
        <img className="Rectangle1908" style={{ width: 95, height: 91, left: 230, top: 65, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
        <img className="Rectangle1911" style={{ width: 95, height: 91, left: 230, top: 166, position: 'absolute', borderRadius: 4 }} src="https://via.placeholder.com/95x91" />
      </div>
      <div className="FeedSec1" style={{ width: 666, height: 532, left: 575, top: 769, position: 'absolute' }}>
        <img className="Ellipse248" style={{ width: 43, height: 43, left: 0, top: 0, position: 'absolute', borderRadius: 9999 }} src="https://via.placeholder.com/43x43" />
        <div className="FarhanKhan" style={{ left: 56, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '600', wordWrap: 'break-word' }}>Farhan Khan</div>
        <div className="Farhan" style={{ left: 56, top: 27, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '400', wordWrap: 'break-word' }}>@farhan</div>
        <div className="M" style={{ left: 178, top: 2, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'SF Pro Display', fontWeight: '400', wordWrap: 'break-word' }}>4m</div>
        <img className="Rectangle1901" style={{ width: 666, height: 426, left: 0, top: 106, position: 'absolute', borderRadius: 5 }} src="https://via.placeholder.com/666x426" />
      </div>
    </div>
  );
};

export default ProductPage;
