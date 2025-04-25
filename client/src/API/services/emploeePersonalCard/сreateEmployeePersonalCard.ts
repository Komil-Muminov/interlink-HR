const API = "http://localhost:3001";

export const сreateEmployeePersonalCard = async (formData: FormData) => {
  try {
    const response = await fetch(`${API}/emploeePersonalCard`, {
      method: "POST",
      body: formData,
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Ошибка в запросе сreateEmployeePersonalCard");
    }

    return response.json();
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
