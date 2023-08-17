const getAllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
};

const getSingleProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  return res.json();
};

export { getAllProducts, getSingleProduct };
