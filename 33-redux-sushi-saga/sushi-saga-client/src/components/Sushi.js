import React from 'react'
import { connect } from 'react-redux'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
        onClick={() => props.dispatch({ type: 'EAT_SUSHI', id: props.id, price: props.price })}>
        {
          props.eaten.includes(props.id) ?
            null
            :
            <img src={props.img_url} alt={`Piece of ${props.name} Sushi`} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

const mapStateToProps = state => ({ eaten: state.order.eaten })

export default connect(mapStateToProps)(Sushi)