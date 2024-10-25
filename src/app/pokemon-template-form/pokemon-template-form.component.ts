import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrl: './pokemon-template-form.component.css'
})
export class PokemonTemplateFormComponent implements OnInit{


  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) {

  }

  toggleIsCool(object: any) {
    console.log(object);
    this.pokemon.isCool = !this.pokemon.isCool;
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    })
  }

}
