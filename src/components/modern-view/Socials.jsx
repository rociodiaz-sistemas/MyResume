import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Socials() {
    //can't get a switch with ID to work with material ui bottom navigation

    const goToLinkedin = (e) => {
        window.open("https://www.linkedin.com/in/roc%C3%ADo-d%C3%ADaz-698444194/",);
    }

    const sendWhatsapp = (e) => {
        window.open("https://walink.co/da293a");
    }

    const sendMail = () => {
        window.open("mailto:rociodiaz.sistemas@gmail.com");
    }

    const goToGithub = () => {
        window.open("https://github.com/rociodiaz-sistemas/MyResume");
    }

    return (
        <>
            <BottomNavigation showLabels>
                <BottomNavigationAction id="linkedin" onClick={goToLinkedin} label="LinkedIn" icon={<LinkedInIcon />} />
                <BottomNavigationAction id="text" onClick={sendWhatsapp} label="Text me" icon={<WhatsAppIcon />} />
                <BottomNavigationAction id="email" onClick={sendMail} label="Email me" icon={<EmailIcon />} />
                <BottomNavigationAction id="github" onClick={goToGithub} label="Github" icon={<GitHubIcon />} />
            </BottomNavigation>
        </>
    );
}