import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph, Button } from 'grommet';

import Grid from '../Grid';
import Column from '../Column';
import FullWidthContainer from '../FullWidthContainer';

import tinlakeLogo from '../../images/tinlake/tinlake-logo.svg';

export default function Hero() {
  return (
    <FullWidthContainer>
      <Grid noMargin pt="50px" pb="50px">
        <Column justifySelf='stretch' span={{ medium: 5, large: 5 }}>
          <Image src={tinlakeLogo} />
        </Column>

        <Column span={{ medium: 2, large: 2 }} />

        <Column span={{ medium: 5, large: 5 }} textAlign="center">
          <Content>
            <Heading level={1}>{data.heading}</Heading>
            <Button primary label="Login with Github" />
            <Paragraph pad={{ top: 'xxsmall', left: 'medium' }}>{data.paragraph}</Paragraph>
          </Content>
        </Column>
      </Grid>
    </FullWidthContainer>
  );
}

const data = {
  heading: 'Centrifuge Authenticated Faucet',
  paragraph:
    'Unlock the value of your real-world assets in the decentralized finance ecosystem. '
};

const Image = styled.img`
  width: 100%;
  margin-bottom: 70px;
`;

const Content = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 33px;

    @media only screen and (max-width: 768px) {
      margin-bottom: 41px;
    }
  }

  p {
    margin-top: 23px;
  }

  h1,
  p {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;
