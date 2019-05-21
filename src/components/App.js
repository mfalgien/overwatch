import React from "react";
import SearchBar from "./SearchBar";
import overwatch from "../apis/overwatch";
import PlayerIcon from "./PlayerIcon";

class App extends React.Component {
  state = { heroes: [], name: "", rating: null, image: "" };

  onNameSubmit = async name => {
    const response = await overwatch.get(`/pc/us/${name}/complete`);
    console.log(response);

    this.setState({
      heroes: response.data.competitiveStats.topHeroes,
      name: response.data.name,
      rating: response.data.rating,
      image: response.data.icon
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onNameSubmit} />
        <PlayerIcon image={this.state.image} name={this.state.name} rating={this.state.rating}/> 
      </div>
    );
  }
}

export default App;
