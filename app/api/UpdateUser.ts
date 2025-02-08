export const updateUser = async (data: any, id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/update/${id}`,
    {
      cache: "no-store",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      next: { revalidate: 10 },
    }
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
