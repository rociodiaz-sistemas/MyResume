import { Chip, Stack } from '@mui/material';

import pdf from '../../pdfs/courses.pdf';
import udemy from '../../images/udemy.png';

export default function Formation({ img, alt, texts, href, title, }) {
    return (
        <>
            <div className='title'><p className="title-ide">📑Education </p><p>{"() {"}</p></div>
            <Stack direction="row">
                <Chip className="text chip-hover hover-yellow" label={<a target="_blank" without rel="noreferrer" href={href}><img className="logo-clients" src={img} alt={alt}></img></a>}> </Chip>
                <Chip className="text chip-hover hover-yellow" label={<a without rel="noopener noreferrer" target="_blank" href={pdf}><img className="logo-clients" src={udemy} alt="certificates"></img></a>}> </Chip>
            </Stack>
            {texts.map((text) =>
                <p className='text experience'>{text}</p>
            )}
        </>
    );
}