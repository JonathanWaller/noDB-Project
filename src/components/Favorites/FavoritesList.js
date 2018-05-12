import React, {Component} from "react";
import axios from "axios";


class FavoritesList extends Component{
    constructor(props){
        super(props);
        this.state={
            favorites: [],
            userInput: '',
        }

        this.updateJoke = this.updateJoke(bind);
        this.editFavorite = this.editFavorite.bind(this)
    }
    componentDidMount(){
        axios.get("/api/quotes").then(response => 
        this.setState({favorites: response.data}))
    }

    render(){
        // console.log(this.state.favorites);
        // console.log(this.state.userInput);
        let myFavorites = this.props.favJokes.map((e,i)=>(
            <div key={e.id}>
                <p>{e.quote}</p>
                <div>
                    <input value={this.state.userInput} onChange={e => this.editFavorite(e.target.value)} />
                    <button onClick={() => this.updateQuote(e.id)}>Update Here</button>
                    <button onClick={()=>this.props.delete(e.id)}>Delete Here </button>

                </div>
            </div>       
        ));

        return(
            <div>
            {this.props.favorites}
            {myFavorites}
            </div>
        )
    }

}

export default FavoritesList;