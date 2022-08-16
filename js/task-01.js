const cardsRef = document.querySelector(`#categories`);
// console.log(cardsRef);
console.log(`Number of categories: `, cardsRef.children.length);

const cardsLi = document.querySelectorAll('.item');
cardsLi.forEach(elem => {
  console.log('Category: ', elem.firstElementChild.textContent);
  console.log('Elements: ', elem.lastElementChild.children.length);
});

// const itemRef_1 = cardsRef.firstElementChild;
// // console.log(itemRef_1);
// const titleRef_1 = itemRef_1.firstElementChild;
// console.log(`Category: `, titleRef_1.textContent);

// const elemRef_1 = itemRef_1.lastElementChild.children;
// console.log(`Elements: `, elemRef_1.length);

// const itemRef_2 = cardsRef.children[1];
// // console.log(itemRef_2);
// const titleRef_2 = itemRef_2.firstElementChild;
// console.log(`Category: `, titleRef_2.textContent);
// const elemRef_2 = itemRef_2.lastElementChild.children;
// console.log(`Elements: `, elemRef_2.length);

// const itemRef_3 = cardsRef.lastElementChild;
// // console.log(itemRef_3);
// const titleRef_3 = itemRef_3.firstElementChild;
// console.log(`Category: `, titleRef_3.textContent);
// const elemRef_3 = itemRef_3.lastElementChild.children;
// console.log(`Elements: `, elemRef_3.length);
