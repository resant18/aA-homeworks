import React from 'react';

const GiphysIndexItem = ({giphy}) => {
    return (
        <li className="giphys-item" key={giphy.id}>
            <img src={giphy.images.fixed_height_still.url} alt={giphy.title}/>
        </li>
    )
}

export default GiphysIndexItem;
