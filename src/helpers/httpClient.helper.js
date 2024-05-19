const GetData = async (url) => {
  try {
    
    const response = await fetch(url, { method: 'GET'});
    const json = await response.json();
    return json;
  } catch (e) {
    console.error("Failed to fetch", e);
    throw e;
  }
};

export { GetData };
