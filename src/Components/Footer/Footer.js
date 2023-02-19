import React from 'react';
import publicLink from '../../utilites/publicLink';

const Footer = () => {
    return (
        <div className='mt-[41px] py-[80px] px-[64px] border-t border-[#B3B3B3]'>
            <div className="container">
                <div className='flex xl:flex-row flex-col justify-between items-center gap-[25px]'>
                    <div>
                        <h1 className='uppercase font-bold font-lexend text-[24px] xl:text-[38px] md:leading-[56px]'>Speakize</h1>
                    </div>
                    <div>
                        <ul className='flex md:flex-row flex-col text-xxs items-center gap-[10px] md:gap-[24px] text-black font-black font-lexend'>

                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookies Settings</a></li>

                        </ul>
                    </div>
                    <div>
                        <ul className='flex gap-[12px]'>
                            <li><a href="#" className='effect'><img src={publicLink('/Facebook.svg')} alt="social icons" /></a></li>
                            <li><a href="#" className='effect'><img src={publicLink('/Instagram.svg')} alt="social icons" /></a></li>
                            <li><a href="#" className='effect'><img src={publicLink('/Twitter.svg')} alt="social icons" /></a></li>
                            <li><a href="#" className='effect'><img src={publicLink('/LinkedIn.svg')} alt="social icons" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;