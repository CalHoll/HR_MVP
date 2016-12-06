//unsure if necessary:

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: 'St. Johns, NL',
      currentWeather: 'Rain, Drizzle, Fog',
      weatherForecast: ['Rain','Drizzle','Fog'],
      VoteText: 'awww man this weather suxxxxxx',
      VoteList: ['Who made this app?', 'is this really a thing?', 'I like goldfish'],
      Username: ''
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
      VoteList: this.state.VoteList.concat(this.state.VoteText)
    })
  }

  handleVoteText (vote) {
    this.setState({
      VoteText: vote
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
          />
          <br/>
          <br/>
          <p> VERY IMPORTANT OPINIONS:</p>
          { this.state.VoteList.map( vote => {
          return <VoteListEntry vote = {vote} />
          })}

        </div>
      </div>
    );
  }
};

window.App = App;
// export default App; 