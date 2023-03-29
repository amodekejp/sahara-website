import { Link } from '@mui/material';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-gray-800 pt-12 flex flex-1  h-full" id='footer'>
      <div className="container mx-auto px-4 text-white py-3">
        <div className="flex flex-wrap  md:justify-between gap-3 justify-center items-center">
          <div className="w-full md:w-4/12 px-4 border flex flex-col items-center py-4 rounded-md	shadow-lg shadow-slate-500/50">
            <img className='footer-logo' src='https://res.cloudinary.com/dtqrb1kbg/image/upload/v1679979057/photo_2023-03-28_05-49-12_ejgxr3.jpg'alt='footer-logo'/>
            <p className='text-left '>
            Wolud you like to give us a feedback or
              need help or have a question? Please,
              contact  our CustomerCare at 081111111111.
            </p>
          </div>
          <div className="footer-socials border flex flex-col items-center p-8 rounded-md	shadow-lg shadow-slate-500/50">
            <h2 className='text-center'>Connect with Us Here</h2>
            <div className="whatsapp flex  justify-center gap-1 item-center">
              <Link to="https://wa.me/2348130000000"  id='socials'>
                 <span>WhatsApp</span>
              </Link>
            </div>
            <div className="facebook flex  justify-center gap-1 item-center">
              <Link to="https://facebook.com/" id='socials'>
               <span>Facebook</span>
              </Link>
           </div>
            <div className="instagram flex  justify-center gap-1 item-center">
              <Link to="https://instagram.com/" id='socials'>
                <span>Instagram</span>
              </Link>
           </div>
            <div className="twitter flex  justify-center gap-1 item-center">
              <Link to="https://twitter.com/" id='socials'>
                <span>Twitter</span>
              </Link>
           </div>
          </div>
      </div>
      <p className="text-center pt-8 text-gray-400">&copy; 2023 CyberThrone HQ</p>
    </div>
  </footer>
  );
}

export default Footer;
