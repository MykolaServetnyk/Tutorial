const categoryEl = document.querySelector("#categories");
const subCategories = categoryEl.querySelectorAll('.item');
const counter = (parent) => { return parent.childElementCount };
console.log(`Number of categories: ${counter(categoryEl)}`);
const message = elements => {
    elements.forEach(element => {
        const firstEl = element.firstElementChild;
        const secondElem = firstEl.nextElementSibling
        console.log(`Category: ${firstEl.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
};
message(subCategories);
