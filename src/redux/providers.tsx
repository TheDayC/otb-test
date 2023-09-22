'use client';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface ReduxProvidersProps {
    children: ReactNode;
}

const ReduxProvider: FC<ReduxProvidersProps> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
