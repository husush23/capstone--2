const movieCounter = (movies) => {
  if (movies.length === 0) {
    return 'No movies';
  }
  if (movies.length > 999) {
    return '999+';
  }
  return movies.length.toString();
};
export default movieCounter;