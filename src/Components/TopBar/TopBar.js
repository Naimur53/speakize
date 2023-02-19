import React from 'react';

const TopBar = () => {
    return (
        <div>
            <div className='container'>
                <div className='md:pt-[48px] pt-[20px] flex items-center justify-between'>
                    <div>
                        <h1 className='uppercase font-bold font-lexend text-[24px] md:text-base'>Speakize</h1>
                    </div>
                    <div>
                        <a href='#' className='nav-button text-white bg-medium-blue effect'>login</a>
                        <a href='#' className='nav-button ml-[10px] md:ml-[20px] text-medium-blue border-medium-blue effect border'>sign up</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBar;