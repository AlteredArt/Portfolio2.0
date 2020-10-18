import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const API = 'https://programming-quotes-api.herokuapp.com/quotes/random'

const Quote = ({ quote: { en, author } }) => (
    <p className='generalText'>{en} <em>{author}</em></p>
)




class QuotesHome extends Component {
    state = { quote: {}, quotes: [] };

    componentDidMount() {
        this.fetchQuote()
        Aos.init({ duration: 3000 });
    }

    fetchQuote = () => {
        fetch(API)
            .then(response => response.json())
            .then(response => this.setState({ quote: response }))
    }

    render() {
        return (
            <div >
                <h2 className="title-home">Your Quote!</h2>
                <a href="/quotespage"><button className="btn-home">MORE QUOTES</button></a>
                <Quote quote={this.state.quote} />
                <hr data-aos='slide-right' />
            </div>
        )
    }
}

export default QuotesHome;

