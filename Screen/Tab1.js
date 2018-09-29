import React from "react";
import { View, Text, Button } from "react-native";

class Tab1 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="Press to stack " onPress={() => { this.props.navigation.navigate('Tab3') }} />
                <Text>อุปกรณ์เลี้ยงแมวเบื้องต้น</Text>
            </View>
        );
    }
}

export default Tab1;