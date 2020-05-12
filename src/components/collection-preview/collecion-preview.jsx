import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collecion-preview.styles.scss';
// import { render } from 'node-sass';

const CollectionPreview = ({ title, items }) => (
    <div className= 'collection-preview'>
        <h1 children='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} { ...otherItemProps } />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;