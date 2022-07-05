import React, { useState } from 'react';
import { Text, useText } from '@urban-bot/core';

const Help = () => {

    const [text, setText] = useState("Say something");

    useText(({ text }) => {
        setText(text);
    });

    return(
        <Text>Test</Text>
    )
}

export default Help;