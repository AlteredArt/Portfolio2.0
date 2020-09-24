import React, { Component } from 'react';
import '../../styles/Title.css'

const TITLES = ['Software Engineer!', "Artist!", "Cat Dad!", "Adventure Seeker!"];

class Titles extends Component {
    state = { titleIndex: 0, fadeIn: true }

    componentDidMount() {
        // console.log('component did mount')
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }

    UNSAFE_componentWillUnmount() {
        // console.log('comp will unmount')
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    }
    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];


        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'} style={{ color: "greenyellow" }}>I am a {title}</p>
        )
    }
}

export default Titles