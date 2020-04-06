export const shortenAddress = address =>
  `${address.slice(0, 6)}...${address.substr(address.length - 4)}`;
