import React from 'react';

import Button from './Button';

export default {
   component: Button,
   title: 'Button',
   description: 'Hello world!'
};

const Template = args => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
   label: 'Save changes',
   color: 'red',
};

export const Rose = Template.bind({});
Rose.args = {
   label: 'Save changes',
   color: 'rose',
};

export const Orange = Template.bind({});
Orange.args = {
   label: 'Save changes',
   color: 'orange',
};

export const Yellow = Template.bind({});
Yellow.args = {
   label: 'Save changes',
   color: 'yellow',
};

export const Green = Template.bind({});
Green.args = {
   label: 'Save changes',
   color: 'green',
};

export const Sky = Template.bind({});
Sky.args = {
   label: 'Save changes',
   color: 'sky',
};

export const Blue = Template.bind({});
Blue.args = {
   label: 'Save changes',
   color: 'blue',
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