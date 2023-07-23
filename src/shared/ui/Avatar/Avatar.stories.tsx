import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './avatar.jpeg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 75,
        src: AvatarImg,
    },
};
