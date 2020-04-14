const currentEnv = process.env.NODE_ENV;

const dev = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: 'a37026ceb8c0357f259f',
  REDIRECT_URI: 'http://localhost:8000/github/callback',
  POLKASCAN_URI: 'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};
const prod = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: 'a37026ceb8c0357f259f',
  REDIRECT_URI: 'http://centrifuge-demo.netlify.com/github/callback',
  POLKASCAN_URI: 'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};
const uat = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: 'a37026ceb8c0357f259f',
  REDIRECT_URI: 'http://localhost:8000/github/callback',
  POLKASCAN_URI: 'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};
const qa = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: 'a37026ceb8c0357f259f',
  REDIRECT_URI: 'http://localhost:8000/github/callback',
  POLKASCAN_URI: 'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};
const staging = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: 'a37026ceb8c0357f259f',
  REDIRECT_URI: 'http://localhost:8000/github/callback',
  POLKASCAN_URI: 'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};

const config =
  currentEnv === 'production'
    ? prod
    : currentEnv === 'development'
      ? dev
      : currentEnv === 'uat'
        ? uat
        : currentEnv === 'qa'
          ? qa
          : staging;

const baseOptions = {
  url: config.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  githubClientId: config.GITHUB_CLIENT_ID,
  redirectUri: config.REDIRECT_URI,
  polkascanUri: config.POLKASCAN_URI
};

export { currentEnv, config, baseOptions };
