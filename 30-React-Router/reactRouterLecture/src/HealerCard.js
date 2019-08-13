import React from 'react'
import { Link } from 'react-router-dom';


class HealerCard extends React.Component {

  componentDidUpdate() {
    console.log(" Healer Card component did update ran!")
    
  }

  componentDidMount() {
    console.log("Healer Card component did mount ran!")

  }

  componentWillMount() {

    console.log("Healer Card component will  unmount ran!")

  }

  

  render() {
    return (
      <div className="ui column">
        <div className="ui segment image ">
          <Link to={`healer/${this.props.healer.id}`} >
          <img alt="Image of medicine healer"
              src={this.props.healer.length > 0 ? this.props.healer[0].image : this.props.healer.image} />
          </Link>
        </div>
        <div className="content">
          <a className="header">{this.props.healer.name}</a>
          <div className="description">
            {this.props.healer.description}
          </div>
        </div>
      </div>
    )
  }



}


export default HealerCard;