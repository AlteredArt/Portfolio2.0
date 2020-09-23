import React, { Component } from 'react';
import '../styles/Quotes.css'

// const API10 = 'https://official-joke-api.appspot.com/random_ten'
const API = 'https://programming-quotes-api.herokuapp.com/quotes/random'

// <hr />
// <h3> Want ten new Quotes?</h3>
// <button onClick={this.fetchQuotes}>Click Here!</button>
//                 { this.state.quotes.map(quote => (<Quote key={quote.id} quote={quote} />))}

const Quote = ({ quote: { en, author } }) => (
    <p style={{ margin: 20 }}>{en} <em style={{ paddingLeft: 20 }}>{author}</em></p>
)
class Quotes extends Component {
    state = { quote: {}, quotes: [] };

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(response => this.setState({ quote: response }))
    }

    // fetchQuotes = () => {
    //     fetch(API10)
    //         .then(response => response.json())
    //         .then(response => this.setState({ quotes: response }))
    // }

    render() {
        return (
            <div>
                <h2>Programming Quote</h2>
                <Quote quote={this.state.quote} />


            </div >
        )
    }
}

export default Quotes;

