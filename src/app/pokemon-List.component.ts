import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './shared/pokemon';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [],
  template: `
    <h1>Liste des Pokémon</h1>
    <ul>
      <li *ngFor="let pokemon of pokemons">
        {{ pokemon.name }} (HP: {{ pokemon.hp }}, CP: {{ pokemon.cp }})
      </li>
    </ul>
  `,
})
export class PokemonListComponent implements OnInit 
{
  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void 
  {
    this.pokemonService.getPokemons().subscribe((data) => {this.pokemons = data;});
  }
}
