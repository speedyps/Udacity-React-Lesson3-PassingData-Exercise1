import React, { Component } from 'react'

class UserList extends Component {
	render ()  {
      console.log('props', this.props)
      return (
      <ol className="user-list">
        {this.props.profiles.map((profile) => (
          <li key={profile.id} className="profile-list-item">
            <div className="profile-details">
              <p>{this.props.users[profile.userID].name}'s favourite movie is {this.props.movies[profile.favoriteMovieID].name}</p>
            </div>
          </li>
        ))}
      </ol>
      )
    }
}

export default UserList