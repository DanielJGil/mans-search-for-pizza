const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export default async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error("Failed loading menu");

  const { data } = await res.json();
  return data;
}
