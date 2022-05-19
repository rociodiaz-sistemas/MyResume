import { Chip, IconButton, Stack } from '@mui/material';

import Dots from './dots';

export default function Job({ img, alt, date, texts, activeStep, href, children, title, index, styleDots}) {
    return (
        <>
            <div className='title'><p className="title-ide">💼Experience </p> <p>{`(${index}) {`}</p></div>
            <Stack direction="row">
                {index === 2 &&
                    <IconButton style={{ height: "35px" }} className="see-more-arrow" aria-label="see-more">
                        {children}
                    </IconButton>
                }
                <Chip className="text hover-yellow" label={<a target="_blank" without rel="noreferrer" href={href}><img className="logo-clients" src={img} alt={alt}></img></a>}> </Chip>
                <Chip className='text' label={title}></Chip>
                <Chip className='text' label={date}></Chip>
                {index === 1 &&
                    <IconButton style={{ height: "35px" }} className="see-more-arrow" aria-label="see-more">
                        {children}
                    </IconButton>
                }
            </Stack>
            {texts.map((text) =>
                <p className='text experience'>{text}</p>
            )}
            <p className='final'>{"}"}</p>
            <Dots style={styleDots} activeStep={activeStep} />
        </>
    );
}