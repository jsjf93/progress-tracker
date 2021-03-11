import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator(withKnobs);
