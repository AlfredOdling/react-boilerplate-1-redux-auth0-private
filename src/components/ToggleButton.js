import React from 'react'

const ToggleButton = props => {
  const { toggleTheme, isDarkMode } = props
  console.log('====================================')
  console.log('toggleTheme, isDarkMode', toggleTheme, isDarkMode)
  console.log('====================================')
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={() => toggleTheme()} />
        <span className="slider round" />
      </label>
    </div>
  )
}

export default ToggleButton
