import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleLike, onToggleImportant}) => {

    const elements = posts.map((item) => {
        if (typeof item === 'object' && item.label && item.id) {
            return (
                <li key={item.id} className="list-group-item">
                    <PostListItem 
                        id={item.id}
                        onToggleLike={onToggleLike}
                        onDelete={onDelete}
                        label={item.label}
                        onToggleImportant={onToggleImportant}
                        like={item.like}
                        important={item.important}/>
                </li>    
            )
        } else {
            return false;
        }
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;