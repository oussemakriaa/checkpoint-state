import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import Profile from './Components/Profile/Profile';
import { Col, Row } from 'react-bootstrap';

export default class App extends Component {
  state={
    Person :{fullName:"oussema kriaa",bio:"homme",imgSrc:"./oussema.jpg",proffision:"full stack dev"},
    shows:false
  }
  handelClick=()=>{this.setState({ shows:!this.state.shows });}
  render() {
    return (
      <Row>
      <Col sm={4}></Col>
      <Col sm={4} style={{display:'inline', backgroundColor: '#eee',border:'solid',paddingTop:'10px',paddingBottom:'10px',textAlign:'center',borderRadius:'30px'}}>
        <button onClick={this.handelClick} style={{backgroundColor:'black',color:'white',borderRadius:'10px',width:'200px',height:'30px'}}>{(this.state.shows)? "exit":"shows"}</button>
        {(this.state.shows)? <Profile person={this.state.Person}/> :""}
      </Col>
      <Col sm={4}></Col>
      </Row>
    )
  }
}
