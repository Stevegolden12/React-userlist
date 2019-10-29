import React, { Component } from 'react';
import '../App.css';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.showGames = this.showGames.bind(this);
  }
  state = {
    isGamePlayedChecked: false
  }

  showGames() {
    this.setState((prevState) => ({
      isGamePlayedChecked: !prevState.isGamePlayedChecked
    }))
    console.log(this.state.isGamePlayedChecked)
  }

   
  render() {
    let usersList;
    if (this.state.isGamePlayedChecked === false) {
      usersList = <ul>
        {this.props.showUsers.map((map) => {
          return <li key={map.userName}>{`${map.userName} has played ${map.gamesPlayed} games.`}</li>
        })}
      </ul>
    } else {
      usersList = <ul>
        {this.props.showUsers.map((map) => {
          return <li key={map.userName}>{`${map.userName}`}</li>
        })}
      </ul>
    }

    return (
      <React.Fragment>
        <label htmlFor="showgamesplayed">Show games played</label>
        <input id="showgamesplayed" type="checkbox" onClick={this.showGames} />
        <div>UserList</div>
        {usersList}
      </React.Fragment>
    )
  }
}


export default UserList