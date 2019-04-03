import React, { Component } from 'react';

class Present extends Component {
    render() {
        const character = this.props.results;

        return (
            <ul>
                {character.id}. {character.name}
            </ul>
        )
    }
}

export default Present;