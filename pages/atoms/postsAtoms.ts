
import { atom, selector } from 'recoil';
import axios from 'axios';


export const allCakesState = selector({
  key: 'allCakesState',
  get: async ({ get }) => {
  
    // const cakes = get(filteredCakesState);
    try {
      const res = await axios.get('https://pasteleriaaxiova-api.herokuapp.com/api/pasteles');
      return res.data || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
});

export const filteredCakesState = atom({
  key: 'filteredCakesState',
  default: allCakesState,
});

