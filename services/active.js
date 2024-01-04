export const name = () => {
  const activeElement = document.querySelector("[active=true]");
  const activeElementId = activeElement.id;
  const activeElementName = activeElementId.toString();
  return activeElementName;
};

/* export const change = (actual) => {
  document.querySelector("[active=true]").id.setAttribute("active", false);
  actual.id.setAttribute("active", true);
  return;
}; */

export const set = (url) => {
  const activeEndpoint = url.slice(29).toString();
  const activeElement = document.getElementById(activeEndpoint);
  // console.log(activeElement);
  activeElement.setAttribute("active", true);
};
