import './App.css';
import React from 'react';

//transform the App.js into a class-based component
class App extends React.Component {
  //the App Component constructor
  constructor(props) {
    super(props)
    //the App state {Person and show}
    this.state = {
      Person: {
        fullName: "Marwen Bengayed",
        bio: "XD",
        imgSrc: "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/241351723_3038005423113931_7380245766836537755_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6wBkSx10Z-kAX-UrYVP&_nc_ht=scontent.ftun4-2.fna&oh=00_AfBOc-NCHu5B3r0qFlpbMg1uBwU86m1mr3ToMNZPZoEkow&oe=6550B5C5",
        profession: "Full Stak JS Dev"
      },
      show: true,
      count: 0
    };
  }

  toggleState = () => {
    this.setState({
      // togle the show state between true and false
      show: !this.state.show
    });
  }

  componentDidMount() {
    // w use setInterval to calculate the time interval when component is mounting
    this.timerID = setInterval(() => {
      this.setState({
        count: this.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    // w clear the timerID when component is Unmounting
    clearInterval(this.timerID);
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleState}>Click me</button> {/* toggleState is a props function */}
          <div>Time interval: <span className="interval">{this.timerID ? this.timerID : "--"}</span></div>
          {
            this.state.show ?
              /* if show state is true (Person profile appear)*/
              <div>
                <img src={this.state.Person.imgSrc} className="App-logo" alt="logo" />
                <div>
                  Full Name: <span>{this.state.Person.fullName}</span>
                </div>
                <div>
                  Bio: <span>{this.state.Person.bio}</span>
                </div>
                <div>
                  Profession: <span>{this.state.Person.profession}</span>
                </div>
              </div>
              :
              <div>
                {/* if show state is false */}
              </div>
          }
        </header>
      </div>
    );
  }
}

export default App;