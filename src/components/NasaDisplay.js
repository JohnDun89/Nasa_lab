import React from 'react'

class NasaDisplay extends React.Component {
  render () {
    if (!this.props.fact) return null;
    return (
      <div>
        <h3>
         {this.props.fact.data.description}
         </h3>
         <img src={this.props.fact.href[0] }/>
      </div>
    )
  }
}

export default NasaDisplay;
