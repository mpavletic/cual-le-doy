import { IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { IVaccine } from "../services/IVaccine";

const VaccineItem: React.FC<{ vaccine: IVaccine }> = ({vaccine}) => {
    /**
     *
     * @param {number} age
     * @returns {String} User friendly age
     */
    let getAgeValue = (age: number) => {
        if (age === 0) {
            return 'Recién Nacido';
        } else if (age < 24) {
            return age + ' meses';
        }

        return (age / 12) + ' años';
    };

    return (
        <IonItem>
            <IonLabel>
            <h2>{vaccine.title}</h2>
            <h3>{vaccine.extra}</h3>
            <p>{getAgeValue(vaccine.age)}</p>
            </IonLabel>
        </IonItem>
    );
};

export default VaccineItem;