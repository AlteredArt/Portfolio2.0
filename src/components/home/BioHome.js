import React from 'react'

class Bio extends React.Component {
    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {
        let bio = this.state.displayBio ? (
            <div style={{ color: "white" }}>
                <p> I code every day while my cats sit on the keyboards and in front of the screens.</p>
                <p> I am currently looking for work in the technical felid. This is my new portfolio built to show off my Javascript, ReactJs, Webpack, Babel, Bootstrap, and DOM manipulation skills.</p>
                <p> With this React APP I accomplished:</p>
                <ul>
                    <li>Class & Functional State & Props</li>
                    <li>Class & Functional Components</li>
                    <li>Maintaining Browser history</li>
                    <li>React nested Components</li>
                    <li>Building and Deployment</li>
                    <li>React DOM Manipulation</li>
                    <li>Pulling from a Database</li>
                    <li>Responsive CSS3</li>
                    <li>Node JS & NPM</li>
                    <li>Async Fetching</li>
                    <li>ES6 Javascript</li>
                    <li>React Router</li>
                    <li>React Hooks</li>
                    <li>Bootstrap5</li>
                    <li>WebPack</li>
                </ul>

                <button className="btn btn-danger" onClick={this.toggleDisplayBio}>Read Less</button>
            </div>
        ) : (
                <div>
                    <button className="btn btn-dark" id="navtext" onClick={this.toggleDisplayBio}>Read More</button>
                </div>
            );

        return (
            [bio]

        )
    }
}

export default Bio;