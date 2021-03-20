import React from 'react'

class EventManager extends React.Component {

    clickHandler() {
        alert('I am clicked');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>I am class</button>
            </div>
        );
    }
}

export default EventManager;