import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

interface PokemonItemProps {
  name: string;
  url: string;
}

interface PokemonDetails {
  sprites: {
    front_default: string;
  };
  weight: number;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {pokemonDetails && (
        <>
          <Image source={{ uri: pokemonDetails.sprites.front_default }} style={styles.image} />
          <Text style={styles.text}>{name}</Text>
          
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color:'#000'
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default PokemonItem;
