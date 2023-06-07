import { BugButton } from 'app/providers/ErrrorBoundary';
import Counter from 'entities/Counter/ui/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
