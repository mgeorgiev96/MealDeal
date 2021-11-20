import React from 'react'
import {Header} from 'react-native-elements'

function HeaderComp(props) {
    return (
        <Header
            statusBarProps={{ barStyle: 'dark-content',backgroundColor: "white" }}
            leftComponent={props.leftComponent}
            centerComponent={props.centerComponent}
            rightComponent={props.rightComponent}
            containerStyle={{
                backgroundColor: props.headerColor,
                paddingVertical: 25,
                borderBottomColor: props.borderColor,
                borderBottomWidth: 1
            }}
        />
    )
}

export default HeaderComp
