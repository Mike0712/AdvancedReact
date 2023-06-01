import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from './../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    decorators: [
        StyleDecorator,
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT)
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
