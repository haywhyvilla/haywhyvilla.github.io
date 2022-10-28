class WelcomeBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      apppVersion: "",
    };
  }

  render() {
    return <h2>Hello {this.state.name || "Friend"}! Welcome Back.</h2>;
  }
}
