import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam non fugit distinctio sunt temporibus, vel eos, ea culpa iure expedita eveniet ducimus cumque quia odio perferendis praesentium ullam facere tempore in dolores. Excepturi earum sequi dolores neque cumque qui dolore mollitia aspernatur nisi? Sed modi ipsum vitae corrupti exercitationem eum quas omnis enim doloremque quidem officia nemo consequatur, a fugiat illum, possimus suscipit ad blanditiis. Ea mollitia sequi dolorum, laborum perferendis vel provident atque repellendus fugit consequuntur fuga nisi aliquid, nobis iste rem corrupti soluta quam dolor velit accusantium amet a molestiae reprehenderit optio. Incidunt quo odit perspiciatis deserunt.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam non fugit distinctio sunt temporibus, vel eos, ea culpa iure expedita eveniet ducimus cumque quia odio perferendis praesentium ullam facere tempore in dolores. Excepturi earum sequi dolores neque cumque qui dolore mollitia aspernatur nisi? Sed modi ipsum vitae corrupti exercitationem eum quas omnis enim doloremque quidem officia nemo consequatur, a fugiat illum, possimus suscipit ad blanditiis. Ea mollitia sequi dolorum, laborum perferendis vel provident atque repellendus fugit consequuntur fuga nisi aliquid, nobis iste rem corrupti soluta quam dolor velit accusantium amet a molestiae reprehenderit optio. Incidunt quo odit perspiciatis deserunt.',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
