
import React, { Component } from "react";
import axios from "axios";
import "./FavoritesList.css"

class FavoritesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favJokes: [],
            userInput: "",
        };

        this.updateJoke = this.updateJoke.bind(this);
        this.editFavorite = this.editFavorite.bind(this)
        
    }
    componentDidMount() {
        axios.get("/api/jokes").then(response => this.setState({favJokes : response.data }))
    }

    updateJoke(id){
        this.props.edit(this.state.userInput, id)
        this.setState({
            userInput: ""
        })
    };

    editFavorite(value){
        console.log(value)
        this.setState({userInput : value})
    }

    render(){
        // console.log(this.state.favJokes);
        // console.log(this.state.userInput)
        let favorites = this.props.favJokes.map((e,i)=> (
            <div key={e.id} className="fav-item">
            <p className="joke">{e.joke}</p>
            <div className = "editing">
            <input className="inputfield" value={this.state.userInput} onChange={e => this.editFavorite(e.target.value)}/>
            <button className="updatejoke" onClick={() => this.updateJoke(e.id)}>
           UPDATE</button>
           <button className="deletebutton" onClick={() => this.props.delete(e.id)}>DELETE</button>
           </div>
            </div>

        ));
    
        return(
           <div className="favorites">
            {favorites}
        
           </div> 
           
        );
    };
}
export default FavoritesList;

