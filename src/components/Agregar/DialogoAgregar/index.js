/* eslint-disable no-console */
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
import SaveIcon from '@material-ui/icons/Save';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from "@material-ui/core/TableHead";
import TableRow from '@material-ui/core/TableRow';

const showLogs = false;

const initialState = {
    id: -1,
    serviceName: '',
    serviceURL: '',
    userName: '',
    password: '',
    notes: ''
};

class DialogoAgregar extends React.Component {
    state = initialState;

    handleClose = () => {
        showLogs && console.log('DialogoAgregar -> handleClose()');
        this.setState(initialState);
        this.props.onClose();
    };

    handleAdd = () => {
        showLogs && console.log('DialogoAgregar -> handleAdd()');
        const newLogin = Object.assign({}, this.state, { id: +new Date() });
        this.props.onAdd(newLogin);
        this.handleClose();
    };

    handleChange = ({ currentTarget: { name }, currentTarget: { value } }) => {
        this.setState({ [name]: value });
    };

    createListItem = () => (
        <React.Fragment>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Servicio:</TableCell>
                        <TableCell>
                            <input
                                name="serviceName"
                                onChange={this.handleChange}
                                value={this.state.serviceName}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>URL:</TableCell>
                        <TableCell>
                            <input
                                name="serviceURL"
                                onChange={this.handleChange}
                                value={this.state.serviceURL}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Usuario:</TableCell>
                        <TableCell>
                            <input
                                name="userName"
                                onChange={this.handleChange}
                                value={this.state.userName}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Clave:</TableCell>
                        <TableCell>
                            <input
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Notas:</TableCell>
                        <TableCell>
                            <input
                                name="notes"
                                onChange={this.handleChange}
                                value={this.state.notes}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
    render() {
        const { open } = this.props;
        return (
            <Dialog
                aria-labelledby="simple-dialog-title"
                onClose={this.handleClose}
                open={open}
            >
                <DialogTitle id="simple-dialog-title">
            Agregar detalles de la cuenta:
                </DialogTitle>
                <List>
                    {this.createListItem()}
                    <Button onClick={this.handleClose} color="primary">
                        <ArrowBackIcon />
            Volver
                    </Button>
                    <Button
                        onClick={this.handleAdd}
                        color="primary"
                        autoFocus
                        {...(this.state.serviceName === '' ? { disabled: true } : null)}
                    >
                        <SaveIcon />
            Guardar
                    </Button>
                </List>
            </Dialog>
        );
    }
}

export default DialogoAgregar;

//https://material.io/tools/icons/?icon=arrow_back&style=baseline
