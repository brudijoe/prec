import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react';
import PokemonCard from './pokemon-card';
import ButtonGroup from './button-group';
import './i18n';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  const [id, setId] = useState(1)
  const { data: pokemon, isLoading, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('translation:pokedexTitle')}</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>

      <>
        <PokemonCard
          isLoading={isLoading}
          data={pokemon}
          error={error}
        />
        <ButtonGroup handleSetId={setId} />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
