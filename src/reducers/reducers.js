import { ACTION, ADD_DATA, REMOVE_DATA, UPDATE_DATA } from "../action/type";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return state;

    case ADD_DATA:
      {
        console.log([...state, action.payload],"payload")
        return [...state, action.payload];
      }

      case REMOVE_DATA:
        return state.filter((fData)=> action.payload.id !== fData.id);

      case UPDATE_DATA:{
        const UpadateState = state.map((fData) => {
          if (fData.id == action.payload.id) {
            fData.email = action.payload.email;
            fData.password = action.payload.password;
          }
          return fData;
        });
        return UpadateState;
      }
      

        default : return state ;
  }
};

export default reducer;
