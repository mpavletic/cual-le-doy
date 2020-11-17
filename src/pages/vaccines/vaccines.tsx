import React from 'react';
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
  const [bornDate, setBornDate] = React.useState(
    localStorage.getItem('bornDate') || new Date().toISOString()
  );

  React.useEffect(() => {
    localStorage.setItem('bornDate', bornDate);
  }, [bornDate]);

  const onIonDatetimeChange = (event: any) => setBornDate(event.detail.value);

  const maxDate = new Date().toISOString();

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
            onIonChange={onIonDatetimeChange}
            value={bornDate}
          ></IonDatetime>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Vaccines;
