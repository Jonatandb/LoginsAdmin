import React from "react";
import Cabecera from "../Cabecera";
import Busqueda from "../Busqueda";
import LoginList from "../LoginList";
import DialogoDetalles from "../Detalles/DialogoDetalles";
import Pie from "../Pie";
import BotonAgregar from "../Agregar/BotonAgregar";
import DialogoAgregar from "../Agregar/DialogoAgregar";

import { dummyCredentialsList } from "../../dummyData";
import { PendingTasks } from "../../dummyData";

const initalState = {
  searchText: "",
  showDetails: -1,
  currentUser: "",
  showAddDialog: false,
  loginList: []
};

class App extends React.Component {
  state = {
    searchText: "",
    showDetails: -1,
    currentUser: "",
    showAddDialog: false,
    loginList: []
  };

  handleSearch = e => {
    const searchText = e.currentTarget.value.trim().toLowerCase();
    this.setState({
      searchText
    });
  };

  handleShowAddDialog = () => {
    this.setState({ showAddDialog: true });
  };

  handleCloseAddDialog = () => {
    this.setState({ showAddDialog: false });
  };

  handleShowDetailsDialog = id => {
    this.setState({ showDetails: id });
  };

  handleCloseDetailsDialog = () => {
    this.setState({ showDetails: -1 });
  };

  handleOnAdd = newLogin => {
    this.setState({ loginList: [...this.state.loginList, newLogin] });
  };

  handleExport = () => {
    console.log("App -> handleExport()");
  };

  handleLogin = () => {
    console.log("App -> handleLogin()");
    this.setState({
      currentUser: "Demo",
      loginList: dummyCredentialsList
    });
  };

  handleLogout = () => {
    console.log("App -> handleLogout()");
    this.setState(initalState);
  };

  render() {
    const itemToShow =
      this.state.showDetails !== -1 &&
      this.state.loginList.filter(i => i.id === this.state.showDetails)[0];
    return (
      <div className="App">
        <Cabecera
          onExportClick={this.handleExport}
          onLogoutClick={this.handleLogout}
          onLoginClick={this.handleLogin}
          currentUser={this.state.currentUser}
        />
        <Busqueda onChange={this.handleSearch} value={this.state.searchText} />
        <LoginList
          loginList={this.state.loginList}
          searchedText={this.state.searchText}
          onClick={this.handleShowDetailsDialog}
        />
        <DialogoDetalles
          open={this.state.showDetails !== -1 && itemToShow !== "undefined"}
          onClose={this.handleCloseDetailsDialog}
          item={itemToShow}
        />
        <DialogoAgregar
          open={this.state.showAddDialog}
          onClose={this.handleCloseAddDialog}
          onAdd={this.handleOnAdd}
        />
        <BotonAgregar onClick={this.handleShowAddDialog} />
        <Pie />
        <PendingTasks currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
