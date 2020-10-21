import React from 'react';

import Button from './Button';

export default {
   component: Button,
   title: 'Button',
};

const Template = args => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
   label: 'Save changes',
   color: 'blue',
};

export const Red = Template.bind({});
Red.args = {
   label: 'Save changes',
   color: 'red',
};

export const Green = Template.bind({});
Green.args = {
   label: 'Save changes',
   color: 'green',
};

export const Purple = Template.bind({});
Purple.args = {
   label: 'Save changes',
   color: 'purple',
};

export const Indigo = Template.bind({});
Indigo.args = {
   label: 'Save changes',
   color: 'indigo',
};
