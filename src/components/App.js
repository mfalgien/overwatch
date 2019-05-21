import React from 'react';
import SearchBar from './SearchBar';
import overwatch from '../apis/overwatch';

class App extends React.Component {
  
  onNameSubmit = async name => {
   const response = await overwatch.get(`/pc/us/${name}/complete`);
   console.log(response);
  }

  render(){
    return <div><SearchBar onFormSubmit={this.onNameSubmit}/> </div>;
  } 
}

export default App;