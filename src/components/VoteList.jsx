
class VoteList extends React.Component  {

  handleTextChange(e) {
    var text = e.target.value;
    this.props.handleVoteText(text);
  }

  handleUserChange(e) {
    var user = e.target.value;
    this.props.handleUserText(user);
  }

  handleSubmit(e) {
    this.props.handleSubmitClick();
  }

  render() {
    return (
      <div>
        <br/>
        Name:
        <input
          onChange={this.handleUserChange.bind(this)}
          type="text"
          name="Name"
        /><br/>

        YOUR OPINION:
        <input
          onChange={this.handleTextChange.bind(this)}
          type="text"
          name="opinion"
        />
        <br/>

        <input onClick={this.props.handleSubmitClick} type="submit" value="LET WEATHER KNOW!" />
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VoteList = VoteList;
