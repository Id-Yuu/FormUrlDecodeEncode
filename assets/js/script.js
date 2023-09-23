const form = document.querySelector("#form");
function decodeUrl() {
  const url = document.querySelector("#decodeUrl").value;
  const decode = decodeURIComponent(url);
  document.querySelector("#decodeUrl").value = decode;
}
function encodeUrl() {
  const url = document.querySelector("#decodeUrl").value;
  const encode = encodeURIComponent(url);
  document.querySelector("#decodeUrl").value = encode;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const decodes = document.getElementById("decode");
  decodes.addEventListener("click", decodeUrl);
  const encodes = document.getElementById("encode");
  encodes.addEventListener("click", encodeUrl);
});
