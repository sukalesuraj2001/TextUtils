import React from 'react'

function TextFormWrapper() {
    const showAlert = true; // Set this value according to your requirements
    const mode = 'light';
  return (
    <TextForm
      showAlert={showAlert}
      heading="Enter the text to analyze below"
      mode={mode}
    />
  )
}

export default TextFormWrapper
