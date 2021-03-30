import React from 'react';
import { IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from '@ionic/react';

type ItemSlidingProps = {
  children: React.ReactNode,
  color: string,
  disabled?: boolean,
  btnText?: string,
  btnColor?: string,
  onBtnClick?: (event: React.MouseEvent<HTMLIonItemOptionElement, MouseEvent>) => void,
};

const ItemSliding: React.FC<ItemSlidingProps> = ({ children, color, disabled = false, btnText, btnColor = 'primary', onBtnClick }) => {
  return (
    <IonItemSliding disabled={disabled}>
      <IonItem lines="full">
        <IonLabel color={color}> 
          {children}
        </IonLabel>
      </IonItem>
      <IonItemOptions>
        { btnText && onBtnClick ? (
            <IonItemOption color={btnColor} onClick={onBtnClick}>
              {btnText}
            </IonItemOption>
          ) : (
            <></>
          )
        }
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default ItemSliding;