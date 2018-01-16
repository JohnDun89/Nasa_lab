import React from 'react'

class NasaSelector extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     selectedIndex: undefined
   };
   this.handleChange = this.handleChange.bind(this);
 }

handleChange(event) {
  const selectedIndex = event.target.value
  this.setState({selectedIndex: selectedIndex});
  const selectedFact = this.props.nasaFacts[selectedIndex];
  this.props.setFocusFact(selectedFact);

}

 render() {

   const factNodes = this.props.nasaFacts.map(function(fact, index){
     return (
       <option key={index} value={index}> {fact.data[0].title} </option>
     )
   })


   return (
     <select id="nasa-facts" value={this.state.selectedIndex}
       onChange={this.handleChange}>
       {factNodes}
     </select>
   )
 }
}

export default NasaSelector;
