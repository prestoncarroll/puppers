import React, {Component} from "react";
import API from "../API/api";

class Discover extends Component {
    state = {
        image: "",
        match: false,
        count: 0
    };

    //Make sure the componene mounts, and load a dog image
    componentDidMount(){
        this.loadDog();
    }

    buttonClicked = e => {
        //get the value of the button clicked -- no need to repeat buttons!!
        const button = e.target.attributes.getNamedItem("data-value").value;
        //Copy this.state and make it equivalent to the tempState object
        const tempState = {...this.state};
        //if they clicked the thumbs up button
        if (button === "yes"){
            //Set tempState.match to true or false, given 1/5 chance doggo likes back
            tempState.match = 1 === Math.floor(Math.random() * 5) + 1;

            //Increase match count if the doggo liked, otherwise keep the same
            tempState.count = tempState.match ? tempState.count + 1 : tempState.count;
        } else {
            //If we clicked the "no" button, we did not match
            tempState.match = false;
        }
        this.setState(tempState);
        this.loadDog();
    };

    //Load a dog from the API
    loadDog = () => {
        API.getRandom().then(res => 
            this.setState({
                image: res.data.message
            })
        ).catch(err => console.log(err));
    };

    //What to render in discover new doggos page
    render(){
        return (
            <div>
                <h1>Doggo Pals need Pets</h1>
                <h3>Thumbs up if you like (thumbs down if you are heartless criminal scum)</h3>
                <img src={this.state.image} alt="Pupperino"/>
                <button onClick={this.buttonClicked} data-value="no">No</button>
                <button onClick={this.buttonClicked} data-value="yes">Yes</button>
                <h3>You have freinded {this.state.count} pupperinos thusfar!</h3>
            </div>
        );
    }
}

export default Discover;