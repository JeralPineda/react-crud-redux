// Cada reducer tiene su propio state
const initialState = {
   producto: [],
   error: null,
   loading: false,
};

export const productosReducer = (state = initialState, action) => {
   switch (action.type) {
      default:
         return state;
   }
};
