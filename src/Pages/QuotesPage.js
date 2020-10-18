import React, { Component } from 'react';
import '../Pages/QuotesPage'


const API = 'https://programming-quotes-api.herokuapp.com/quotes/page/2'

class QuotesPage extends Component {
    state = { quote: {}, quotes: [] };

    componentDidMount() {
        this.fetchQuotes()
    }

    fetchQuotes = () => {
        fetch(API)
            .then(response => response.json())
            .then(response => this.setState({ quotes: response }))
    }

    render() {
        return (
            <div>
                <h2 className="title-page">Programming Quote Page!</h2>
                <br />
                {
                    this.state.quotes.slice(0, 8).map(quote => {
                        const { en, author } = quote;
                        return (
                            <div className='generalText'>
                                <p key={quote.id}>{en} <em>{author}</em></p>
                                <hr />
                            </div>
                        )
                    })
                }
                <a href="/homepage"><button className="btn">HOME</button></a>
            </div >
        )
    }
}

export default QuotesPage;

