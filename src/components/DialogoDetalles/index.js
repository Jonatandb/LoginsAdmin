/* eslint-disable react/prop-types */
import React from 'react';
import List from '@material-ui/core/List';
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from '@material-ui/core/Dialog';
// import blue from "@material-ui/core/colors/blue";
import Button from '@material-ui/core/Button';
// import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from "@material-ui/core/TableHead";
import TableRow from '@material-ui/core/TableRow';

class DialogDetalles extends React.Component {
    handleClose = () => {
        this.props.onClose(-1);
    };

    // createRow = (item, prop) => {
    //   return (
    //     <TableRow>
    //       <TableCell>{prop}:</TableCell>
    //       <TableCell style={{ textTransform: "capitalize" }}>
    //         {item[prop]}
    //       </TableCell>
    //     </TableRow>
    //   );
    // };

    createListItem = item => (
        <React.Fragment>
            <Table>
                <TableBody>
                    {/* <div>{Object.keys(item).map(prop => ( prop !== 'id' && prop + ': ' + item[prop]))}</div>*/}
                    {/*Object.keys(item).map(prop => this.createRow(item, prop))*/}
                    <TableRow>
                        <TableCell>Servicio:</TableCell>
                        <TableCell style={{ textTransform: 'capitalize' }}>
                            {item.service_name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>URL:</TableCell>
                        <TableCell>
                            <a href={item.service_url} target={'_blank'}>
                                {item.service_url}
                            </a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Usuario:</TableCell>
                        <TableCell>{item.username}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Clave:</TableCell>
                        <TableCell>{item.password}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Notas:</TableCell>
                        <TableCell>{item.notes}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
    render() {
        const { open, item } = this.props;
        return (
            <Dialog
                aria-labelledby="simple-dialog-title"
                onClose={this.handleClose}
                open={item && open}
            >
                <DialogTitle id="simple-dialog-title">
                    Detalles de la cuenta:
                </DialogTitle>
                <List>
                    {this.createListItem(item)}
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                        autoFocus
                    >
                        <ArrowBackIcon />
                        Volver
                    </Button>
                </List>
            </Dialog>
        );
    }
}

export default DialogDetalles;
