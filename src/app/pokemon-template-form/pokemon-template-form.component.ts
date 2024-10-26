import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonType } from '../models/pokemon';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrl: './pokemon-template-form.component.css'
})
export class PokemonTemplateFormComponent implements OnInit{

  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    }
  ]

  constructor(private pokemonService: PokemonService) {

  }

  toggleIsCool(object: any) {
    console.log(object);
    this.pokemon.isCool = !this.pokemon.isCool;
  }

  handleSubmit(object: any) {
    console.log(object);
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    })
  }

}
