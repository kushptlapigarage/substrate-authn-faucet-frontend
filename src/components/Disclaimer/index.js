import React from 'react';
import { Heading, Paragraph } from 'grommet';

import Grid from '../Grid';
import Column from '../Column';
import Container from '../Container';

export default function Disclaimer() {
  return (
    <>
      <Container>
        <Grid noMargin pt='50px' pb='50px' align='start'>
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
    </>
  );
}

const data = {
  heading: 'Disclaimer',
  paragraph:
    'Tinlake is built on top of the Centrifuge protocol. It allows for on-chain borrowing against collateralized loans completely managed by smart contracts. Not only does Tinlake enable Asset Originators to access the growing liquidity in the Decentralized Finance ecosystem, it also enables stablecoin issuers to offer a stable store of value backed by our collateralized loan pools.  Ultimately, Tinlake will become a fully decentralized lending protocol that interoperates with different blockchains and plugs into a variety of funding sources, including a variety of stablecoins.'
};
