import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import './free-bots.scss';

const FreeBots = observer(() => {
    const { ui } = useStore();
    const { isAuthorized } = ui;

    return (
        <div className='free-bots'>
            <div className='free-bots__container'>
                <h1 className='free-bots__title'>Free Bots</h1>
                <p className='free-bots__description'>
                    Explore our collection of free trading bots to automate your trading strategies.
                </p>
                <div className='free-bots__content'>
                    <p>Coming soon: Access to pre-built trading bots and strategies.</p>
                    {isAuthorized && (
                        <div className='free-bots__info'>
                            <p>You are logged in and can access this feature.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default FreeBots;
