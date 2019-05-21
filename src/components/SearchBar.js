import React from "react";

class SearchBar extends React.Component {
  state = { username: "" };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit="" className="ui form">
        <div className="field">
          <label>BattleTag</label>
          <input type="text" />
        </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
