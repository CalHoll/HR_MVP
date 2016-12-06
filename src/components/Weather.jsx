
      // for loading screen:
      // <img src="./assets/spiffygif_46x46.gif" />

class Weather extends React.Component  {

  handleTextChange(e) {
    var text = e.target.value;
    this.props.handleCityText(text);
  }

  // handleSubmit(e) {
  //   this.props.handleCityChange();
  // }

  render() {
    return (
      <div className="weather-component">
        <div>
          <h3>Current Weather in <b>{this.props.city}: {this.props.weather}</b></h3>

          <input
            onChange={this.handleTextChange.bind(this)}
            type="text"
            name="Name"
          />

          <input
            onClick={this.props.handleSubmitClick}
            type="submit"
            value="Update your City!"
          />

          <br/>
          <br/>
        </div>
      </div>
    )
  }
};

window.Weather = Weather;
