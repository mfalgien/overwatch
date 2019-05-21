import React from "react";

class SearchBar extends React.Component {
  state = { username: "" };

  onInputChange = event => {
    this.setState({username: event.target.value});
  }

  onFormSubmit = event =>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.username);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>BattleTag</label>
          <input type="text" value={this.state.username} onChange={this.onInputChange} />
        </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
