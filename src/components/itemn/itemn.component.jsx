import React from 'react';
import './itemn.style.css';

const ItemN = props => (
    <div className='image-block'>
        <div className='collection-footer'>
            <a href='#'>{props.item_name}</a>
        </div>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}
        />
    </div>
);

export default ItemN;
