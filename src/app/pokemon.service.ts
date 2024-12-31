import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './shared/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'api/pokemons'; // L'URL de l'API simulée

  constructor(private http: HttpClient) {}

  // Obtenir tous les Pokémon
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  // Obtenir un Pokémon par son ID
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  // Ajouter un Pokémon
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.apiUrl, pokemon);
  }

  // Supprimer un Pokémon
  deletePokemon(id: number): Observable<unknown> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  // Mettre à jour un Pokémon
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(this.apiUrl, pokemon);
  }
}
