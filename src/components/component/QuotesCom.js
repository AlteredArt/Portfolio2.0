import React, { Component } from 'react';
import '../../styles/components/Quotes.css'

const API = 'https://programming-quotes-api.herokuapp.com/quotes/random'

const Quote = ({ quote: { en, author } }) => (
    <p>{en} <em>{author}</em></p>
)
class QuotesHome extends Component {
    state = { quote: {}, quotes: [] };

    componentDidMount() {
        this.fetchQuote()
    }

    fetchQuote = () => {
        fetch(API)
            .then(response => response.json())
            .then(response => this.setState({ quote: response }))
    }

    render() {
        return (
            <div>
                <h2 className="title">Your Quote! <a href="/quotespage"><button className="btn btn-dark btn-text" id="navtext">MORE QUOTES</button></a></h2>
                <Quote quote={this.state.quote} />
                <hr />
            </div>
        )
    }
}

export default QuotesHome;

