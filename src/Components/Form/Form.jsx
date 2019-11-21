import React from 'react'
import { reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
//import FormControlLabel from '@material-ui/core/FormControlLabel'
//import FormControl from '@material-ui/core/FormControl'
//import InputLabel from '@material-ui/core/InputLabel'
//import FormHelperText from '@material-ui/core/FormHelperText'
import asyncValidate from '../../Validation/AsyncValidation'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}


// const renderTextField = ({
//   label,
//   input,
//   meta: { touched, invalid, error },
//   ...custom
// }) => (
//   <TextField
//     label={label}
//     placeholder={label}
//     error={touched && invalid}
//     helperText={touched && error}
//     {...input}
//     {...custom}
//     className={useStyles.textField}
//   />
// )

// const renderFromHelper = ({ touched, error }) => {
//   if (!(touched && error)) {
//     return
//   } else {
//     return <FormHelperText>{touched && error}</FormHelperText>
//   }
// }

const MaterialUiForm = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div>
        <TextField
          className={classes.fnameField}
          name="firstName"
          //component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <TextField
          className={classes.lnameField}
          name="lastName"
          //component={renderTextField} 
          label="Last Name" 
        />
      </div>
      <div>
        <TextField
          className={classes.emailField}
          name="email" 
          //component={renderTextField} 
          label="Email" />
      </div>
      <div />
      <div className={classes.messageField}>
        <TextField
          
          name="message"
          //component={renderTextField}
          label="Message"
          multiline
          rowsMax="5"
          margin="normal"
        />
      </div>
      <div className={classes.buttonContainer}>
        <button 
          type="submit" 
          disabled={pristine || submitting}
        >
          Submit
        </button>
        <button 
          type="button" 
          disabled={pristine || submitting} 
          onClick={reset}>
          Clear Values
        </button>
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
    width: "100%"
  },
  buttonContainer: {
    display: 'flex',
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: "row",
    width: "100%",
    marginTop: theme.spacing(5),
    justifyContent: "space-around"
  },
  fnameField: {
    width: 300,
  },
  lnameField: {
    width: 300,
  },
  emailField: {
    width: 300,
  },
  messageField: {
    flexWrap: 'wrap',
    flexDirection: "row",
    width: "100%",
    marginTop: theme.spacing(1),
    justifyContent: "space-around"
  },
}));


export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm)
