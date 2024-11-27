import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {
  pokemon: any = null; // Inicializa com null
  pokemonId: number = 0; // Inicializa com um valor padrão, por exemplo 0
  errorMessage: string = ''; // Inicializa com uma string vazia

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // Inicialização se necessário
  }

  // Método chamado ao submeter o formulário
  getPokemonDetails(): void {
    if (this.pokemonId) {
      this.pokemonService.getPokemonDetails(this.pokemonId).subscribe(
        (data) => {
          this.pokemon = data; // Atualiza os dados do Pokémon
          this.errorMessage = ''; // Limpa a mensagem de erro
        },
        (error) => {
          this.pokemon = null; // Limpa os dados do Pokémon
          this.errorMessage = 'Pokémon não encontrado! Tente outro ID.'; // Exibe a mensagem de erro
        }
      );
    }
  }
}