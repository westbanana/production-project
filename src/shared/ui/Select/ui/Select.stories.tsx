import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/ui/Select';
import AvatarImg from 'shared/ui/Avatar/storybook.jpg';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select option',
    options: [
        { value: '1', content: 'one' },
        { value: '2', content: 'two' },
        { value: '3', content: 'three' },
        { value: '4', content: 'four' },
    ],
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
};
