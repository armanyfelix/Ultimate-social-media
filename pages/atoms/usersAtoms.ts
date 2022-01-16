import { atom, selector } from 'recoil';
import axios from 'axios';
import Gun from 'gun';
import 'gun/sea'


export const sessionState = selector({
  key: 'sessionState',
  get: ({ get }) => {
    const gun = Gun();
    const user = gun.user();
    if (user.is) {
      return true;
    } else {
      return false;
    }
    // try {
    //   const res = await axios.get('https://pasteleriaaxiova-api.herokuapp.com/api/pasteles');
    //   return res.data || [];
    // } catch (error) {
    //   console.log(error);
    //   return [];
    // }
  }
});


// export const filteredCakesState = atom({
//   key: 'filteredCakesState',
//   default: allCakesState,
// });

