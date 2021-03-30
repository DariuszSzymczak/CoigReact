function getBaseURL() {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  return baseURL;
}

function getHttpUrl(urlParam: string) {
  return getBaseURL() + urlParam;
}

export { getBaseURL, getHttpUrl };