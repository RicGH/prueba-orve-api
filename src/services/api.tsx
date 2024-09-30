interface PokemonResponse {
    results: {
      name: string;
      url: string;
    }[];
  }
  
  export const fetchPokemonList = async (): Promise<PokemonResponse> => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
      return { results: [] };
    }
  };
  