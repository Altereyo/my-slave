import { Button, ButtonGroup, useRouter } from '@urban-bot/core';
import React from 'react';

const Home = () => {

    const router = useRouter();

    return(
        <ButtonGroup title={'Чем могу помочь?'}>
            <Button onClick={() => router.navigate('/add')}>Add</Button>
            <Button onClick={() => router.navigate('/test')}>Test</Button>
        </ButtonGroup>
    )
}
export default Home;