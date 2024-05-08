import React, { Component } from 'react'
import Login from './components/Login';
import Student from './components/Student';
import Register from './components/Register';

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            isLogin : true,
            age : 28
        }
    }
    
    render() {
        console.log("renderr",this.state.isLogin);
    
        return (
            <>
                <button type="button" onClick={()=>this.setState({...this.state,isLogin:true})}>Login</button>
                <button type="button" onClick={()=>this.setState({...this.state,isLogin:false})}>Register</button>
                {/* <Student /> */}
                {this.state.isLogin ? <Login isLogin={true} /> : <Register />}

            </>
        )
    }
}
