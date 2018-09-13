import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/toggleTheme'
import ToggleButton from '../ToggleButton'

const DarkMode = props => {
  const { toggleTheme, isDarkMode } = props

  return (
    <div id="dark-mode">
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: dispatch(actions.toggleTheme()),
})

function mapStateToProps(state) {
  return {
    isDarkMode: state.toggleThemeReducer.isDarkMode,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DarkMode)
