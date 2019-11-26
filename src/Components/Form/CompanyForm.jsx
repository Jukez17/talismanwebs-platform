import React from 'react'
import { reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
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

const CompanyForm = props => {
  const classes = useStyles();
  const { handleSubmit } = props
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div>
        <TextField
          className={classes.companyField}
          name="company"
          //component={renderTextField}
          label="Name of the company"
        />
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
  companyField: {
    width: 500,
  },
}));


export default reduxForm({
  form: 'CompanyForm', // a unique identifier for this form
  validate,
  asyncValidate
})(CompanyForm)
