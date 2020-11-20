import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { play, square } from 'ionicons/icons';

import { useItems } from '../../services/items.service';
import { IItem } from '../../services/IItem';
import BreastFeedItem from '../../components/breastfeed-item';

import './home.css';

const HomePage: React.FC = () => {
  const [selected, setSelected] = useState<string>('left');
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const { add, getAll, getActual, updateActual } = useItems();
  const [items, setItems] = React.useState(getAll());

  let start = () => {
    setHasStarted(true);
    add({
      date: new Date().getTime(),
      duration: 0,
      isLeft: selected === 'left'
    });

    setSelected(selected === 'left' ? 'right' : 'left');
    setItems(getAll());
  };

  let stop = () => {
    setHasStarted(false);
    let item = getActual();
    if (item) {
      item.duration = new Date().getTime() - item.date;
      updateActual(item);
    }
    setItems(getAll());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <IonItem>
              <IonLabel>Izquierda</IonLabel>
              <IonRadio slot="start" value="left"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Derecha</IonLabel>
              <IonRadio slot="start" value="right"></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                color="success"
                disabled={hasStarted}
                expand="block"
                onClick={e => start()}
              >
                <IonIcon slot="start" icon={play}></IonIcon>
                Iniciar
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color="light"
                disabled={!hasStarted}
                expand="block"
                onClick={e => stop()}
              >
                <IonIcon slot="start" icon={square}></IonIcon>
                Detener
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {items.slice(0, 10).map((item: IItem, index: number) =>
            <BreastFeedItem item={item} key={index} />
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
