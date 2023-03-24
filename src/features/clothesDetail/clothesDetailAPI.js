export const fetchOneProduct = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    return new Promise((res) => {
      res(data);
    });
  } catch (error) {
    return new Promise((res, rej) => {
      rej(error);
    });
  }
};
