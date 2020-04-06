const inputErrors = {
  required: {
    key: 'empty',
    message: 'This field is required.',
    isError: value => !value || value.length === 0
  }
};

export default inputErrors;
