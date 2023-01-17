import React, {Component} from 'react';
import axios from "axios";

class Update extends Component {
    constructor() {
        super();
        this.state = {
            userdata1 : [],
        }
    }
    Submit(e) {
        axios.post("/api/Update_Selectget", null, {params:{
                member_no : document.getElementById("inputMemberNO1").value,
            }})
            .then((res)=>{
                console.log(res.data)
                this.setState({userdata1 : res.data})})
        e.preventDefault()
    }

    render() {
        return (
            <div id='container3'>
                <h1>Update</h1>
                <form onSubmit={this.Submit}>
                    <input type="text" id = "inputMemberNO1" />
                    <input type="submit" value= "Submit" />
                </form>
                {this.state.userdata1[0]}
                {this.state.userdata1[1]}
                {this.state.userdata1[2]}
            </div>
        );
    }
}

export default Update;