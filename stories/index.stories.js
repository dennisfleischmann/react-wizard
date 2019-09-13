import React from 'react';
import { storiesOf } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import WizardCard from '../src/components/wizard/wizard-card';

storiesOf('Wizard', module)
    .add('WizardCard', () =>  <WizardCard title="Grundstück" icon={'property.svg'} />)
    .add('WizardCard', () =>  <WizardCard title="Grundstück" icon={'property.svg'} black="true"/>)
    .add('WizardCard Group', () => (
      <div class="card-group">
        <WizardCard title="Grundstück" icon={'property.svg'} />
        <WizardCard title="Haus" icon={'house.svg'}/>
        <WizardCard title="Wohnung" icon={'apartment.svg'}/>
        <WizardCard title="Gewerbe" icon={'commercial.svg'}/>
      </div>
    ));
