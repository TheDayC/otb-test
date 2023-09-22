'use client';
import { FC } from 'react';
import Sidebar from '@/components/Sidebar';
import CardList from '@/components/CardList';

const Home: FC = () => {
    return (
        <div className="container mx-auto">
            <main className="flex min-h-screen flex-row items-start py-16">
                <div className="flex flex-col w-1/4 items-center">
                    <Sidebar />
                </div>
                <div className="flex flex-col w-3/4 gap-y-6 items-center">
                    <CardList />
                </div>
            </main>
        </div>
    );
};

export default Home;
