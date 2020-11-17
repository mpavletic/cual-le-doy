import React, { useState } from 'react';
import {
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './vaccines.css';

const Vaccines: React.FC = () => {
  const maxDate = new Date().toISOString();
  const [bornDate, setBornDate] = useState<string>(new Date().toISOString());

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vacunas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vacunas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Fecha de nacimiento</IonLabel>
          <IonDatetime
            cancelText="Cancelar"
            displayFormat="DD/MM/YYYY"
            doneText="Listo"
            max={maxDate}
            onIonChange={e => setBornDate(e.detail.value!)}
            value={bornDate}
          ></IonDatetime>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Vaccines;
