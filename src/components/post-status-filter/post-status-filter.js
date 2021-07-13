import React, {Component} from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
            {name: 'important', label: 'Важные'}
        ]        
    }
    render() {
        const {filter, onChangeFilter} = this.props        

        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const buttonClass = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                onClick={() =>onChangeFilter(name)}
                key={name} 
                type="button" 
                className={`btn ${buttonClass}`}
                >{label}</button>
            )
        })
    
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
