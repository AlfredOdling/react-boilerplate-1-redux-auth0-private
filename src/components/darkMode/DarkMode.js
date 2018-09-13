import React from 'react'
import { connect } from 'react-redux'
import toggleTheme from '../../actions/toggleTheme'
import ToggleButton from '../ToggleButton'

const DarkMode = props => {
  const { isDarkMode } = props

  return (
    <div id="dark-mode">
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: dispatch(toggleTheme()),
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
