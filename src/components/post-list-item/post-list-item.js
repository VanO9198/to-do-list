import React from 'react';

import './post-list-item.css';

const PostListItem = ({label, onDelete, id, onToggleLike, onToggleImportant, important, like}) => {
    
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
        classNames += ' important';
    }

    if (like) {
        classNames += ' like';
    }

    return (
        <div className={classNames}>
            <span
                onClick={() => {
                    onToggleLike(id)
                    }
                }
                className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    onClick={() => {
                        onToggleImportant(id)
                        }
                    } 
                    className="btn-star btn-sm">
                    <i className="fas fa-star"></i>
                </button>
                <button
                    onClick={() => {
                        onDelete(id)
                        }
                    } 
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    )    
}


export default PostListItem;