import { Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-main',
  imports: [PokemonCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent 
{
  async getAPI(item: string)
  {
      return await fetch(item)
      .then(response => {return response.json()})
      .then(item => 
      {
          return item;
      })
  }

  ngOnInit()
  {
    console.log("Main On Init")

    this.getAPI("https://pokeapi.co/api/v2/pokemon").then(pokemon =>
    {
        for(let i = 1; i <= pokemon.count; i++) //pokemon.count
        {
            this.criarCardPokemon(i);
        }
    });
  }

  criarCardPokemon(valor: string | number)
  {
      console.clear();
      let pokemons: HTMLElement | null = document.getElementById("pokemons");
      let pokemonHTML;

      //Procurar pela informações do Pokemon
      this.getAPI(`https://pokeapi.co/api/v2/pokemon/${valor}`).then(pokemon =>
      {
          let escolha: number = 1;
          if (pokemon.id == escolha) console.log("Pokemon: ", pokemon);
          //Uma dessa informações é as formas dele, é preciso entrar em outra URL para pegar a imagem
          this.getAPI(pokemon.forms[0].url).then(forms => 
          {
              if (pokemon.id == escolha) console.log("Formas: ", forms);

              pokemonHTML = document.createElement("");

              pokemons?.appendChild(pokemonHTML);
          });
      })
      .catch((error) => 
      {
          pokemonHTML = document.createElement("p");
          pokemonHTML.textContent =  "Este Pokemon não existe";
          //pokemons.appendChild(pokemonHTML);

          console.error(error);
      })
  }

  ngAfterContentInit()
  {
    console.log("Main After Content Init")
  }

  ngAfterViewInit()
  {

  }

  ngOnDestroy()
  {

  }



}
