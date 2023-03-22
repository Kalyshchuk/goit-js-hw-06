
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("li").length;
  console.log(`Category: ${title} \n Elements: ${categoryItems}`);
});