import React from 'react';

import './app-header.css';

const AppHeader = ({postsCount, likedCount, importantCount}) => {
    return (
        <div className="app-header d-flex">
            <h1>Ivan Vovk</h1>
            <h2>{postsCount} записей </h2>
            <h3>понравилось {likedCount}</h3>
            <h3>важных {importantCount}</h3>
        </div>
    )
}

export default AppHeader;