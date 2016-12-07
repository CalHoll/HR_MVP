class App extends React.Component {
  constructor(props) {
    super(props)



    this.state = {
      City: 'London',
      CurrentCity: 'London',
      currentWeather: '',
      weatherForecast: ['Rain','Drizzle','Fog'],
      VoteText: 'awww man this weather is... unpleasant!',
      VoteList: [],
      Username: 'Anonymous'
    }



    var cb = (function (data) {
        console.log('weather data received');
        console.log(JSON.stringify(data,null, 2));
        this.setState({
          currentWeather: data.weather[0].main,
        });
    }).bind(this);
    this.getWeather(this.state.city, cb);

  }

  handleSubmitClick () {
    this.setState({
      VoteList: this.state.VoteList.concat({
        text: this.state.VoteText,
        user: this.state.Username,
        city: this.state.City,
        weather: this.state.currentWeather
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

  handleCityChange () {
    // city state should already be changed by handle city text
    // so all that is needed is to refresh the getweather.
    // this.setState({
    //   City: this.state.CurrentCity
    // });

    var cb = (function (data) {
        console.log('weather data received');
        console.log(JSON.stringify(data,null, 2));
        this.setState({
          currentWeather: data.weather[0].main,
        });
    }).bind(this);
    this.getWeather(this.state.City, cb);
    // console.log("MADE IT INTO THE HANDLE CITY CHANGE FUNCTION")
  }

  handleCityText (text) {
    this.setState({
      City: text
    })
  }

  getWeather(city, callback) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    var API_KEY = "d94bcd435b62a031771c35633f9f310a"

    $.ajax({
      dataType: "jsonp",
      url: url + this.state.City + '&APPID=' + API_KEY,
      jsonCallback: 'jsonp',
      data: { q: city },
      cache: false,
      success: function (data) {

        callback(data);
      },
      error: function(data) {
        alert('could not find that location!')
      }
    });
  }

  render() {


    return (
      <div>
        <div>
          <Weather
            weather = {this.state.currentWeather}
            city = {this.state.City}
            handleSubmitClick = {this.handleCityChange.bind(this)}
            handleCityText = {this.handleCityText.bind(this)}
          />
        </div>

        <div>
          <VoteList
            votes = {this.state.VoteList}
            username = {this.state.Username}
            handleSubmitClick = {this.handleSubmitClick.bind(this)}
            handleVoteText = {this.handleVoteText.bind(this)}
            handleUserText = {this.handleUserText.bind(this)}
          />

          <h2> VERY IMPORTANT OPINIONS:</h2>
          { this.state.VoteList.map( vote =>
            <VoteListEntry
              vote = {vote.text}
              user = {vote.user}
              city = {vote.city}
              weather = {vote.weather}
               />
          )}

        </div>
      </div>
    );
  }
};

window.App = App;
