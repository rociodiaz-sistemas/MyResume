import './mobileStyles.css'

import { TEXTS_EXPERIENCE_BAUFEST, TEXTS_EXPERIENCE_CFO, TEXTS_FORMATION } from './texts';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Formation from '../modern-view/Formation';
import HorizontalTabs from './HorizontalTabs';
import Job from '../modern-view/Job';
import JobMobile from './JobMobile';
import LanguageButton from '../LanguageButton';
import React from 'react';
import Skills from '../modern-view/Skills';
import Socials from '../modern-view/Socials';
import TabPanel from '../modern-view/TabPanel';
import TypeAnimation from 'react-type-animation';
import VerticalTabs from '../modern-view/tabs';
import baufestLogo from '../../images/Baufest.png';
import cfotech from '../../images/cfotech.png';
import davinci from '../../images/davinci.png'
import profilePic2 from '../../images/profpic.png';

function MobileWrapper({ isMobile }) {
    const [tab, setTab] = React.useState(0);
    const [slideDirectionClass, setSlide] = React.useState("");
    const [activeStep, setActiveStep] = React.useState(0);

    const handleTabChange = (tab, direction) => {
        setTab(tab);
        if (direction === "down") {
            setSlide("slide-top");
        } else if (direction === "up") {
            setSlide("slide-bottom");
        } else {
            setSlide("")
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setTab(3);
        setSlide("slide-left");
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setTab(1);
        setSlide("slide-right")
    };

    return (
        <div className="mobile-container">
            <div className="browser-mockup with-url">
                <div className='content-page'>
                    <div className='profile'>
                        <img src={profilePic2} className="rounded-img" alt="pretty profile pic"></img>
                        <h1>ROCIO DIAZ</h1>
                        <p className='muted'> ReactJS | Frontend Developer</p>
                        {/* <Button style={{ marginTop: " 20px" }} onClick={saveFile} variant="contained">DOWNLOAD RESUME</Button> */}
                        <LanguageButton />
                    </div>
                    <div className='socials'>
                        <Socials />
                    </div>
                </div>
            </div>

            <div className='black-container'>
                <div className='black-content'>
                    <TabPanel className={slideDirectionClass} value={tab} index={0}>
                        <div className='title'><p className="title-ide">👋About me </p> <p>{"() {"}</p></div>
                        <p className='text'>Hi! I'm a ReactJS Frontent Developer with 3+ years of experience from Argentina. I'm a native english speaker (USA citizen).</p>
                        <p className='text'>
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    "I'm passionate about building world class web applications.",
                                    2000,
                                    "I'm team driven.",
                                    2000,
                                    "I'm considered an out-of-the-box creative thinker.",
                                ]}
                                wrapper="p"
                                repeat={1}
                            />
                        </p>
                        <p className='final'>{"}"}</p>
                    </TabPanel>
                    <TabPanel value={tab} index={1} className={slideDirectionClass}>
                        <JobMobile isMobile={isMobile} direction="column" activeStep={activeStep} index={1} title={"Lead frontend developer"} img={cfotech} alt="cfotech logo" date="May 2021 - Dec 2021" href={'https://www.cfotechlatam.com/'} texts={TEXTS_EXPERIENCE_CFO}>
                            {<ArrowForwardIcon onClick={handleNext} fontSize='large' className='see-more-arrow' />}</JobMobile>
                    </TabPanel>
                    <TabPanel value={tab} index={2} className={slideDirectionClass}>
                        <Formation img={davinci} alt="Davinci logo" href="https://davinci.edu.ar/" texts={TEXTS_FORMATION} />
                        <Skills ></Skills>
                    </TabPanel>
                    <TabPanel value={tab} index={3} className={slideDirectionClass}>
                        <JobMobile isMobile={isMobile} direction="column" styleDots={{ margin: "0px", paddingTop: "0px", position: "relative", bottom: "30px" }}
                            activeStep={activeStep} index={2} title={"ReactJS developer"} img={baufestLogo} alt="baufest logo" date="Nov 2018 - May 2021" href={'https://baufest.com/en/'} texts={TEXTS_EXPERIENCE_BAUFEST}>
                            {<ArrowBackIcon onClick={handleBack} fontSize='large' className='see-more-arrow' />}</JobMobile>
                    </TabPanel>
                </div>
                <div className='black-tabs'>
                    <HorizontalTabs setTab={handleTabChange} setActiveStep={setActiveStep} />
                </div>
            </div>
        </div>
    );
}

export default MobileWrapper;
