var VoteListEntry = ({vote, user}) => {

  // var handleClick = function () { // maybe a voteUp function?
  //   onListClick(vote);
  // }
  return(
    <div>
      <h4>{user}: {vote}</h4>
    </div>
  );
};

window.VoteListEntry = VoteListEntry;
