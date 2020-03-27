new Vue({
  el: '#app',
  data: {
      namePokemonsColection:[],
      pokemonsColection: [],
      loaderPokemons: 'http://pokeapi.co/api/v1/pokemon/?limit=12',
      selectPokemon: null,
      pokemonVisibiliti: false
  },
  mounted() {
    fetch(this.loaderPokemons)
      .then(response => response.json())
      .then(json => {
        this.namePokemonsColection = json.results;
        this.loaderPokemons = json.next;
        for( i of this.namePokemonsColection){
          fetch(i.url)
          .then(response => response.json())
          .then(json => {this.pokemonsColection.push(json)})
        } 
      });
  },
  methods:{
    load: function(){
      return fetch(this.loaderPokemons)
      .then(response => response.json())
      .then(json => {
        this.namePokemonsColection = json.results;
        this.loaderPokemons = json.next;
        for( i of this.namePokemonsColection){
          fetch(i.url)
          .then(response => response.json())
          .then(json => {this.pokemonsColection.push(json)})
        }
      });
    },
    selectedPokemon: function(index){
      this.selectPokemon = this.pokemonsColection[index]
    },
    addZero: function(source){
      if(source < 10){
        return '00' + source
      }else if(source < 100 && source > 9){
        return '0' + source
      }else {return source}
    }
  },
  filters:{
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    colorType(key){
      switch(key) {
        case 'normal':
          return 'background-image: linear-gradient(rgba(127, 255, 212, 0),rgba(127, 255, 212, 1)); border: solid 1px Aquamarine'
          break;
        case 'fighting':
          return 'background-image: linear-gradient(rgba(216, 191, 216, 0),rgba(216, 191, 216, 1)); border: solid 1px Thistle'
          break;
        case 'flying':
          return 'background: linear-gradient(rgba(255, 255, 0, 0),rgba(255, 255, 0, 1)); border: solid 1px Yellow'
          break;
        case 'poison':
          return 'background: linear-gradient(rgba(255, 0, 255, 0),rgba(255, 0, 255, 1)); border: solid 1px Fuchsia'
          break; 
        case 'ground':
          return 'background: linear-gradient(rgba(189, 183, 107, 0),rgba(189, 183, 107, 1)); border: solid 1px DarkKhaki'
          break;
        case 'rock':
          return 'background: linear-gradient(rgba(105, 105, 105, 0),rgba(105, 105, 105, 1)); border: solid 1px DimGray'
          break;
        case 'bug':
          return 'background: linear-gradient(rgba(128, 0, 128, 0),rgba(128, 0, 128, 1)); border: solid 1px Purple'
          break;
        case 'ghost':
          return 'background: linear-gradient(rgba(169, 169, 169, 0),rgba(169, 169, 169, 1)); border: solid 1px DarkGray'
          break;
        case 'steel':
          return 'background: linear-gradient(rgba(112, 128, 144, 0),rgba(112, 128, 144, 1)); border: solid 1px SlateGray'
          break;
        case 'fire':
          return 'background: linear-gradient(rgba(220, 20, 60, 0),rgba(220, 20, 60, 1)); border: solid 1px Crimson'
          break;
        case 'water':
          return 'background: linear-gradient(rgba(65, 105, 225, 0),rgba(65, 105, 225, 1)); border: solid 1px RoyalBlue'
          break;
        case 'grass':
          return 'background: linear-gradient(rgba(0, 128, 0, 0),rgba(0, 128, 0, 1)); border: solid 1px Green'
          break;
        case 'electric':
          return 'background: linear-gradient(rgba(255, 215, 0, 0),rgba(255, 215, 0, 1)); border: solid 1px Gold'
          break;
        case 'psychic':
          return 'background: linear-gradient(rgba(123, 104, 238, 0),rgba(123, 104, 238, 1)); border: solid 1px MediumSlateBlue'
          break;
        case 'ice':
          return 'background: linear-gradient(rgba(30, 144, 255, 0),rgba(30, 144, 255, 1)); border: solid 1px DodgerBlue'
          break;
        case 'dragon':
          return 'background: linear-gradient(rgba(178, 34, 34, 0),rgba(178, 34, 34, 1)); border: solid 1px FireBrick'
          break;
        case 'dark':
          return 'background: linear-gradient(rgba(47, 79, 79, 0),rgba(47, 79, 79, 1)); border: solid 1px DarkSlateGrey'
          break;
        case 'fairy':
          return 'background: linear-gradient(rgba(255, 228, 181, 0),rgba(255, 228, 181, 1)); border: solid 1px Moccasin'
          break;
        case 'unknown':
          return 'background: linear-gradient(rgba(128, 128, 0, 0),rgba(128, 128, 0, 1)); border: solid 1px Olive'
          break;
        case 'shadow':
          return 'background: linear-gradient(rgba(175, 238, 238, 0),rgba(175, 238, 238, 1)); border: solid 1px PaleTurquoise'
          break;
      }
    }
  }
})