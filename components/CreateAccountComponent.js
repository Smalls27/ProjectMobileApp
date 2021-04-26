import React, { Component } from "react";
import { Card, Input, Button } from "react-native-elements";
import { NavigationEvents } from "react-navigation";

class CreateAccount extends Component {

    static navigationOptions = {
        title: "Create Account"
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Card title="Create Account" containerStyle={{marginTop: 100}}>
                <Input 
                    placeholder="Nickname"
                    leftIcon={{type: "font-awesome", name: "id-card"}}
                    leftIconContainerStyle={{paddingRight: 10}} 
                />
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
                    title="Submit"
                    onPress={() => navigate("Login")} 
                />
            </Card>
        )
    }
}

export default CreateAccount;
