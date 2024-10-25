import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Pokemon[] {
    return [{
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: true
    },{
      id: 2,
      name: 'squitle',
      type: 'water',
      isCool: false
    },{
      id: 3,
      name: 'charmander',
      type: 'fire',
      isCool: true
    }]
  
  }
}
