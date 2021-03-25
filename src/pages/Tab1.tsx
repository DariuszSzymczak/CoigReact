import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { connect } from 'react-redux';
import ExploreContainer from '../components/ExploreContainer';
import { Reducers } from '../store/reducers';
import './Tab1.css';
import { addValueToWallet } from './../store/actions/tab1'
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Portfel Euro COIG</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="center">
          <h1 className="ha1">0</h1>
          <IonButton color="primary" className="bt1">+</IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

const state = (state : Reducers) => ({
  walletValue : state.tab1Reducer.value
})

export default connect(state,{
  addValueToWallet
})(Tab1);
