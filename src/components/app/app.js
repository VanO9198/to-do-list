import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'some of testing note', important: false, like: false, id: 4},
                {label: 'This is first post', important: false, like: true, id: 1},
                {label: 'This is second post', important: false, like: false, id: 2},
                {label: 'This is third post', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all',
            maxId: 4
        }
    }
    onChangeFilter = (name) => {
        this.setState({
            filter: name
        });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'all':
                return items;
            case 'important':
                return items.filter(item => item.important);
            default:
                return items;


        }
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1
        });
    }

    onSearch = (term) => {
        this.setState({
            term
        })
    }
    toggleFunc = (id, prop) => {
        const {data} = this.state;
        const index = data.findIndex((elem) => elem.id === id);
        const newArr = [...data.slice(0, index), {...data[index], [prop]: !data[index][prop]}, ...data.slice(index + 1)];
        return newArr;
    }

    onToggleLike = (id) => {
        this.setState(() => {
            return {
                data: this.toggleFunc(id, 'like')
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(() => {
            return {
                data: this.toggleFunc(id, 'important')
            }
        })
    }

    onDelete = (id) => {
        
        this.setState((prevState) => {
            return {
                data: prevState.data.filter((item) => item.id !== id)
            }
        })
    }

    addItem = (body) => {
        const {maxId, data} = this.state;
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: maxId + 1            
        }

        const newArr = [...data, newItem];
        this.setState(({maxId}) => {
            return {
                data: newArr,
                maxId: maxId + 1
            }
        })
    }

    render() {
        console.log(this.state);
        const {data, term, filter} = this.state;
        const allPosts = data.length;
        const liked = data.filter(item => item.like).length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader 
                    postsCount={allPosts}
                    likedCount={liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onSearch={this.onSearch}/>
                    <PostStatusFilter
                        onChangeFilter={this.onChangeFilter}
                        filter={filter}/>
                </div>
                <PostList posts={visiblePosts}
                        onDelete={this.onDelete}
                        onToggleLike={this.onToggleLike}
                        onToggleImportant={this.onToggleImportant}/>
                <PostAddForm
                    onAdd={this.addItem}/>
                
            </div>       
        )
    
    }
}

export default App; 