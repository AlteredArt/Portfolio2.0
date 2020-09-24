import React, { Component } from 'react';
import '../../styles/Quotes.css'

// const APIR = 'https://programming-quotes-api.herokuapp.com/quotes/?_limit=5'
// <h3> Want a new Quote?</h3>
//                 <button onClick={this.fetchQuote}>Click Here!</button>
// { this.state.quotes.map(quote => (<Quote key={quote.id} quote={quote} />)) }

const API = 'https://programming-quotes-api.herokuapp.com/quotes/random'


const Quote = ({ quote: { en, author } }) => (
    <p className='text' style={{ margin: 20 }}>{en} <em style={{ paddingLeft: 20 }}>{author}</em></p>
)
class Quotes extends Component {
    state = { quote: {}, quotes: [] };

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(response => this.setState({ quote: response }))
    }

    UNSAFE_componentDidUpdate() {
        // console.log('component did update')
        // setTimeout(this.fetchQuote(), 10000)
    }

    // animateQuote = () => {
    //     this.quoteInterval = setInterval(() => {
    //         const quoteIndex = (this.state.quoteIndex + 1) % quote.length;
    //         this.setState({ quoteIndex, fadeIn: true });
    //         this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    //     }, 4000);
    // }
    fetchQuote = () => {
        fetch(API)
            .then(response => response.json())
            .then(response => this.setState({ quote: response }))
    }

    render() {
        return (
            <div>
                <h2 className="title">Highlighted Quote!</h2>
                <Quote quote={this.state.quote} />
                <br />
                <a href="/quotes"><button className="btn btn-dark" id="navtext">MORE QUOTES</button></a>
                <br />
            </div >

        )
    }
}

export default Quotes;

