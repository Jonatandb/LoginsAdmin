import React from "react";
import Typography from "@material-ui/core/Typography";
import Cabecera from "../Cabecera";
import Busqueda from "../Busqueda";
import LoginList from "../LoginList";
import DialogoDetalles from "../Detalles/DialogoDetalles";
import Pie from "../Pie";
import BotonAgregar from "../Agregar/BotonAgregar";
import DialogoAgregar from "../Agregar/DialogoAgregar";
import exportToXLS from "../../exporter";
import database from "../../database";
import { PendingTasks } from "../../dummyData";

const showLogs = false;

const initalState = {
  searchText: "",
  showDetails: -1,
  currentUser: "",
  showAddDialog: false,
  loginList: [],
  loadingData: false,
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = initalState;
  }

  componentDidMount() {
showLogs && console.log("App -> componentDidMount()" + this.constructor.name);
  }

  handleLogin = () => {
showLogs && console.log("App -> handleLogin()");
    this.setState({currentUser: 'Jonatandb'})
    this.loadData();
  };

  loadData = () => {
showLogs && console.log("App -> loadData()");
    this.setState({loadingData: true});
    database.getLoginsServiceName().then(data => {
      this.setState({loadingData: false, loginList: data});
    });
  }

  handleSearch = e => {
showLogs && console.log("App -> handleSearch()");
    const searchText = e.currentTarget.value.trim().toLowerCase();
    this.setState({
      searchText
    });
  };

  handleShowAddDialog = () => {
showLogs && console.log("App -> handleShowAddDialog()");
    this.setState({ showAddDialog: true });
  };

  handleCloseAddDialog = () => {
showLogs && console.log("App -> handleCloseAddDialog()");
    this.setState({ showAddDialog: false });
  };

  handleShowDetailsDialog = id => {
showLogs && console.log("App -> handleShowDetailsDialog(" + id + ")");
    this.setState({ showDetails: id });
  };

  handleCloseDetailsDialog = () => {
showLogs && console.log("App -> handleCloseDetailsDialog()");
    this.setState({ showDetails: -1 });
  };

  handleOnAdd = newLogin => {
showLogs && console.log("App -> handleOnAdd()");
    this.setState({ loginList: [...this.state.loginList, newLogin] });
  };

  handleExport = () => {
showLogs && console.log("App -> handleExport()");
    this.state.loginList &&
      this.state.loginList.length > 0 &&
      exportToXLS(this.state.loginList);
  };

  handleLogout = () => {
showLogs && console.log("App -> handleLogout()");
    this.setState(initalState);
  };

  render() {
    const itemToShow =
      this.state.showDetails !== -1 &&
      this.state.loginList.filter(i => i.login_id === this.state.showDetails)[0];
    return (
      <div className="App">
        <Cabecera
          onExportClick={this.handleExport}
          onLogoutClick={this.handleLogout}
          onLoginClick={this.handleLogin}
          currentUser={this.state.currentUser}
        />
        <Busqueda onChange={this.handleSearch} value={this.state.searchText} />
        {
          this.state.loadingData ? 
          <Typography variant="h7" color="primary" gutterBottom>
            Cargando datos...
          </Typography>
          : 
          <LoginList
            loginList={this.state.loginList}
            searchedText={this.state.searchText}
            onClick={this.handleShowDetailsDialog}
          />
        }
        {
          itemToShow !== "undefined" &&
          <DialogoDetalles
            open={this.state.showDetails !== -1}
            onClose={this.handleCloseDetailsDialog}
            item={itemToShow}
          />
        }
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
