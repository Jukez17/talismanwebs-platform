import React from 'react'
import { reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const BillingForm = props => {
  const classes = useStyles();
  const [company, setCompany] = React.useState('');

  //const inputLabel = React.useRef(null);
  //const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setCompany(event.target.value);
  };
  const { handleSubmit } = props
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel} shrink id="company-id">
          Select a billing method
        </InputLabel>
        <Select
          labelId="placeholder-id"
          id="label-id"
          value={company}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>- No payment method selected -</em>
          </MenuItem>
          <MenuItem value={'paypal'}>Paypal</MenuItem>
          <MenuItem value={'card'}>Card</MenuItem>
        </Select>
      </FormControl>
      </div>
    </form>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
  },
  inputLabel: {
    fontSize: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default reduxForm({
  form: 'BillingForm', // a unique identifier for this form
})(BillingForm)
