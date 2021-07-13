import React from 'react';

import './app-header.css';

const AppHeader = ({postsCount, likedCount}) => {
    return (
        <div className="app-header d-flex">
            <h1>Ivan Vovk</h1>
            <h2>{postsCount} записей из них понравилось {likedCount}</h2>
        </div>
    )
}

export default AppHeader;