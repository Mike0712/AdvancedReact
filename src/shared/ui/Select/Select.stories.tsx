import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Choose value',
        options: [
            { value: '123', content: 'One point' },
            { value: '321', content: 'Two point' },
        ],
    },
};
