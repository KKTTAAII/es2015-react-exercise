function choice(items) {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  return randomItem;
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return items.splice(i, 1);
    }
  }
}

export { choice, remove };
