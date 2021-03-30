import React from 'react';
import { IonAlert, IonContent, IonHeader, IonItemGroup, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { connect } from 'react-redux';

import { Reducers } from '../store/reducers';
import { fetchTodos, setTodoId, selectTodoById } from '../store/actions/tab3';
import './Tab3.css';
import ItemSliding from '../components/ItemSliding/ItemSliding';
import ErrorCard from '../components/ErrorCard/ErrorCard';

export type Tab3Props = {
  fetchTodos: any,
  todos: any[],
  todosError: string | undefined,
  setTodoId: any,
  selectedTodo: any
};

export type Tab3State = {
  isAlertDisplayed: boolean,
  alertMessage: string
};

class Tab3 extends React.Component<Tab3Props, Tab3State> {
  constructor(props: Tab3Props) {
    super(props);
    this.state = {
      isAlertDisplayed: false,
      alertMessage: ''
    };
  }

  async componentDidMount() {
    await this.props.fetchTodos();
  }

  async handleChooseBtnClick (id: number) {
    await this.props.setTodoId(id);

    const { userId, title } = this.props.selectedTodo;

    this.setState({ 
      isAlertDisplayed: true, 
      alertMessage: `Id usera: ${userId}, tytuł: ${title}`
    });
  }

  handleAlertDismiss = () => {
    this.setState({ isAlertDisplayed: false });
  }

  render () {
    const { todos, todosError } = this.props;
    const { isAlertDisplayed, alertMessage } = this.state;

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Todos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonItemGroup>
            { todosError ? (
                <ErrorCard content={todosError} />
              ) : (
                todos.map(todo => {
                  const { id, completed, title } = todo;
                  return (
                    <ItemSliding
                      key={id}
                      color={completed ? "success" : 'danger'}
                      // disabled
                      btnText='Wybierz'
                      onBtnClick={() => this.handleChooseBtnClick(id)}
                    >
                      Id: <strong>{id}</strong>
                      <br/>
                      Tytuł: {title}
                    </ItemSliding>
                  );
                })
              )
            }
          </IonItemGroup>

          <IonAlert
            isOpen={isAlertDisplayed}
            onDidDismiss={this.handleAlertDismiss}
            header={alertMessage}
            buttons={['OK']}
          />
        </IonContent>
      </IonPage>
    );
  }
};

const mapStateToProps = (state: Reducers) => ({
  todos: state.todos.todos,
  todosError: state.todos.error,
  selectedTodo: selectTodoById(state)
})

export default connect(mapStateToProps, {
  fetchTodos, setTodoId
})(Tab3);