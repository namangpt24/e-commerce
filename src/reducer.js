export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => amount + item.price,0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "Add_to_basket":
            return{
                ...state,
                basket:[...state.basket,action.item],
            }
        case "Remove_from_basket":
         const index=state.basket.findIndex(
           (item)=> item.id===action.id
         );
         let newBasket =[...state.basket];
         if(index>=0)
         {
           newBasket.splice(index,1);
         }

          return{
             ...state,
             basket: newBasket,
          }

        case 'Set_user':
            return{
              ...state,
              user:action.user
            }
      default:
        return state;
    }
  };
  
  export default reducer;