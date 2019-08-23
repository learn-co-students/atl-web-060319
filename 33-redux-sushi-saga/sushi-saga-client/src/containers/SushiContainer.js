import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.menu.map(s => <Sushi {...s} />)}
        <MoreButton />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  let start = state.menu.page * 4;
  let menu = state.menu.sushi.slice(start, start + 4);
  return { menu };
}

export default connect(mapStateToProps)(SushiContainer)