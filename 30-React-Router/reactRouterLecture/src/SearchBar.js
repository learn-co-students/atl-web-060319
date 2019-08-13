import React from 'react'
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{

    componentDidUpdate(){
        console.log("search bar updated? ")
    }

    render(){
        return(
            <div className="ui four item menu">

                <div className="item" >
                    <h3>
                       <Link to='/healers'>Natural Healing Directory</Link>
                    </h3>
                </div>

                <div className="item" >
                    <h3>
                        <Link to='/newHealer'>Add Healer</Link>
                    </h3>
                </div>
                <div className="item" >
                    <h3>
                        <Link to='/'>Home</Link>
                    </h3>
                </div>

                <div className="ui large icon input">
                    <i className="search icon"></i>
                    <input onChange = {this.props.handleSearch }name="search" type="text" placeholder="Search..."/>
                </div>
            </div>
        )
    }
}


export default SearchBar;