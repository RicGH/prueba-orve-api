import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import PokemonItem from '../components/PokemonItem';
import { fetchPokemonList } from '../services/api';

interface Pokemon {
  name: string;
  url: string;
}

const PokemonListScreen: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonList();
      setPokemonList(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
    {/* Cabecera con el texto "Pokédex" */}
    <View style={styles.header}>
      <Text style={styles.headerText}>Pokédex</Text>
    </View>

    {/* Lista de Pokémon */}
    <FlatList
      data={pokemonList}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <PokemonItem name={item.name} url={item.url} />}
      contentContainerStyle={styles.listContainer}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 15,
    backgroundColor: 'red', // Azul típico de Pokémon
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PokemonListScreen;
