import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 400,
        paddingTop: theme.spacing.unit * 10,
    },
    margin: {
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    paper: {
        margin: theme.spacing.unit,
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class LoginForm extends Component {
    render() {
        const {
            classes,
            visible,
            onLogin,
            onChange,
            loginFornInvalid,
        } = this.props;

        if (visible) {
            return (
                <Fade in={visible}>
                    <Grid container className={classes.root} spacing={16} direction="column" align="center">
                        <Grid item xs={12}>
                            <Paper elevation={4} className={classes.paper}>
                                <form id="loginForm" name="loginForm" onSubmit={(event) => {
                                    if (!loginFornInvalid) {
                                        onLogin();
                                    }
                                    event.preventDefault();
                                }}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={12}>
                                            <Typography variant="title">Type your username</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                autoFocus
                                                id="name"
                                                placeholder="Username"
                                                autoComplete="off"
                                                className={classes.textField}
                                                onChange={onChange()}></TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button disabled={loginFornInvalid} variant="contained" color="primary"
                                                    className={classes.button}
                                                    onClick={() => onLogin()}>Login</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Fade>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);