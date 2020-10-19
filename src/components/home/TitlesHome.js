//done renders the titles animations
import React, { Component } from 'react';


//titles array
const TITLES = ["a Artist!", " a Cat Dad!", "Adventurous!"];

export default class Titles extends Component {
    state = { titleIndex: 0, fadeIn: true }

    //sets timeout on title switch
    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }

    //resets the title animation
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    //animates the titles
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    }

    //renders the titles
    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];
        return (
            <h6 className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</h6>
        )
    }
}
