import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull} from '../interfaces/pokemonInterfases';
import {FadeInImage} from './FadeInImage';

interface props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsVerticalScrollIndicator={false}>
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>

        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight} Kg</Text>
      </View>

      <View style={{...styles.container}}>
        <Text style={styles.title}>Sprites</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprites}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprites}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprites}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprites}
          />
        </ScrollView>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Basic Skills</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Moves</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.container}}>
        <Text style={{...styles.title, marginBottom: 5}}>Stats</Text>

        {pokemon.stats.map((stats, i) => (
          <View style={{flexDirection: 'row'}} key={stats.stat.name + i}>
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
                color: 'black',
                width: 150,
              }}>
              {stats.stat.name}:
            </Text>

            <Text
              style={{
                ...styles.regularText,
                marginRight: 3,
                fontWeight: 'bold',
              }}>
              {stats.base_stat}
            </Text>
          </View>
        ))}

        <View style={{marginBottom: 30, marginTop: 10, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprites}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprites: {
    width: 100,
    height: 100,
  },
});
