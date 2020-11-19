import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import './info.css';
import { InAppBrowser } from '@ionic-native/in-app-browser';

const InfoPage: React.FC = () => {
  let openLink = (link: string) => {
      InAppBrowser.create(link, '_blank');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Información Útil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Información Útil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>¿Qué es?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>La lactancia materna es reconocida como la forma óptima de alimentación temprana, por sus innumerables beneficios sobre la salud de las mujeres y los niños, tanto a corto como a largo plazo.</p>
            <p>Se recomienda que los niños sean amamantados exclusivamente hasta los 6 meses de vida cumplidos y que, a partir de ese momento, comiencen a introducir alimentos en su dieta sin abandonar la lactancia materna. Idealmente, la lactancia materna complementada con alimentos debe extenderse hasta los 2 años o más de vida del niño.</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              ¿Cuáles son los beneficios de la <br />leche materna?
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>La leche materna le brinda al recién nacido, todos los elementos que necesita para su crecimiento y desarrollo saludables.
              El calostro, la primera leche de la mamá, de color amarillento, es el mejor alimento que puede recibir el bebé ya
              que lo defiende de las infecciones más comunes.</p>
            <p>Además, la leche materna está adaptada a las necesidades y posibilidades de su hijo y por ello se digiere más fácilmente
              que cualquier otra leche. La leche materna es más segura e higiénica porque el niño la toma directamente de su mamá.</p>
            <p>A través de su leche, la mamá le transmite al bebé factores de protección (“anticuerpos”) que lo protegen contra las
              enfermedades más comunes cuando son muy pequeños y hasta que sean capaces de formar sus propias defensas.</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              ¿Qué es la lactancia a demanda?
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Es importante alimentar al bebé cada vez que lo pida, durante el día y la noche; esto se llama “lactancia a demanda”.
              Los bebés piden cuando tienen hambre o sed, y esto favorece que la madre produzca toda la leche que su hijo necesita.</p>
            <p>La mamá podrá identificar los signos tempranos de hambre del niño, como chuparse la mano, buscar el pecho con la boca
              o chasquear los labios. El llanto no siempre indica hambre, sino que es la forma que tiene bebé para expresar también
              otras necesidades.</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              ¿Cómo continuar con la lactancia <br />en la vuelta al trabajo?
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p>El trabajo fuera del hogar es parte de la vida de muchísimas mujeres y la legislación prevé el derecho de las madres
            a amamantar a sus bebés asegurando descansos para lactancia. En estos casos la mamá puede extraerse leche (con una
            bomba o manualmente) y conservarla en un recipiente limpio y tapado. La leche se entibia a baño María (con el fuego
            apagado); no debe hervirse ni ser calentada en microondas para que no pierda sus propiedades.</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              ¿Cuál es la mejor posición <br />para amamantar?
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Existen muchas posiciones para amamantar, al principio es recomendable variarla para asegurar un mejor vaciado del
              pecho. Con el tiempo, la mamá y el bebé encontrarán la que les resulte más cómoda.</p>
            <p>Es importante saber que el cuerpo del bebé tiene que estar bien pegado a la mamá (ella no debe inclinarse hacia el
              bebé sino que el bebé debe ser llevado hacia el cuerpo de la mamá); la boca del bebé debe estar bien abierta y tomar
              la mayor parte posible de la areola, y la mamá debe estar cómoda sin tensiones en el cuerpo.</p>
              <IonSlides pager={true} options={{initialSlide: 0, speed: 400}}>
                <IonSlide>
                  <IonCard>
                    <img src="assets/images/lactancia-1.png" alt="Posicion Clasica"/>
                  </IonCard>
                </IonSlide>
                <IonSlide>
                  <IonCard>
                    <img src="assets/images/lactancia-2.png" alt="Clasica Cruzada" />
                  </IonCard>
                </IonSlide>
                <IonSlide>
                  <IonCard>
                    <img src="assets/images/lactancia-3.png" alt="Inversa" />
                  </IonCard>
                </IonSlide>
                <IonSlide>
                  <IonCard>
                    <img src="assets/images/lactancia-4.png" alt="Acostada" />
                  </IonCard>
                </IonSlide>
              </IonSlides>
          </IonCardContent>
        </IonCard>

        <p className="ion-margin">
          <strong>Ilustraciones de Carlos Bonardi.</strong>&nbsp;Fuente: Art&iacute;culo de La Naci&oacute;n, "Consejos para lograr
          una lactancia exitosa".
        </p>
        <IonButton
          className="ion-margin ion-text-wrap"
          expand="block"
          fill="clear"
          onClick={(e) => openLink('http://www.lanacion.com.ar/1140292-consejos-para-lograr-una-lactancia-exitosa')}
        >
          Consejos para lograr una lactancia exitosa
        </IonButton>
        <p className="ion-margin">
          <strong>Fuente: Ministerio de Salud.</strong>"Lactancia Materna", sitio web "Lactancia Materna".
        </p>
        <IonButton
          className="ion-margin"
          expand="block"
          fill="clear"
          onClick={(e) => openLink('https://www.argentina.gob.ar/salud/crecerconsalud/lactancia')}
        >
          Lactancia Materna
        </IonButton>
        <p className="ion-margin">
          <strong>Para mayor informaci&oacute;n sobre la lactancia, no dudes en consultar www.dardemamar.com.</strong>
          En este sitio podr&aacute;s encontrar articulos, consejos &uacute;tiles, aplicaciones para descargar y muchas cosas m&aacute;s.
        </p>
          <IonButton
            className="ion-margin"
            expand="block"
            fill="clear"
            onClick={(e) => openLink('http://www.dardemamar.com/')}
          >
            Dar de mamar
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default InfoPage;
