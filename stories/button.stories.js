import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CallToAction from '../components/form/cta-button';

storiesOf("Builing Blocks | Button", module)
  .add('Call to Action', () => (
    <CallToAction label="Submit" onClick={action("button-click")}/>
  ))