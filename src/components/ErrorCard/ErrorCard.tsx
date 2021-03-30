import React from 'react';
import { IonCard, IonIcon, IonCardContent, IonCardHeader } from '@ionic/react';
import { alertCircle } from 'ionicons/icons';

import './ErrorCard.css';

type ErrorCardProps = {
  content: string,
};

const ErrorCard: React.FC<ErrorCardProps> = ({ content }) => {
  return (
    <IonCard className="error-card">	
      <IonCardHeader color="light">
        <IonIcon icon={alertCircle} color="danger" size="large" />
      </IonCardHeader>
      <IonCardContent>
        {content}          
      </IonCardContent>
    </IonCard>
  );
};

export default ErrorCard;