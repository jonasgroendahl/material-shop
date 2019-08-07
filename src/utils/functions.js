function calculateTotal(cart) {
  return cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
}

export { calculateTotal };
