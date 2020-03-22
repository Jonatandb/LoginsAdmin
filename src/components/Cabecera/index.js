/* eslint-disable react/prop-types */
import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  subtitle: {
    marginTop: 2,
    marginBottom: 0
  }
};

class Cabecera extends React.Component {
  state = {
    anchorEl: null,
    currentUser: ""
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOnExportClick = () => {
    this.props.onExportClick();
    this.handleClose();
  };
  handleOnLogoutClick = () => {
    this.props.onLogoutClick();
    this.handleClose();
  };
  handleOnLoginClick = () => {
    this.props.currentUser !== ""
      ? this.props.onLogoutClick()
      : this.props.onLoginClick();
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={this.state.anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleOnExportClick}>Exportar</MenuItem>
              <MenuItem onClick={this.handleOnLogoutClick}>
                Cerrar sesión
              </MenuItem>
            </Menu>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              LoginsAdmin
            </Typography>
            <Button color="inherit" onClick={this.handleOnLoginClick}>
              {this.props.currentUser !== ""
                ? this.props.currentUser
                : "Acceder"}
            </Button>
          </Toolbar>
          <Typography gutterBottom align="center" className={classes.subtitle}>
            Administrador de credenciales simple y dinámico
          </Typography>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Cabecera);
