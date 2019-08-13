import React from 'react'
import HealerCard from './HealerCard'

class HealerContainer extends React.Component{

    componentDidUpdate(){
        console.log("Healer Container component did update ran!")
    
      }

      componentDidMount(){
        console.log("Healer Container component did mount ran!")

      }

      render(){
        return (
            <div className="ui three column grid container">  {this.props.healers.map(healer=> <div className="five wide column"><HealerCard healer={healer}/> </div>)}
            </div>
        )
      }

    }



export default HealerContainer;