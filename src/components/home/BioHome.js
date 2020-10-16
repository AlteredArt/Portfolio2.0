import React from 'react'

class Bio extends React.Component {
    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {
        let bio = this.state.displayBio ? (
            <div className='generalText' key='1'>
                <p> I code every day while my cats sit on the keyboards and in front of the screens.</p>
                <p> I am currently looking for work in Software Development.</p>
                <p>This is my new portfolio built to show off my Development skills.</p>
                <p style={{ color: 'red', textDecoration: 'underline' }}> With this APP I accomplished:</p>
                <ul className='accomplishedList'>
                    <li>Responsive CSS3 with animations</li>
                    <li>Async Fetching from a Database</li>
                    <li>Class & Functional State & Props</li>
                    <li>Class & Functional Components</li>
                    <li>Maintaining Browser history</li>
                    <li>React nested Components</li>
                    <li>React DOM Manipulation</li>
                    <li>Deployment with Netlify</li>
                    <li>Bundling with WebPack</li>
                    <li>Node JS & NPM</li>
                    <li>Browser History</li>
                    <li>ES6 Javascript</li>
                    <li>React Router</li>
                    <li>React Hooks</li>
                    <li>Bootstrap5</li>
                </ul>
                <button className="btn" onClick={this.toggleDisplayBio}>Read Less</button>
            </div>
        ) : (
                <div key='2'>
                    <button className="btn btn-read" onClick={this.toggleDisplayBio}>Read More</button>
                </div>
            );

        return ([bio])
    }
}

export default Bio;