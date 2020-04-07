import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Button, Text } from 'grommet';
import styled from 'styled-components';
import Column from '../../components/Column';
import Grid from '../../components/Grid';
import { signupRequest, updateField } from './actions';
import Input from '../../components/common/input/input.js';
import SelectOption from '../../components/common/input/select.js';
import CheckBoxInput from '../../components/common/input/checkbox.js';

const FormWrapper = styled.div`
  display: grid;
  grid-gap: 24px;

  @media only screen and (min-width: 424px) {
    grid-template-columns: 1fr max-content;
  }
`;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox: true,
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { signupRequest } = this.props;
    await signupRequest();
  }
  
  handleChange = prop => e => {
    const { value } = e.target;
    this.setState({
      [prop]: value
    });
  };

  render() {
    const {
      signupForm: { forceValidation, reset, form },
      updateField,
      error
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormWrapper>
          <Grid staggered mt="" mb="large">
            <Column>
              <Box pad="medium" align="start" gap="large">
                <Box direction="row" wrap align="start" gap="large">
                  <Heading margin={{ top: 'none' }} size="small">Welcome to the</Heading>
                  <Heading margin={{ top: 'none' }} size="small">Centrifuge Authenticated Faucet</Heading>
                </Box>
              </Box>
              <Box pad="medium" align="start" gap="large">
                <Box direction="row" wrap align="start" gap="large">
                  <Text>Please add a few more detail to continue:</Text>
                </Box>
              </Box>

              <Box pad={{ top: 'medium', left: 'small' }} align="center">
                <Box direction="row" wrap align="center" gap="large">
                  <Box wrap align="center" gap="medium" width="medium">
                    <Input
                      type="text"
                      id='full_name'
                      value={form.full_name}
                      forceValidation={forceValidation}
                      reset={reset}
                      placeholder='Your Name'
                      onInputChange={(value, error) => {
                        updateField('full_name', value, error);
                      }}
                    />
                    <Input
                      type="text"
                      id='company_name'
                      value={form.company_name}
                      forceValidation={forceValidation}
                      reset={reset}
                      placeholder='Company'
                      onInputChange={(value, error) => {
                        updateField('company_name', value, error);
                      }}
                    />
                    <SelectOption
                      required
                      placeholder="Are you a US Citizen? *"
                      options={['True', 'False']}
                      value={form.us_citizen}
                      forceValidation={forceValidation}
                      reset={reset}
                      isRequired
                      onInputChange={(value, error) => {
                        updateField('us_citizen', value, error);
                      }}
                    />
                  </Box>
                  <Box wrap align="center" gap="medium" width="medium">
                    <Input
                      type="text"
                      id='email'
                      value={form.email}
                      forceValidation={forceValidation}
                      reset={reset}
                      placeholder='Email'
                      onInputChange={(value, error) => {
                        updateField('email', value, error);
                      }}
                    />
                    <SelectOption
                      required
                      id="country"
                      placeholder="Country of Operation *"
                      options={['One', 'Two']}
                      value={form.country}
                      forceValidation={forceValidation}
                      reset={reset}
                      isRequired
                      onInputChange={(value, error) => {
                        updateField('country', value, error);
                      }}
                    />
                    <Input
                      type="text"
                      id='chain_address'
                      value={form.chain_address}
                      forceValidation={forceValidation}
                      reset={reset}
                      isRequired
                      placeholder='Centrifuge Chain Adress **'
                      onInputChange={(value, error) => {
                        updateField('chain_address', value, error);
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box wrap pad={{ top: 'medium', left: 'medium' }} align="start" gap="large">
                <CheckBoxInput
                  id='termAccepted'
                  label="You agree to the Terms of Service and the Privacy Policy"
                  value={form.termAccepted}
                  isRequired
                  // errorMessage={'Must accept the warnning.'}
                  reset={reset}
                  forceValidation={forceValidation}
                  onInputChange={(value, error) => {
                    updateField('termAccepted', value, error);
                  }}
                />
              </Box>

              <Box pad={{ top: 'medium', left: 'medium' }} align="start" gap="large">
                <Box direction="row" wrap align="start" gap="large">
                  <Text>* This faucet is not currently available for US Citizens or Residents or Residents of China or South Korea</Text>
                </Box>
              </Box>
              <Box pad={{ top: 'xxsmall', left: 'medium' }} align="start" gap="large">
                <Box direction="row" wrap align="start" gap="large">
                  <Text>** if you don&apos;t have Centrifuge Chain adress, create one using our documentation</Text>
                </Box>
              </Box>
              <Box pad="medium" align="center" gap="large">
                <Button 
                  primary 
                  label="Press to Pour" 
                  type='submit'/>
              </Box>
              {error && 
              <Box pad={{ top: 'small', left: 'medium' }} align="start" gap="large">
                <Box direction="row" wrap align="start" gap="large">
                  <Text style={{ color: 'red' }}>{error.message}</Text>
                </Box>
              </Box>
              }
            </Column>
          </Grid>
        </FormWrapper>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  signupForm: state.signupReducer.signupForm,
  error: state.signupReducer.error
});

const mapDispatchToProps = {
  signupRequest,
  updateField
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
