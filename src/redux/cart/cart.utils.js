export const addItemToCart = (items, itemToAdd) => {
  const exists = items.find((item) => item.id === itemToAdd.id);
  if (exists)
    return items.map((item) =>
      item.id === exists.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  return [...items, { ...itemToAdd, quantity: 1 }];
};
