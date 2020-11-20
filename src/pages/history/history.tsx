import React from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useItems } from '../../services/items.service';
import BreastFeedItem from '../../components/breastfeed-item';
import { IItem } from '../../services/IItem';

const HistoryPage: React.FC = () => {
    let { getAll } = useItems();
    let [items] = React.useState(getAll());

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Historial</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Historial</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    {items.map((item: IItem, index: number) =>
                        <BreastFeedItem item={item} key={index} />
                    )}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default HistoryPage;