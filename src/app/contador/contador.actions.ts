import { Action } from '@ngrx/store';

export enum ActionTypes {
    Increment = '[Counter Component] Increment',
    Decrement = '[Counter Component] Decrement',
    Reset = '[Counter Component] Reset',
    Multiplicar = '[Counter Component] Multiplicar',
}

export class INCREMENTAR implements Action {
    readonly type = ActionTypes.Increment;
}

export class DECREMENTAR implements Action {
    readonly type = ActionTypes.Decrement;
}

export class MULTIPLICAR implements Action {
    readonly type = ActionTypes.Multiplicar;
    constructor(public payload:number){}
}

export class RESET implements Action {
    readonly type = ActionTypes.Reset;
}


export type actions = INCREMENTAR | DECREMENTAR | MULTIPLICAR | RESET;