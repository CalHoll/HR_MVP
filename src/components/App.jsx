//unsure if necessary:

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: 'St. Johns, NL',
      currentWeather: 'Rain, Drizzle, Fog',
      weatherForecast: ['Rain','Drizzle','Fog'],
      VoteText: 'awww man this weather suxxxxxx',
      VoteList: [],
      Username: 'Anonymous'
    }
  }

  // getWeather() {
  //   // Get the data from the cache if possible
  //   // if (currentWeather[currentCity]) {
  //   //     this.updateData(); // need to implement a data update
  //   // }
  //   // else {
  //       // Request new data to the API
  //       // Api.get(cities[currentCity])
  //       //     .then(function(data) {
  //       //         citiesWeather[currentCity] = data;
  //       //         this.updateData();
  //       // }.bind(this));
  //   // }
  // }

  // getWeather(searchedCity = this.state.city) {
  //   fetchWeather(searchedCity)
  //     .then((response) => {

  //       console.log(response);

  //       var weather = _.map(response.list, (dayWeather) => {
  //         return {
  //           dayWeather,
  //           country: response.city.country,
  //           city: response.city.name
  //         }
  //       });

  //       this.setState({
  //         weekWeather: weather,
  //         city: this.state.searchedCity,
  //       });
  //     })
  // }

  handleSubmitClick () {
    this.setState({
      VoteList: this.state.VoteList.concat({
        text: this.state.VoteText,
        user: this.state.Username
      })
    })
  }

  handleVoteText (vote) {
    this.setState({
      VoteText: vote
    })
  }

  handleUserText (user) {
    this.setState({
      Username: user
    })
  }

  render() {
    return (
      <div>
        <div>
          <Weather weather = {this.state.currentWeather} />
        </div>

        <div>
          <VoteList
            votes = {this.state.VoteList}
            username = {this.state.Username}
            handleSubmitClick = {this.handleSubmitClick.bind(this)}
            handleVoteText = {this.handleVoteText.bind(this)}
            handleUserText = {this.handleUserText.bind(this)}
          />
          <br/>
          <br/>
          <p> VERY IMPORTANT OPINIONS:</p>
          { this.state.VoteList.map( vote => {
            return <VoteListEntry
                      vote = {vote.text}
                      user = {vote.user}
                    />
            })}
        </div>
      </div>
    );
  }
};

window.App = App;
// export default App;
