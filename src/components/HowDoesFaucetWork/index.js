import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph } from 'grommet';

import Grid from '../Grid';
import Column from '../Column';
import Container from '../Container';
import FullWidthContainer from '../FullWidthContainer';

import tinlake_flow_desktop_img from '../../images/tinlake/tinlake-flow-desktop.svg';
import tinlake_flow_mobile_img from '../../images/tinlake/tinlake-flow-mobile.svg';

export default function WhatIsTinlake() {
  return (
    <>
      <Container>
        <Grid noMargin pt='50px' align='start'>
          <Column>
            <div>
              <Heading level={2} lined>
                {data.heading}
              </Heading>
              <Paragraph>{data.paragraph}</Paragraph>
            </div>
          </Column>
        </Grid>
      </Container>

      <FullWidthContainer>
        <Grid noMargin pt='50px' pb='50px'>
          <Column mobileHide justifySelf='stretch'>
            <Image src={tinlake_flow_desktop_img} />
          </Column>
          <Column tabletHide justifySelf='stretch'>
            <Image src={tinlake_flow_mobile_img} />
          </Column>
        </Grid>
      </FullWidthContainer>
    </>
  );
}

const data = {
  heading: 'How does the Centrifuge Chain faucet work?',
  paragraph:
    'Tinlake is a asset-backed lending smart contract platform that is designed for Asset Originators like lending platforms, payment companies, embedded software solutions, and banks that seek to utilize the full potential of decentralized finance. The protocol coordinates the various parties required to structure, administer, and finance collateralized pools of financial obligations like invoices, mortgages, auto loans, or royalties. By simplifying the process and reducing costs, Tinlake’s protocol creates financing flexibility for Asset Originators allowing them to optimize risk allocation and access instant funding from a new category of crypto lending protocols while simultaneously improving transparency and accessibility for their traditional investors.'
};

const Image = styled.img`
  @media only screen and (max-width: 768px) {
    width: 30%;
    margin: 0 auto;
  }
`;
