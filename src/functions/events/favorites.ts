export const handleFavorite = (id: string) => {
  const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
  const filtered = saved.find((item: string) => item == id)
    ? saved.filter((item: string) => item != id)
    : [...saved, id];
  console.log(filtered);
  localStorage.setItem("favorites", JSON.stringify(filtered));
};

export const checkFavorite = (id: string) => {
  const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
  return saved.find((item: string) => item == id);
};
