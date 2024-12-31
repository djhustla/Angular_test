import { Injectable } from '@angular/core';
import { pokemonList } from './shared/pokemonList';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './shared/pokemon';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // Simule une "base de données"
  createDb() {
    const pokemons: Pokemon[] = pokemonList;


    return { pokemons }; // Endpoint `/api/pokemons`
  }

  // Optionnel : Pour générer des IDs automatiquement
  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map((pokemon) => pokemon.id)) + 1 : 1;
  }
}
