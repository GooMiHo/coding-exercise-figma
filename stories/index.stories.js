import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Main from '../client/components/main';

storiesOf('Main', module)
  .add('TLC-Footer-Email-List-Sign-Up', () => <Main onClick={action('clicked')} />);
