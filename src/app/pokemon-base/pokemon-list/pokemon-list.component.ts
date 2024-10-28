import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit, AfterViewInit{
  pokemons!: Pokemon[];
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonTf') pokemonTh!: ElementRef;
  constructor(private pokemonService: PokemonService, private renderer: Renderer2) {
    
  }
  ngAfterViewInit(): void {
    console.log(this.pokemonTh);
    this.pokemonTh.nativeElement.innerText  = "Pokemon Name";
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Pokemon List');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonTh.nativeElement, div);
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data;
    })
  }


}
