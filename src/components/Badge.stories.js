import React from 'react';

import Badge from './Badge';

export default {
   component: Badge,
   title: 'Badge',
};

const Template = args => <Badge {...args} />;

export const Red = Template.bind({});
Red.args = {
   color: 'red',
   label: 'Badge',
};

export const Green = Template.bind({});
Green.args = {
   color: 'green',
   label: 'Badge',
};

export const Blue = Template.bind({});
Blue.args = {
   color: 'blue',
   label: 'Badge',
};

export const Purple = Template.bind({});
Purple.args = {
   color: 'purple',
   label: 'Badge',
};

export const Indigo = Template.bind({});
Indigo.args = {
   color: 'indigo',
   label: 'Badge',
};

export const Gray = Template.bind({});
Gray.args = {
   color: 'gray',
   label: 'Badge',
};