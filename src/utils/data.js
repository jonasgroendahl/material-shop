import faker from "faker";

const randomImage = faker.image.imageUrl();

const logo =
  "data:image/png;base64,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";

const products = [];

const categories = [];

const urls = [
  "",
  "https://cdn.dribbble.com/users/815278/screenshots/2375130/random-turtle.gif",
  "https://pbs.twimg.com/profile_images/1136828571341733888/BrRTfqQb_400x400.png",
  "https://www.online-stopwatch.com/images/eggs.png",
  "https://404store.com/2017/12/08/randomshots059.jpg"
];

for (let i = 0; i < 30; i++) {
  const product = faker.commerce.product();
  const obj = {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    color: faker.commerce.color(),
    product,
    adj: faker.commerce.productAdjective(),
    subcategory: faker.commerce.productMaterial(),
    description: faker.company.catchPhraseDescriptor(),
    images: []
  };

  const randomAmountOfExtra = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < randomAmountOfExtra; i++) {
    const randomImage = Math.floor(Math.random() * 4) + 1;
    obj.images.push(urls[randomImage]);
  }

  if (categories.length > 5) {
    const randomCategory = Math.floor(Math.random() * categories.length);
    obj.product = categories[randomCategory];
  } else {
    if (!categories.includes(product)) {
      categories.push(product);
    }
  }

  products.push(obj);
}

console.log(products);

export { logo, products, categories, randomImage };
