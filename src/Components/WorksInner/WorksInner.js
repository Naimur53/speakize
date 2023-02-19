import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';
const data = [

    {
        id: 0,
        title: 'Settings',
        video: 'https://storage.googleapis.com/createflashcardapp.appspot.com/common/video/01_Settings.mp4',
        content: <div>
            <p>
                Start at the <a href="https://speakize.com/catalogue/user/">User</a> settings page to set your target language and the initial number of words to learn.
            </p>
        </div>,
    },
    {
        id: 1,
        title: 'AI smart feed',
        video: 'https://storage.googleapis.com/createflashcardapp.appspot.com/common/video/02_Feed.mp4',
        content: <div>
            <p>
                The <span>Smart Feed</span> provides a personalized media feed, optimized for your learning goals using spaced repetition and word tracking. The feed automatically updates with new content relevant to your learning goals, based on your activity. You can specify which words to target in the <span>User</span> settings page.
            </p>
        </div>,
    },
    {
        id: 2,
        title: 'One-click flashcard creation',
        video: 'https://storage.googleapis.com/createflashcardapp.appspot.com/common/video/03_Creating_flashcards.mp4',
        content: <div>
            <p>
                Click on any word in your target language to open a popup window. Then click Reading , Listening or Production buttons to choose the type of revision you wish to focus on. A flashcard of that type will be created. The flashcard will automatically include spoken audio as well as a related image. You can access your flashcards by clicking on the Decks link in the navigation menu.
            </p>
        </div>,
    },
    {
        id: 3,
        title: 'Add lesson notes',
        video: 'https://storage.googleapis.com/createflashcardapp.appspot.com/common/video/04_Creating_notes.mp4',
        content: <div>
            <p>
                Navigate to the Notes page and click "Add New Item". Paste in text from your lesson notes, provide a title, and click Save. Now click on any word to create a flashcard. The smart feed will automatically include your notes in the feed whenever they are relevant to your learning goals.
            </p>
        </div>,
    },
    {
        id: 4,
        title: 'Add YouTube content',
        video: 'https://storage.googleapis.com/createflashcardapp.appspot.com/common/video/05_Adding_youtube.mp4',
        content: <div>
            <p>
                Navigate to the <span>Notes</span> page and click "Add New Item". Just paste a YouTube link in to the YouTube field, and click save. The title will automatically be filled in. If there are relevant subtitles available, they will be fetched. Now click on any word to create a flashcard. The smart feed will automatically include your notes in the feed whenever they are relevant to your learning goals.
            </p>
        </div>,
    },
    {
        id: 5,
        title: 'Find more word examples',
        video: 'https://storage.googleapis.com/createflashcardapp.appspot.com/common/video/06_Creating_flashcards_from_info.mp4',
        content: <div>
            <p>
                If you come across a word you would like to learn more about, simply click on the 'more_info' link in the word popup. The phrases you see are personalized for your specific learning goals at that moment. As you progress on the site, the recommended phrases will become increasingly advanced.
            </p>
        </div>,
    },
    {
        id: 6,
        title: 'Export as mp3, mp4, Anki',
        video: 'https://storage.googleapis.com/createflashcardapp.appspot.com/common/video/07_Exports.mp4',
        content: <div>
            <p>
                Export your flashcards as audio files (mp3) or video files (mp4), or as an Anki package for use in the popular flashcard app. Click on any Export button on the Decks page. All exports will be made available on the Exports page. Exporting flashcard content is considered as a review for the purposes of progress tracking.
            </p>
        </div>,
    },

]
const WorksInner = () => {
    const [selected, setSelected] = useState(data[0])

    const handleClick = (index) => {
        setSelected(data[index])
    }
    const handleActive = (i) => {
        return selected.id === i
    }
    return (
        <div>
            <div className=" flex lg:flex-row flex-col-reverse  md:gap-0 gap-[80px]">
                <div className='px-[30px] md:px-[80px] w-full'>
                    {
                        data.map((single, i) => <Accordion active={handleActive(i)} index={i} {...single} onClick={handleClick}></Accordion>)
                    }
                </div>
                <div className='bg-[#D4CEFF] flex justify-center items-center w-full xl:min-w-[754px] max-width-[754px] py-[40px] md:py-0'>
                    <div>
                        {data.map((single, i) => <div>
                            {
                                handleActive(i) && <video className='w-[300px] xl:w-[402px]' controls >
                                    <source src={single.video} type='video/mp4' />
                                </video>
                            }
                        </div>)}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WorksInner;