import React from 'react';
import WorksInner from '../WorksInner/WorksInner';

const Works = () => (
    <div className='mt-[80px] md:mt-[200px]'>
        <div className="container ">
            <div className='text-center'>
                <h2 className='text-[30px] md:text-base leading-[72px] font-bold mb-[8px]'>

                    How it Works
                </h2>
                <p className='text-xs md:text-sm'>Speakize optimizes language learning. Set your goals in the User settings page. Then use the Smart Feed to study efficiently.</p>
            </div>

        </div>
        <div className='mt-[60px]'>
            <WorksInner />
        </div>
    </div>
);

export default Works;