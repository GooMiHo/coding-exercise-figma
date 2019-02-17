import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import addons, { mockChannel } from '@storybook/addons';
const channel = addons.getChannel();
addons.setChannel(channel);

import Main from '../client/components/main';

storiesOf('Main', module)
  .add('TLC-Footer-Email-List-Sign-Up', () => <Main onClick={action('clicked')} />);
