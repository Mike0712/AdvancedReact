import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        <I18nextProvider i18n={i18nForTests}>
            {story()}
        </I18nextProvider>
    </BrowserRouter>
);
