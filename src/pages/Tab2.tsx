import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, withIonLifeCycle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React from 'react';
import { HTTP } from '@ionic-native/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

class Tab2 extends React.Component  {
  
  constructor(props: any) {
    super(props);
    this.state = {
        alertMsg: '',
        login: '',
        password: '',
        isLoading: false,
        doubleExit: false,
        loadingMessage: '',
        loadedServices: {
            magazines: false,
            turnOverDates: false,
            rangeOfActivities: false,
            units: false
        },
        loadingAgain: false,
        antyBruteForce: 0,
        alert: {
            isAlertDisplayed: false,
            alertMessage: ''
        }
    }
}
  async ionViewWillEnter() {
    const response = await HTTP.get('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1', {}, {});
    console.log(response);
    const json = JSON.parse(response.data);
    console.log(json);
    this.createDatabase();
  }
  createDatabase() {
    SQLite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table danceMoves(name VARCHAR(32))', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
  render() {  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 2 page" />
        </IonContent>
      </IonPage>
    );
  }
};
export default withIonLifeCycle(Tab2);