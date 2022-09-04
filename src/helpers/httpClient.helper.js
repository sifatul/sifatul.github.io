const GetData = (url) => {
  return new Promise((resolve) => {
    fetch(url, { method: 'GET' })
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        resolve(json);
      })
      .catch((e) => {
        throw e;
      });
  });
};
export { GetData }