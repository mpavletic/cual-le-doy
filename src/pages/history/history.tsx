import React from 'react';
import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useItems } from '../../services/items.service';
import BreastFeedItem from '../../components/breastfeed-item';
import { IItem } from '../../services/IItem';
import { trashOutline } from 'ionicons/icons';


const HistoryPage: React.FC = () => {
    let { getAll } = useItems();
    let [items] = React.useState(getAll());
    let [showRemoveAllAlert, setShowRemoveAllAlert] = React.useState(false);

    let removeAll = () => {
        setShowRemoveAllAlert(true);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Historial</IonTitle>
                    <IonButtons slot="secondary" onClick={(e) => removeAll()}>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={trashOutline} />
                        </IonButton>
                    </IonButtons>
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
                <IonAlert
                    isOpen={showRemoveAllAlert}
                    onDidDismiss={() => setShowRemoveAllAlert(false)}
                    header="Atención"
                    message="Todos los registros se van a borrar. Estás seguro?"
                    buttons={[{
                        role: 'cancel',
                        text: 'Cancelar'
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            // remove all
                        }
                    }]}
                />

            </IonContent>
        </IonPage>
    );
};

export default HistoryPage;