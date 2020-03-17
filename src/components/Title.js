import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  subheader: {
    textAlign: 'center',
    background: '#3567CC',
    color: 'white',
    fontSize: 24,
    padding: 5,
  }
}));

export default function Title(props) {
  const classes = useStyles();

  return (
    <Typography className={classes.subheader} component="h2" variant="h6" color="primary" >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};