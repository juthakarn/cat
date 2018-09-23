import React ,{Component} from 'react';
import { Text, View} from 'react-native';

class Detail extends Component {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Introduction to the cat</Text>
                <Button
                    raised
                    onPress={() => this.props.navigation.navigate("Tab1",{ hideTabBar: true })}
                >
                    <Text>อุปกรณ์ที่จำเป็นสำหรับการเลี้ยงแมว</Text>
                </Button>
                <Button
                    raised
                    onPress={() => this.props.navigation.navigate("Tab2",{ hideTabBar: true })}
                >
                    <Text>โรคที่ควรรู้เบื้องต้น</Text>
                </Button>
            </View>
        )
    }
}
export default Detail