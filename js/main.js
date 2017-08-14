
class App extends React.Component {
  render() {
    return (
      <div className="mainwrapper">
        <VisHeader />
        <VisMain />
      </div>
      );
}};

var towns = ["Odessa","Odessa","Odessa","Odessa","Odessa","Odessa","Odessa",]
var Client = {
      location : "odessa",
  };

class VisHeader extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">

        </div>
      </header>
      );
  }
};

class VisMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ci_location_list_isOpened: true };
  }

  vis_ci_location_list(){
    if (this.state.ci_location_list_isOpened)
    {
      const listItems = towns.map((elem, key) =>
        <li key={key}>{elem}</li>
      );
      return(
        <div className="ci_location_list" >
          <ul>
          {
            listItems
          }
          </ul>
        </div>
      );
    }}

  render() {
    return (
      <main>
        <div className="common_info">
          <div className="ci_location">
            location: {Client.location}
            <a href="#">change</a>
            {this.vis_ci_location_list()}
          </div>
        </div>
      </main>
      );
  }
};


ReactDOM.render(
  <App />,
  document.getElementById('react_engine')
);
