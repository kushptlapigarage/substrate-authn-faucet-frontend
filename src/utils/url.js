export const queryToJson = queryString => {
  const params = new URLSearchParams(queryString);
  console.log('params',params);
  return params;
};

export const getQueryStringParameters = queryString => {
  const query = queryString.substring(1);
  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, { });
};
