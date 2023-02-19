import React from 'react';
import publicLink from '../../utilites/publicLink'

const Benner = () => {
    const data = [
        'Create sentence audio flashcards with one click',
        'AI smart feed recommends personalized content, so you always know what to study next',
        'Import lesson notes or YouTube links, export to Anki or mp3',
        'AI model tracks your progress to optimize your learning path'
    ]
    return (
        <div className='md:mt-[105px] mt-[50px]'>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-[40px] xl:gap-[60px]">
                    <div className='flex justify-center items-center'>
                        <div>
                            <h2 className='text-[32px] lg:text-[40px] xl:text-lg mb-[40px] md:mb-[60px] text-main-black font-bold'>Speakize optimizes language learning</h2>
                            <div className='flex flex-col gap-[16px]'>
                                {
                                    data.map(single => <div className='flex items-center gap-[14px] text-black text-xs md:text-ls leading-[28px]'>
                                        <img className='md:w-[30px] w-[24px] md:h-[30px]' src={publicLink('/arrow.svg')} alt="arrow right" />
                                        <p>{single}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={publicLink('/cuate.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benner;