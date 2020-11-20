import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albumsOutline, homeOutline, informationCircleOutline, medkitOutline } from 'ionicons/icons';
import HomePage from './pages/home/home';
import InfoPage from './pages/info/info';
import Vaccines from './pages/vaccines/vaccines';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import HistoryPage from './pages/history/history';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={HomePage} exact={true} />
          <Route path="/info" component={InfoPage} exact={true} />
          <Route path="/vaccines" component={Vaccines} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="history" href="/history">
            <IonIcon icon={albumsOutline} />
            <IonLabel>Historial</IonLabel>
          </IonTabButton>
          <IonTabButton tab="vaccines" href="/vaccines">
            <IonIcon icon={medkitOutline} />
            <IonLabel>Vacunas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="info" href="/info">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>Info</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
