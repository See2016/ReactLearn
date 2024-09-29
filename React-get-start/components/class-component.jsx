import { Component } from "react";

class ClassBase extends Component {
    state = {
        showText: false,
        changeColor: false
    }
    hClick = () => {
        console.log("btn click");
        //  --------- no recmmend
        // this.state.showText = !this.state.showText

        const {showText, changeColor} = this.state
        this.setState({
            showText: !showText,
            changeColor: !changeColor
        })
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showText: false
    //     }
    // }
    render() {
        console.log(this.state)
        const {showText} = this.state
        return (
            <div>
                {showText ?  <h3 style={{color: changeColor ? "red" : 'black'}}>
                    class base component
                    </h3> : null}
                {/* {showText ?  <h3>class base component</h3> : null} */}
                {/* {this.state.showText ?  <h3>class base component</h3> : null} */}
                {/* <h3>class base component</h3> */}
                <button onClick={this.hClick}>togle text</button>
            </div>
        )
    }
}
export default ClassBase