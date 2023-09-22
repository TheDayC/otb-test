'use client';
import { FC } from 'react';
import Sidebar from '@/components/Sidebar';

const Home: FC = () => {
    return (
        <main className="flex min-h-screen flex-row items-start justify-between p-24">
            <Sidebar />
        </main>
    );
};

export default Home;
