import React, {Component} from "react";
import axios from "axios";
import NextQuote from '../NextQuote/NextQuote';

class MainFeature extends Component {
    constructor(props){
        super(props);
        this.state={
            quote:'',
            favorites: [],
        }
        this.addFavorite=this.addFavorite.bind(this);
    }

    componentDidMount(){
        this.randomQuote();
        
    }

    randomQuote(){
        axios.get("/api/quotes/random")
        .then(response => { 
            console.log("get random response:", response.data);
            this.setState({ quote: response.data.value});
        })
        .catch(() => this.randomQuote());
    }

    addFavorite(){
        let {quote, favorites} =this.state;
        axios.post("/api/quotes", { quote: this.state.quote})
        .then(response => {
            // console.log("add to favorite", response)
            this.setState({ favorites: response.data})
        });
        this.randomQuote();
    }

    render(){
        const {quote, favorites} = this.state;
        console.log(favorites);

        return(
            <div>
                <header>Best App Known to Man</header>
                <div className = "main">
                    <div>{quote}</div>
                        <p> testing this from MainFeature.js</p>
                        <h1>test on more</h1>
                    <NextQuote randomQuote={()=>this.randomQuote()} />
                </div>
            </div>
        )
    }
}

export default MainFeature;