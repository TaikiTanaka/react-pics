import React from 'react'

class SearchBar extends React.Component{
    state = {term:''}

    onSearchSubmit = event => {
        event.preventDefault();
        // This is a function call to onSubmit, which is a function defined in parent component
        this.props.onSubmit(this.state.term)
    }

    render (props){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onSearchSubmit} className='ui form' action='./'>
                    <label>Image Search</label>
                    <input 
                        className='field' 
                        type="text" 
                        name="fname" 
                        onChange={e=>this.setState({term:e.target.value})}
                        value={this.state.term}
                    />
                </form>
            </div>
        );
    };
};

export default SearchBar;