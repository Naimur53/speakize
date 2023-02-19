import React from 'react';
import publicLink from '../../utilites/publicLink';

const Accordion = ({ index, title, content, onClick, active }) => {

    return (
        <div onClick={() => onClick(index)} className={`accordion-wrap  ${active ? 'active' : 'effect  cursor-pointer'}`}>
            <div>
                <h3 className='number'>0{index + 1}</h3>
            </div>
            <div>
                <h1 className='title'>  {title}</h1>
                {
                    active && <div>
                        <div className='content'>
                            {content}
                        </div>
                        <a href="https://tailwindcss.com/docs/guides/create-react-app" className='flex gap-[16px] font-inter text-xxs md:text-xs items-center text-white'>
                            <span className='font-medium'>Craft your content</span>
                            <img className='w-[12px] h-[12px]' src={publicLink('/up-arrow.svg')} alt="up arrow" />
                        </a>
                    </div>
                }
            </div>
        </div>
    );
};

export default Accordion;