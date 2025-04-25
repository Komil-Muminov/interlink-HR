const API = "http://localhost:3001";

export const getEmploeePersonalCard = async () => {
  try {
    const response = await fetch(`${API}/emploeePersonalCard`);
    if (!response.ok) {
      throw new Error("Ошибка в запросе getEmploeePersonalCard");
    }
    return response.json();
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
