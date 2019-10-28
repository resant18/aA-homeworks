import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
    // passing props is not needed here because Root doesn't pass any data
    constructor() {
        super();

        this.state = {
            searchTerm: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchSearchGiphys('golden+retriever');
    // }

    handleChange(e) {        
        this.setState({ searchTerm: e.target.value });        
    }

    handleSubmit(e) {
        e.preventDefault();        
                
        this.props.fetchSearchGiphys(this.state.searchTerm);
    }

    render() {
        debugger
        return (
            <div>
                <form>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Search</button>
                </form>
                < GiphysIndex giphys = {this.props.giphys}/>
            </div>
        )
    }
}

export default GiphysSearch;