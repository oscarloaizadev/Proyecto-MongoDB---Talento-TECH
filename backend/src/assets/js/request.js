const URL = "http://localhost:3000/api/";

export const sendRequest = (endPoint, method, data) => {
  let request = new XMLHttpRequest();
  request.open(method, URL + endPoint);
  request.responseType = "json";
  request.setRequestHeader("Content-Type", "application/json");
  request.send(data ? JSON.stringify(data) : data);
  return request;
};
