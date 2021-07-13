import React, {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term);
    }
    render() {
        return (
            <input
                onChange={this.onSearch}
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
            />
        )
    }
}

export default SearchPanel;