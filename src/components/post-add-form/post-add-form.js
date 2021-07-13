import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChangeValue = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit} 
                className="bottom-panel d-flex">
                <input
                    onChange={this.onChangeValue}
                    type="text"
                    placeholder="О чем Вы думаете сейчас"
                    className="form-control new-post-label"
                    value={this.state.text}
                />
                <button
                    
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </form>
        )
    }
}
