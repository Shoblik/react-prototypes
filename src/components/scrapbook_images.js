import React from 'react';

const ScrapbookImage = (props) => {
    const {src, style} = props.about;

    return(
        <img className='scrapbook-image' src={src} style={style}/>
    )
}

export default ScrapbookImage;