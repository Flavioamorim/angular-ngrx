import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { DECREMENTAR, INCREMENTAR, MULTIPLICAR } from './contador/contador.actions';
import { AppState } from './app.reducers';
import { SET_PESSOA, SET_NAME } from './pessoa/pessoa.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;
  public pessoa:any;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.subscribe(state => {
      this.contador = state.contador;
      this.pessoa = state.pessoa;
    });
  }

  incrementar() {
    const action = new INCREMENTAR();
    this.store.dispatch(action);
  }

  decrementar() {
    const action = new DECREMENTAR();
    this.store.dispatch(action);
  }

  multiplicar() {
    const action = new MULTIPLICAR(2);
    this.store.dispatch(action);
  }

  setname() {
    const action = new SET_NAME("Atletico name");
    this.store.dispatch(action);
  }

  setpessoa() {

    const action = new SET_PESSOA({
      name: "Vitor Santos Amorim",
      idade: 2,
      Endereco: "Malacacheta MG 39"
    });
    this.store.dispatch(action);
  }
}
