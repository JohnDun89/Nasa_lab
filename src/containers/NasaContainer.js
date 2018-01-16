import React from 'react'
import NasaDisplay from '../components/NasaDisplay.js'
import NasaSelector from '../components/NasaSelector.js'

class NasaContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nasaFacts: [],
      focusFact: null
    };
    this.setFocusFact = this.setFocusFact.bind(this);
  }

  setFocusFact(fact) {
    this.setState({focusFact : fact });
  }
// https://api.nasa.gov/planetary/apod?api_key=lqgETZONByMF5KESbWAtVTe4v3tNZKf674paxALq

  componentDidMount() {
  const url = 'https://images-api.nasa.gov/search?q=pluto%2011';
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', () => {
    if (request.status !== 200) return;
    const jsonString = request.responseText;
    const nasaFacts = JSON.parse(jsonString);
    console.log('nasafacts: ',nasaFacts.collection.items);
    this.setState({nasaFacts: nasaFacts.collection.items, focusFact: nasaFacts[0]})
  })
  }

  render() {
    return(
      <div>
        <h1>Space Fact</h1>
        <NasaSelector nasaFacts={this.state.nasaFacts}
        setFocusFact={this.setFocusFact}/>
        <NasaDisplay fact={this.state.focusFact}/>
      </div>
    )
  }




}

export default NasaContainer;
