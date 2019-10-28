import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ( {giphys} ) => {
    const giphysIndex = giphys.map( giphy => {
        return (            
            <div>
                <GiphysIndexItem key={giphy.id} giphy={giphy} />
            </div>
        )
    })
    return (
        <div className="giphys">
            <ul>
                { giphysIndex }
            </ul>
        </div>
    )
}

export default GiphysIndex;