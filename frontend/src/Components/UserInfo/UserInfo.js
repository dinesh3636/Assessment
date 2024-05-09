import React from 'react';
import "./UserInfo.css"

const UserInfo = ({ userData }) => {

  const { name, username, email, address, phone, website, company } = userData;
  const addressDetails = address ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}` : '';

  return (
    <div className="user">
      <div className='userinfo'>
      <div className='img'>
        <img style={{ width: '230px', borderRadius: '200px' }} src="https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg" alt="User" />
      </div>
      <div className="info">
        <h2>{username}</h2>
        <p style={{ fontWeight: "bolder" }}>{name}</p>
        <div className='bio'>
          <p><span style={{ fontWeight: "bolder" }}>Email:</span>  {email}</p>
          <p><span style={{ fontWeight: "bolder" }}>Phone:</span> {phone}</p>
          <p><span style={{ fontWeight: "bolder" }}>Website:</span> {website}</p>
          <p><span style={{ fontWeight: "bolder" }}>Address:</span> {addressDetails}</p>
        </div>
        <div className='comp'>
          <h4>Company</h4>
          <p>{company.name}</p>
          <p>{company.catchPhrase}</p>
          <p>{company.bs}</p>
          <p> <span style={{ fontWeight: 'lighter' }}>Followed by</span> <span style={{ fontWeight: "bolder" }}>mahi7781, sachintendulkar +150more</span></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserInfo;
