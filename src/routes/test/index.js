import React, { useState } from 'react';
import { Text, useText } from '@urban-bot/core';

const Test = () => {

    const [text, setText] = useState("Say something");

    useText(({ text }) => {
        setText(text);
    });

    return(
        <Text>Test</Text>
    )
}

export default Test;