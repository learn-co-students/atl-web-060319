import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eaten)}
        </div>
      </div>
    </Fragment>
  )
}

// console.log(Table);
// const connector = connect();
// console.log(connector);
// const connectedComponent = connector(Table);
// console.log(connectedComponent);
// export default connectedComponent;

const mapStateToProps = state => state.order

export default connect(mapStateToProps)(Table);