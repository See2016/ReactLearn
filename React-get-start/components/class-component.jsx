import { Component } from "react";

class ClassBase extends Component {
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };

  hClick = () => {
    console.log("btn click");
    //  --------- no recmmend
    // this.state.showText = !this.state.showText

    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };
  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         showText: false
  //     }
  // }

  // componentDidMount()
  componentDidMount() {
    console.log("this is call first time on page load");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  // componentDidUpdate()
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  // componentWillUnmount()
  componentWillUnmount() {
    console.log("component is getting unmounted");
  }
  render() {
    // console.log(this.state);
    const { showText, changeColor, count, changeCountStyle } = this.state;
    // const { showText } = this.state;
    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "red" : "black" }}>
            class base component
          </h3>
        ) : null}
        {/* {showText ?  <h3>class base component</h3> : null} */}
        {/* {this.state.showText ?  <h3>class base component</h3> : null} */}
        {/* <h3>class base component</h3> */}
        <button onClick={this.hClick}>togle text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3
          style={{
            color: changeCountStyle ? "blue" : "black",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is {count}
        </h3>
      </div>
    );
  }
}
export default ClassBase;
