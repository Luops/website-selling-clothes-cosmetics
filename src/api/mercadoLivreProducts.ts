type Product = {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
  affiliate_link: string;
};

// Função para buscar produtos
export default async function getProducts(query: string): Promise<Product[]> {
  if (!query) return [];
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=`;

  try {
    const response = await fetch(`${url}${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar produtos da API do Mercado Livre:", error);
    return [];
  }
}
