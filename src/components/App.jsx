// import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWeather: {},
      Voting: []
    }
  } 

  getWeather(query) {  
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    // needs to set some state of a component on main page
  }

  render() {
    return (
      <div>
        <div>
          this is a placeholder for the weather display.
          <Weather // weather = {this.state.currentWeather} 
          />
        </div>
        <div>
          THIS IS WHERE VOTING WILL GO
          <Voting
            // user = {this.state.user} // needs to display current user
            // comment = {this.handleListClick.bind(this)}
          />
        </div>
      </div>
    );
  }
};

window.App = App;
// export default App;