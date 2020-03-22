import React from "_base/database/MySQL/react";
import axios from "_base/database/MySQL/axios";

class TestMysql extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      data: null,
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const url = "https://jonatandb01.000webhostapp.com/";
    axios
      .get(url)
      .then(result =>
        this.setState({
          data: result.data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    this.state.error &&
      console.log("render(): this.state.error = ", this.state.error);
    console.log(this.state.error);
    this.state.data &&
      console.log("render(): this.state.data = ", this.state.data);

    if (this.state.isLoading) {
      return <p>Cargando...</p>;
    }

    return (
      <>
        <h3>TestMysql:</h3>
        {this.state.error && <h2>Error: {JSON.stringify(this.state.error)}</h2>}
      </>
    );
  }
}
