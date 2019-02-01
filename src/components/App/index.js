import React from 'react';
import Typography from '@material-ui/core/Typography';
import Cabecera from 'components/Cabecera';
import Busqueda from 'components/Busqueda';
import LoginList from 'components/LoginList';
import DialogoDetalles from 'components/DialogoDetalles';
import Pie from 'components/Pie';
import BotonAgregar from 'components/Agregar/BotonAgregar';
import DialogoAgregar from 'components/Agregar/DialogoAgregar';
import exportToXLS from '_base/_utils/exporter';
import database from '_base/database';
import { PendingTasks } from '_base/_utils/dummyData';

const initalState = {
    searchText: '',
    showDetails: -1,
    currentUser: '',
    showAddDialog: false,
    loginList: [],
    loadingData: false,
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = initalState;
    }

    handleLogin = () => {
      this.setState({currentUser: 'demo'});
      this.loadData();
    }

    loadData = () => {
      this.setState({loadingData: true});
      database.getLoginsServiceName().then(data => {
        this.setState({loadingData: false, loginList: data});
      });
    }

    handleSearch = e => {
      const searchText = e.currentTarget.value.trim().toLowerCase();
      this.setState({
        searchText
      });
    }

    handleShowAddDialog = () => {
      this.setState({ showAddDialog: true });
    }

    handleCloseAddDialog = () => {
      this.setState({ showAddDialog: false });
    }

    handleShowDetailsDialog = id => {
      this.setState({ showDetails: id });
    }

    handleCloseDetailsDialog = () => {
      this.setState({ showDetails: -1 });
    }

    handleOnAdd = newLogin => {
      this.setState({ loginList: [...this.state.loginList, newLogin] });
    }

    handleExport = () => {
      this.state.loginList &&
        this.state.loginList.length > 0 &&
        exportToXLS(this.state.loginList);
    }

    handleLogout = () => {
      this.setState(initalState);
    }

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
                        <Typography variant="h6" color="primary" gutterBottom>
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
                    itemToShow !== 'undefined' &&
          <DialogoDetalles
              open={this.state.showDetails !== -1}
              onClose={this.handleCloseDetailsDialog}
              item={itemToShow}
          />
                }
                <BotonAgregar onClick={this.handleShowAddDialog} />
                <DialogoAgregar
                    open={this.state.showAddDialog}
                    onClose={this.handleCloseAddDialog}
                    onAdd={this.handleOnAdd}
                />
                <Pie />
                <PendingTasks currentUser={this.state.currentUser} />
            </div>
        );
    }
}

export default App;
