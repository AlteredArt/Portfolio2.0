import React from 'react'

class Bio extends React.Component {
    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {
        let bio = this.state.displayBio ? (
            <div>
                <p> I code every day while my cats sit on the keyboards and in front of the screens.</p>
                <p> I am currently looking for work in the technical felid. This is my new portfolio built to show off my Javascript, ReactJs, Webpack, Babel, Bootstrap, and DOM manipulation skills.</p>
                <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
        ) : (
                <div>
                    <button onClick={this.toggleDisplayBio}>Read More</button>
                </div>
            );

        return (
            [bio]
        )
    }
}

export default Bio;