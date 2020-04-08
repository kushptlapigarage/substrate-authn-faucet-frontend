import * as types from './actionTypes.js';

export const defaultState = {
  isSubmitting: false,
  isLoading: false,
  success: null,
  error: null,
  signupForm: {
    forceValidation: false,
    reset: false,
    form: {
      full_name: '',
      company_name: '',
      country: '',
      us_citizen: '', 
      chain_address: '',
      email:'',
      termAccepted: false,
    },
    isValidForm: {
      chain_address: false,
    }
  }
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
  case types.SIGNUP_UPDATE_FORM_FIELD:
    return {
      ...state,
      signupForm: action.updatedTransactionsForm
    };
  case types.SIGNUP_START:
    return {
      ...state,
      isSubmitting: true,
      error: null,
      isLoading: true,
      signupForm: {
        ...state.signupForm,
        ...{
          forceValidation: true
        }
      }
    };
  case types.SIGNUP_SUCCESS:
    return {
      ...state,
      isSubmitting: false,
      isLoading: false,
      success: action.response,
      error: null,
      signupForm: {
        ...state.signupForm,
        ...{
          reset: true,
          forceValidation: false
        }
      }
    };
  case types.SIGNUP_ERROR:
    return {
      ...state,
      isSubmitting: false,
      isLoading: false,
      success: null,
      error: action.error,
      signupForm: {
        ...state.signupForm,
        ...{
          reset: false
        }
      }
    };
  default:
    return state;
  }
};

export default reducer;