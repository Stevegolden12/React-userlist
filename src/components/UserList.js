import React, { Component } from 'react';
import '../App.css';

function UserList(props) {
  console.log(props.showUsers)
  return (
    <React.Fragment>
      <div>UserList</div>
      <ul>
        {props.showUsers.map((map) => {
          return <li key={map.userName}>{`${map.userName} has played ${map.gamesPlayed} games.`}</li>
        })}
      </ul>
    </React.Fragment>
  )
}


export default UserList