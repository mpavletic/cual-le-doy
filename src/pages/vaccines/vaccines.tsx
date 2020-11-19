import React from 'react';
import {
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './vaccines.css';
import { IVaccine } from '../../services/IVaccine';
import VaccinesService from '../../services/vaccines.service';
import VaccineItem from '../../components/vaccine-item';

const Vaccines: React.FC = () => {
  let [bornDate, setBornDate] = React.useState(
    localStorage.getItem('bornDate') || new Date().toISOString()
  );
  let [items, setItems] = React.useState(
    VaccinesService.getVaccinesFrom(bornDate)
  );

  React.useEffect(() => {
    localStorage.setItem('bornDate', bornDate);
  }, [bornDate]);

  let onIonDatetimeChange = (event: any) => {
    setBornDate(event.detail.value);
    setItems(VaccinesService.getVaccinesFrom(event.detail.value));
  };

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
        <IonList>
          <IonListHeader>
            Calendario de Vacunación
          </IonListHeader>
          {items.map((vaccine: IVaccine, index: number) =>
            <VaccineItem vaccine={vaccine} key={index} />
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Vaccines;
