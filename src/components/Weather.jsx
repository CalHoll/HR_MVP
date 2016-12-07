
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
          <h3>Current Location: <b>{this.props.city}</b></h3>
          <br/>
          <h3>Change Location:</h3>
          <input
            onChange={this.handleTextChange.bind(this)}
            type="text"
            name="Name"
          />
        <br/>
          <input
            className='weatherbutton'
            onClick={this.props.handleSubmitClick}
            type="submit"
            value="Update your Weather!"
          />
        <br/>
          <h3>Current Weather:<b>{this.props.weather}</b></h3>
        </div>
      </div>
    )
  }
};

window.Weather = Weather;
