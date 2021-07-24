import React, { Component } from 'react'
import './Profile.css'
export default class Profile extends Component {
    links = ["facebook", "twitter", "linkedin"];
    constructor(props) {
        super(props)
        console.log("constructor()")
        this.state = {
            link: "facebook"
        }
    }

    componentDidMount() {
        var i = 0;
        console.log("componentDidMount()")
        setInterval(() => {
            if (i === 3) {
                i = 0;
            }
            else {
                this.setState({ link: this.links[i] });
                i++;
            }
        }

            , 1000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount()")
    }

    render() {
        console.log("render()")
        return (

            <div >
                <img src={this.props.person.imgSrc} alt="" width="200px" height="200px" />
                <h1>{this.props.person.fullName}</h1>
                <h1>{this.props.person.bio}</h1>
                <h1>{this.props.person.proffision}</h1>
                <button style={{ borderRadius: '10px', width: '200px', height: '30px' }}>{this.state.link}</button>

            </div>
        )
    }
}
