import { api } from "@/hook/apiAxios";

export const getProducts = async () => {
  try {
    const response = await api.get(
      `/products?page=1&rows=10&sortBy=id&orderBy=ASC`
    );

    return response.data.products;
  } catch (error) {
    console.error("Erro ao obter dados do getProducts", error);
  }
};
