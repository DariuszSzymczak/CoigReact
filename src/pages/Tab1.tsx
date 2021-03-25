import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { connect } from 'react-redux';
import { Reducers } from '../store/reducers';
import './Tab1.css';
import { addValueToWallet } from './../store/actions/tab1'
import { tab1ReducerAction } from '../store/reducers/tab1';

export type Tab1Props= {
  walletValue : number,
  addValueToWallet : (value : number) => tab1ReducerAction
}

export type Tab1State ={

}
class Tab1 extends React.Component<Tab1Props, Tab1State>  {

addButtonHandler = () => {
  let oldWalletValue = this.props.walletValue;
  let newWalletValue = oldWalletValue + 1;
  this.props.addValueToWallet(newWalletValue);
}

render(){
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Portfel Euro COIG</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="center">
          <h1 className="ha1">{this.props.walletValue}</h1>
          <IonButton color="primary" className="bt1" onClick={this.addButtonHandler}>+</IonButton>
        </div>

      </IonContent>
    </IonPage >
  )
}

}

const state = (state: Reducers) => ({
  walletValue: state.tab1Reducer.value
})

export default connect(state, {
  addValueToWallet
})(Tab1);
