import { ActionTypes, actions } from './contador.actions';

export const initialState = 10;

export function contadorReducer(state = initialState, action: actions) {
    switch (action.type) {
        case ActionTypes.Increment:
            console.log(ActionTypes.Increment)
            return state + 1;

        case ActionTypes.Decrement:
            return state - 1;


        case ActionTypes.Multiplicar:
            return state * action.payload;            

        case 'RESET':
            console.log("gaga")
            return 0;

        case 'TESTER':
            console.log("reduce testar")
            return 0;

        // return {
        //     data:'xxx',
        //     idade:17
        // };

        default:
            return state;
    }
}