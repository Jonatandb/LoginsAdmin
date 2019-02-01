/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = () => ({
    fabButton: {
        zIndex: 1,
        position: 'fixed',
        bottom: '1rem',
        right: '1rem'
    },
    extendedIcon: {}
});

function BotonAgregar(props) {
    const { classes, onClick } = props;
    return (
        <React.Fragment>
            <Fab
                variant="extended"
                color="primary"
                aria-label="Agregar"
                className={classes.fabButton}
                onClick={onClick}
            >
                <AddIcon className={classes.extendedIcon} />
        Agregar
            </Fab>
        </React.Fragment>
    );
}

export default withStyles(styles)(BotonAgregar);

//https://material.io/tools/icons/?icon=arrow_back&style=baseline
