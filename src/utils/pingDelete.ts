export default async function pingDelete(
  endpoint: string,
  id: string | number,
): Promise<void> {
  await fetch(`/api/${endpoint}/${id}`, {
    method: "DELETE",
  });
}
