import { IonBadge, IonItem, IonLabel, IonNote } from '@ionic/react';
import React from "react";
import { IItem } from "../services/IItem";

const BreastFeedItem: React.FC<{ item: IItem }> = ({item}) => {
    const getDuration = (duration: number) => {
        // one minute in miliseconds
        const minute = 60000;

        return Math.floor(duration / minute) + ' min';
    };

    return (
        <IonItem>
            <IonBadge slot="start" color={item.isLeft ? "primary" : "secondary"}>{item.isLeft ? "IZQ" : "DER"}</IonBadge>
            <IonLabel>{item.date}</IonLabel>
            <IonNote slot="end" color="primary">{getDuration(item.duration)}</IonNote>
        </IonItem>
    );
};

export default BreastFeedItem;