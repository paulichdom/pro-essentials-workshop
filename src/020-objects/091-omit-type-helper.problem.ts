interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductData = Omit<Product, 'id'>

const addProduct = (productInfo: ProductData) => {
  // Do something with the productInfo
};

addProduct({
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});

addProduct({
  // @ts-expect-error
  id: 1,
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});
