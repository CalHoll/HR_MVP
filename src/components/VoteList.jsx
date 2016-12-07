class VoteList extends React.Component  {

  handleTextChange(e) {
    var text = e.target.value;
    this.props.handleVoteText(text);
  }

  handleUserChange(e) {
    var user = e.target.value;
    this.props.handleUserText(user);
  }

  // handleSubmit(e) {
  //   this.props.handleSubmitClick();
  // }

  render() {
    return (
      <div>
        <h3>Name:</h3>
        <input
          onChange={this.handleUserChange.bind(this)}
          type="text"
          name="Name"
        />
      <br/>
      <h3>YOUR IMPORTANT OPINION:</h3>
        <input
          className="opinion"
          onChange={this.handleTextChange.bind(this)}
          type="text"
          name="opinion"
        />
        <br/>

        <input
          onClick={this.props.handleSubmitClick}
          type="submit"
          value="WEATHERVOTE!"
        />
      </div>
    )
  }
};

window.VoteList = VoteList;
