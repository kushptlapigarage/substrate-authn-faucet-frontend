import * as types from './actionTypes';
import { signup } from './api';

const updateFormField = updatedTransactionsForm => ({
  type: types.SIGNUP_UPDATE_FORM_FIELD,
  updatedTransactionsForm
});

const signupStart = () => ({ type: types.SIGNUP_START });


const signupSuccess = response => ({
  type: types.SIGNUP_SUCCESS,
  response
});

export const signupError = (error) => ({
  type: types.SIGNUP_ERROR,
  error
});

export const isValid = isValidForm => {
  return Object.values(isValidForm).reduce(
    (acc, value) => (value === false ? false : acc),
    true
  );
};
  

export const updateField = (field, value, error) => {
  return function(dispatch, getState) {
    const signupForm = getState().signupReducer.signupForm;

    const form = {
      ...signupForm.form,
      ...{
        [field]: value
      }
    };
  
    const isValidForm = {
      ...signupForm.isValidForm,
      ...{
        [field]: !error
      }
    };
  
    const updatedSignupForm = {
      ...signupForm,
      ...{
        form,
        reset: false,
        isValidForm
      }
    };
  
    dispatch(updateFormField(updatedSignupForm));
  };
};

export const signupRequest = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(signupStart());
      const {isValidForm, form} = getState().signupReducer.signupForm;
      const valid = isValid(isValidForm);
      if(valid) {
        const data = {
          full_name: form.full_name,
          company_name: form.company_name,
          country: form.country,
          us_citizen: form.us_citizen,
          chain_address: form.chain_address,
        };
        const response = await signup(data);
        dispatch(signupSuccess(response));
      } else {
        dispatch(signupError());
      }
    } catch (e) {
      console.log(new Date(), e);
      return dispatch(signupError(e));
    }
  };
};
  