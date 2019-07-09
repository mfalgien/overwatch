import React from "react";
import SearchBar from "./SearchBar";
//import HeroCard from "./HeroCard";
import overwatch from "../apis/overwatch";
import PlayerIcon from "./PlayerIcon";

class App extends React.Component {
  state = { heroes: [], name: "", rating: null, image: "", ratingIcon: "" };

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
    console.log(Object.keys(this.state.heroes));
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onNameSubmit} />
        <div className="ui grid">
          <div className="four wide column">
            <PlayerIcon
              image={this.state.image}
              name={this.state.name}
              rating={this.state.rating}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
