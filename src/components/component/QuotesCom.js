import React, { Component } from 'react';
//aos animation
import Aos from 'aos';
import 'aos/dist/aos.css'




//quote render
const API = 'https://programming-quotes-api.herokuapp.com/quotes/random';

const Quote = ({ quote: { en, author } }) => (
    <h1 className='generalText'>{en} <em>{author}</em></h1>
)

//quotes for home page
export default class QuotesHome extends Component {
    state = { quote: {}, quotes: [] };

    //aos animation
    componentDidMount() {
        this.fetchQuote()
        Aos.init({ duration: 3000 });
    }


    //fetching single random quotes
    fetchQuote = () => {
        fetch(API)
            .then(response => response.json())
            .then(response => this.setState({ quote: response }))
    }

    render() {
        return (
            <div >
                <h2 className="title-home">Your Quote!</h2>
                <a href="/quotes"><button className="btn-more" style={{ marginBottom: '2%' }}>MORE QUOTES</button></a>
                <Quote quote={this.state.quote} />
                <hr data-aos='slide-right' />
            </div>
        )
    }
}





//quotes for quote page
const APIMulti = 'https://programming-quotes-api.herokuapp.com/quotes/page/2';
export class QuotesPage extends Component {
    state = { quote: {}, quotes: [] };
    //fetch quotes
    componentDidMount() {
        this.fetchQuotes()
    }
    //fetch multiple quotes
    fetchQuotes = () => {
        fetch(APIMulti)
            .then(response => response.json())
            .then(response => this.setState({ quotes: response }))
    }

    render() {
        return (
            <div>
                <h2 className="title-page">Programming Quotes!</h2>
                {
                    this.state.quotes.slice(0, 8).map(quote => {
                        return (
                            <div className='generalText'>
                                <p key={quote.id}>{quote.en} <em>{quote.author}</em></p>
                                <hr />
                            </div>
                        )
                    })
                }
                <a href="/home"><button className="btn-page">HOME</button></a>
            </div >
        )
    }
}





