class App extends React.Component {
  constructor(props) {
    super(props)



    this.state = {
      city: 'London',
      currentWeather: 'ITS SNOWING OF COURSE - Please wait for Summer...',
      weatherForecast: ['Rain','Drizzle','Fog'],
      VoteText: 'awww man this weather suxxxxxx',
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

  getWeather(city, callback) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    var API_KEY = "d94bcd435b62a031771c35633f9f310a"

    $.ajax({
      dataType: "jsonp",
      url: url + city + '&APPID=' + API_KEY,
      jsonCallback: 'jsonp',
      data: { q: city },
      cache: false,
      success: function (data) {

        callback(data);
      }
    });
  }

  render() {


    return (
      <div>
        <div>
          <Weather
            weather = {this.state.currentWeather}
            city = {this.state.city}
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

          <br/> <br/>

          <p> VERY IMPORTANT OPINIONS:</p>
          { this.state.VoteList.map( vote =>
            <VoteListEntry vote = {vote.text} user = {vote.user} />
          )}

        </div>
      </div>
    );
  }
};

window.App = App;
