/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Common/Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Invoice</Title>
      <Typography component="p" variant="h4">
        3024.00 €
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 12 November, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View invoices
        </Link>
      </div>
    </React.Fragment>
  );
}