import React from 'react';
import htaicon from "../assets/image/logo-hta.png";
import ringringicon from "../assets/image/ringing.png";
import messageicon from "../assets/image/email.png";

const Notif = () => {
  return (
    <div className='notif-bar'>
        <div className='logo-hta-group-ind'>
            <p>HTA INDONESIA GROUP</p>
            <img src={htaicon} alt="logo-hta" height="50" width="20" />
        </div>

        <div className="icon-kanan">
            <div className='icon-notif-1'>
                <img src={ringringicon} alt="logo-hta" height="10" width="30" /> 
            </div>

            <div className='icon-notif-2'>
                <img src={messageicon} alt="logo-hta" height="10" width="30" /> 
            </div>
        </div>
    </div>
  )
}

export default Notif

