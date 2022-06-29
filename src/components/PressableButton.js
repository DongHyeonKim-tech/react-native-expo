import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const PressableButton = (
    {
        text
    }
) => {

    const onPressIn = () => {
        console.log("onPressIn");
    };
    const onPressOut = () => {
        console.log('onPressOut!!!!!');
    };
    const onLongPress = () => console.log('onLongPress');
    const onPress = () => console.log('onPress');

    return (
        <Pressable
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onLongPress={onLongPress}
            onPress={onPress}
            onTouchStart={() => console.log('onTouchStart')}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>{text}</Text>
        </Pressable>
    )
};

PressableButton.propTypes = {
    text: PropTypes.string
};

export default PressableButton;
