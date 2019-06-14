import { ActionTypes, actions } from "./pessoa.actions";

export const initialState = {
    name: "Flavio Amorim",
    idade: 45,
    Endereco: "rua jornalista joao bosco 39"
};

export function pessoaReduce(state = initialState, action: actions) {
    switch (action.type) {

        case ActionTypes.SET_PESSOA:
            return action.payload;

        case ActionTypes.SET_NAME:
            state.name = action.payload;
            return state;

        default:
            return state;
    }
}