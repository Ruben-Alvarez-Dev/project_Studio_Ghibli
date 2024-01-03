export const get = async (url) => {
  const response = await fetch(url);
  const rawData = await response.json();
  console.log(rawData);
  //return rawData;
};

export const map = (rawData) => {
  console.log(rawData);
};

export const filter = (data, callback) => {
  return data.filter(callback);
};

export const print = () => {
  console.log("Hello from data.js");
};
