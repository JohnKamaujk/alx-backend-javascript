export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('API response data');
      // or you can reject with an error
      // reject(new Error('Failed to fetch data from API'));
    }, 1000);
  });
}
