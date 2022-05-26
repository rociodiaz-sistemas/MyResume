import { Chip, IconButton } from '@mui/material';

import Dots from '../modern-view/dots';

export default function JobMobile({ img, alt, date, texts, activeStep, href, children, title, index, styleDots }) {
    return (
        <>
            <div className='title'><p className="title-ide">💼Experience </p> <p>{`(${index}) {`}</p></div>
            <div>
                {index === 2 &&
                    <IconButton value="arrow" style={{ height: "35px" }} className="see-more-arrow" aria-label="see-more">
                        {children}
                    </IconButton>
                }
                <Chip className="text hover-yellow" label={<a target="_blank" without rel="noreferrer" href={href}><img className="logo-clients" src={img} alt={alt}></img></a>}> </Chip>
                <Chip className='text' label={title}></Chip>
                <Chip className='text' label={date}></Chip>
                {index === 1 &&
                    <IconButton value="arrow" style={{ height: "35px" }} className="see-more-arrow" aria-label="see-more">
                        {children}
                    </IconButton>
                }
            </div>

            {texts.map((text) =>
                <p className='text experience'>{text}</p>
            )}
            <p className='final'>{"}"}</p>
            <Dots style={styleDots} activeStep={activeStep} />
        </>
    );
}