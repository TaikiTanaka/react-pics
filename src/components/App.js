import React from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'

class App extends React.Component{
    state = { images: [] }

    onSearchSubmit = async (term) => {
        // The baseURL is taken care of in the axios.create statement, so only need to append additional
        // Still need to send specific parameters obviously
        const response = await unsplash.get('/search/photos',
            {params:{query:term}}
        )
        this.setState({ images : response.data.results });
    }

    render(){
        return(
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }

}

export default App;