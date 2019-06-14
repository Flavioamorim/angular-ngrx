import { Action } from '@ngrx/store';

export enum ActionTypes {
    SET_PESSOA = '[Pessoa Component] SetPessoa',
    SET_NAME = '[Pessoa Component] SetName',
}

export class SET_PESSOA implements Action {
    readonly type = ActionTypes.SET_PESSOA;
    constructor(public payload: object) { }
}

export class SET_NAME implements Action {
    readonly type = ActionTypes.SET_NAME;
    constructor(public payload: string) { }
}

export type actions = SET_PESSOA;