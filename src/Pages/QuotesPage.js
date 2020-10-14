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
                <br />
                <br />
                <h2 className="title">Quote Page! <a href="/"><button className="btn btn-dark btn-text" id="navtext">HOME</button></a></h2>

                <br />
                {
                    this.state.quotes.map(quote => {
                        const { en, author } = quote;
                        return <p key={quote.id}>{en} <em>{author}</em></p>
                    })
                }
                <hr />

            </div >

        )
    }
}

export default QuotesPage;

