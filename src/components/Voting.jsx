var Voting = ({voting}) => (
  // !voting.id ? <img src="./assets/spiffygif_46x46.gif">Please wait...</img> :
  <div className="voting-component">
    VOTING COMPONENT GOES HERE in /Voting.JSX
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// Voting.propTypes = {
//   Voting: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Voting = Voting; 