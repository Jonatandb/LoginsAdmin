/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        position: 'static'
    },
    textField: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing.unit * 11,
        width: '100%'
    }
});

function Busqueda({ classes, onChange, value }) {
    return (
        <TextField
            id="filled-search"
            label="Buscar por Servicio / Usuario / Notas..."
            type="search"
            className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={onChange}
            value={value}
        />
    );
}

export default withStyles(styles)(Busqueda);
