import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Input, Button } from "react-native-elements";
import { render } from "react-dom";

const style = StyleSheet.create({
    someMargin: {
        marginTop: 50
    },

    textMargin: {
        marginTop: 10
    },

    accountButtonColor: {
        backgroundColor: "rgb(0, 0, 0)",
        marginTop: 10
    },

    titleScreen: {
        fontSize: 40,
        marginTop: 10,
        marginLeft: 145
    },

    center: {
        width: 363,
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15
    }
});

class Login extends Component {
    
    static navigationOptions = {
        title: "Login"
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View>
                    <Text style={style.titleScreen}>RGM</Text>
                </View>
                <Card title="Log-in" containerStyle={style.someMargin}>
                    <Input 
                        placeholder="Email"
                        leftIcon={{type: "font-awesome", name: "envelope"}}
                        leftIconContainerStyle={{paddingRight: 10}} 
                    />
                    <Input 
                        placeholder="Password"
                        leftIcon={{type: "font-awesome", name: "key"}}
                        leftIconContainerStyle={{paddingRight: 10}} 
                    />
                    <Button 
                        title="Log-in"
                        onPress={() => navigate("Products")} 
                    />
                    <Button 
                        title="Create account here" 
                        buttonStyle={style.accountButtonColor}
                        onPress={() => navigate("CreateAccount")} 
                    />
                </Card>
                <Button buttonStyle={style.center} title="Click to retrieve Email/Password" />
            </View>
        )
    }
}

export default Login;