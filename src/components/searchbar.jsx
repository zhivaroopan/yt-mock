import React from 'react'

class SearchBar extends React.Component {
    
    state = { term : '' }

    onChangeHandler = (event) => {
        event.preventDefault()
        this.setState({
            term : event.target.value
        })
        console.log(this.state.term)
    }

    onFormSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return(
            <div className='search-bar ui segment'>
                <form OnSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input type='text' value={this.state.term} onChange={this.onChangeHandler}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar