import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "ISMAIL ZAHAR ",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg",
      profession: "Web Developer"
    },
    shows: false ,
    time : 0,
    intervalId: null, 
    timeInterval: 0, 
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeInterval: this.state.timeInterval + 1 })
    }, 1000)
  }

  componentfulUnmount() {
    clearInterval(this.interval)
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows })
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Click Here</button>
        {shows && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Component mounted for {timeInterval} seconds.</p>
      </div>
    )
  }
}

export default App;
