import * as React from 'react';

import Box from '@mui/material/Box';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs({ setTab, setActiveStep }) {
    const [value, setValue] = React.useState(0);

    window.onwheel = function (e) {
        if (e.deltaY > 0 && value < 2) {
            if (value !== 3 ) {
                setActiveStep(0);
            }
            setValue(value + 1);
            setTab(value + 1, "down");

        }
        if (e.deltaY < 0 && value > 0) {
            if (value !== 3 ) {
                setActiveStep(0);
            }
            setValue(value - 1);
            setTab(value - 1, "up");
        }
        delete window.onscroll;
    };

    const handleChange = (event, newValue) => {
        if (newValue !== 3 ) {
            setActiveStep(0);
        }
        setValue(newValue);
        setTab(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'transparent', display: 'flex', height: "100%", width: "100%" }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', flexDirection: "row" }}
            >
                <Tab icon={<PersonOutlineIcon className='highlight' />} {...a11yProps(0)} />
                <Tab icon={<WorkOutlineOutlinedIcon className='highlight' />} {...a11yProps(1)} />
                <Tab icon={<LibraryBooksOutlinedIcon className='highlight' />} {...a11yProps(2)} />
            </Tabs>
        </Box>
    );
}