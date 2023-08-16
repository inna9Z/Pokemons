import dom from '../dom.js';


import createPokemonList from '../components/createPokemonList.js';
import getPokemonById from '../../apis/getPokemonById.js';

const loadPokemon = async () => {
 debugger;
   // empty the root 
    dom.root.innerHTML = '';

    // get the input value
    const value = dom.input.value;

      // if not input , tell the user no input
    if (!value) {
    dom.error.innerText = 'Please entered Pokemon ids separate by ","'
    dom.error.classList.add('error');
    return;
}

     // get valid ids = [];

     const validIds = [];
     const values = value.split(',');
     values.forEach((val) => {
    const valNumber = Number(val);
    if (!Number.isNaN(valNumber) && valNumber > 0 && valNumber < 1281) {
        validIds.push(valNumber);
    }
     })
    

    // check if valid ids.length === 0, show message error

    if(validIds.length === 0) {
        dom.error.innerText = 'Please enter valid id';
        dom.error.classList.add('error');
        return;
    }

    // map through ids create array of promises

    const pokemonPromise = validIds.map((id) => getPokemonById(id))

    // promise.all

    const getPokemon = await Promise.all(pokemonPromise);

    // loop through result , create pokemon using component function and append to the root

    getPokemon.forEach((pokemonData) => {
        const pokemonDom = createPokemonList(pokemonData);
        dom.root.append(pokemonDom);
    })


};

export default loadPokemon;
