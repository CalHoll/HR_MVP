var VoteListEntry = ({vote, user, city, weather}) => {

  // var handleClick = function () { // maybe a voteUp function?
  //   onListClick(vote);
  // }
  return(
    <div>

      <h3>{user}, in {city}, where the current condition is: {weather} </h3>
      <h4> ===============> {vote}</h4>
    </div>
  );
};

window.VoteListEntry = VoteListEntry;
