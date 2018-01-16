import React from 'react'
import NasaDisplay from './components/NasaDisplay.js'
import NasaSelector from './components/NasaSelector.js'

class NasaContainer extends React.Component {

  constructor(props) {
    super(props);
    
  }


  render() {
    return(
      <div>
        <h1>Space Fact</h1>
        <NasaSelector />
        <NasaDisplay />
      </div>
    )
  }




}

export default NasaContainer;
