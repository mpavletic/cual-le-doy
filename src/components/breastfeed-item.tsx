import { IonBadge, IonItem, IonLabel, IonNote } from '@ionic/react';
import React from 'react';
import  TimeAgo from 'react-timeago';
import { IItem } from '../services/IItem';

import spanishStrings from 'react-timeago/lib/language-strings/es';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(spanishStrings);

const BreastFeedItem: React.FC<{ item: IItem }> = ({item}) => {
    const getDuration = (duration: number) => {
        // one minute in miliseconds
        const minute = 60000;

        return Math.floor(duration / minute) + ' min';
    };

    return (
        <IonItem>
            <IonBadge slot="start" color={item.isLeft ? "primary" : "secondary"}>{item.isLeft ? "IZQ" : "DER"}</IonBadge>
            <IonLabel>
                <TimeAgo date={item.date} live={false} minPeriod={60} formatter={formatter} />
            </IonLabel>
            <IonNote slot="end" color="primary">{getDuration(item.duration)}</IonNote>
        </IonItem>
    );
};

export default BreastFeedItem;