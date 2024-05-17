// your code here
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const url = document.querySelector("#url");

const Input = {
  get() {
    return [...inputs].map((input) => input.value);
  },
};

const Url = {
  base: url.innerText,
  createQueryString(name, year) {
    let queryString = ``;
    if (name && year) queryString = `?name=${name}&year=${year}`;
    else if (name) queryString = `?name=${name}`;
    else if (year) queryString = `?year=${year}`;
    return queryString;
  },
  getModified(name, year) {
    return this.base + this.createQueryString(name, year);
  },
};

function handleSubmit(event) {
  event.preventDefault();
  const [name, graduationYear] = Input.get();
  const newUrl = Url.getModified(name, graduationYear);
  url.innerText = newUrl;
}

button.addEventListener("click", handleSubmit);
