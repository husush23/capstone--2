const fetchData = async () => {
  const tvUrl = 'https://api.tvmaze.com/show';
  const response = await fetch(tvUrl);
  const result = await response.json();
  const res = result.slice(10, 20);

  return res;
};
export default fetchData;
// We only need this one to run once.
