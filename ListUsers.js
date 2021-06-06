import React, { Component } from 'react'

class ListUsers extends Component {
  render() {
    console.log('props', this.props)

    return (
      <ol className="user-list">
        {this.props.profile.map((profile) => (
          <li key={profile.id} className="profile-list-item">
            <div className="profile-details">
              <p>{profile.id}</p>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListUsers