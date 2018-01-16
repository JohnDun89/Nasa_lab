import React from 'react'

class NasaContainer extends React.Component {

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
