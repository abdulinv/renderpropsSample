export async function FetchApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("check your url!");
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}
