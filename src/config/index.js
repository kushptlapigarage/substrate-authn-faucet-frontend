const currentEnv = process.env.NODE_ENV;

const dev = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: '9dffefab6a7f7cfd1efb',
  REDIRECT_URI: 'http://localhost:8000/github/callback',
  POLKASCAN_URI: 'https://polkascan.io/pre/centrifuge-amber-cc2/transaction/'
};
const prod = {
  API_HOST: 'http://localhost:8080',
  GITHUB_CLIENT_ID: 'bd96258260f769a56370',
  REDIRECT_URI: 'https://centrifuge-demo.netlify.app/github/callback',
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
  }
};

export { currentEnv, config, baseOptions };
