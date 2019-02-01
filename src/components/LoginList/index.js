/* eslint-disable react/prop-types */
import React from 'react';
// import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from "@material-ui/core/Collapse";

// https://material.io/tools/icons/?style=baseline
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";

import OpenInNewIcon from '@material-ui/icons/OpenInNew';
// import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    },
    capitalize: {
        textTransform: 'capitalize'
    }
});

class LoginList extends React.Component {
    // state = {
    //   open: true
    // };

    // handleClick = () => {
    //   this.setState(state => ({ open: !state.open }));
    // };

  makeHeader = text => <ListSubheader component="div">{text}</ListSubheader>;

  makeRow = (item, includeIcon = true) => (
      <React.Fragment key={item.login_id}>
          <ListItem button>
              {includeIcon && (
                  <ListItemIcon>
                      <OpenInNewIcon />
                  </ListItemIcon>
              )}
              <ListItemText
                  inset
                  primary={item.service_name}
                  className={this.props.classes.capitalize}
                  onClick={() => this.props.onClick(item.login_id)}
              />
          </ListItem>
      </React.Fragment>
  );

  render() {
      const { loginList, searchedText, classes } = this.props;
      const filterByServiceName = item => {
          return item.service_name
              .trim()
              .toLowerCase()
              .includes(searchedText);
      };

      // Ya que no traigo mas todos los datos de los logins,
      // no puedo filtrar por todos los campos :O
      //  Ver como resolver...

      // const filterByServiceURL = item => {
      //   return item.service_url
      //     .trim()
      //     .toLowerCase()
      //     .includes(searchedText);
      // };
      // const filterByUserName = item => {
      //   return item.username
      //     .trim()
      //     .toLowerCase()
      //     .includes(searchedText);
      // };
      // const filterByNotes = item => {
      //   return item.notes
      //     .trim()
      //     .toLowerCase()
      //     .includes(searchedText);
      // };
      const filterByAllFields = (item, text) => {
          return (   filterByServiceName(item, text)     );
          // filterByServiceName(item, text) ||
          // filterByServiceURL(item, text) ||
          // filterByUserName(item, text) ||
          // filterByNotes(item, text)
      };
      const listItems = loginList && loginList.map(i => this.makeRow(i));
      const filteredListItems =
      loginList && searchedText && searchedText !== ''
          ? loginList.filter(filterByAllFields).map(i => this.makeRow(i))
          : listItems;

      const header =
      !loginList || loginList.length === 0
          ? this.makeHeader('Aún no se agregaron credenciales...')
          : !filteredListItems || filteredListItems.length === 0
              ? this.makeHeader('No hay coindencias.')
              : this.makeHeader('Listado de credenciales:');

      return (
          <List component="nav" subheader={header} className={classes.root}>
              {filteredListItems}
          </List>
      );
  }
}

export default withStyles(styles)(LoginList);

// Extra, para cuando haya mas de un juego de credenciales para un mismo sitio:
// <ListItem button onClick={this.handleClick}>
//   <ListItemIcon>
//     <CreateNewFolderIcon />
//   </ListItemIcon>
//   <ListItemText inset primary="Facebook" />
//   {this.state.open ? <ExpandLess /> : <ExpandMore />}
// </ListItem>
// <Collapse in={this.state.open} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//     <ListItem button className={classes.nested}>
//       <ListItemIcon>
//         <OpenInNewIcon />
//       </ListItemIcon>
//       <ListItemText inset primary="gracielamegaciclo" />
//     </ListItem>
//   </List>
// </Collapse>
