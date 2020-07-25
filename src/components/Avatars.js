import React, {Component} from "react";

class Avatars extends Component {

    constructor(props) {
        super();
        this.state = {
            avis: []
        }
    }

    componentWillMount() {
        for (let i = 2; i < 60; i++) {
            this.state.avis.push(i.toString());
        }
    }

    render() {
        return (
            <div className='avatars'>
                {this.state.avis.map((avi) => (
                    <img src={require("../images/icons/" + "0" + avi + ".png")} />
                ))}
            </div>
        );
    }
}
export default Avatars;