import React, { Component } from "react";
import { Card, Text, Input, Button } from "react-native-elements";

class Credential extends Component {
    static navigationOptions = {
        title: "Credentials"
    }

    render() {

        const { navigate } = this.props.navigation

        return (
            <Card title="Retrieve Email/Password Information">
                <Text>Send us your email/username and your password/email will be forwarded to you.</Text>
                <Input placeholder="Email" containerStyle={{marginTop: 20}} />
                <Text style={{textAlign: "center", marginTop: 10, marginBottom: 10}}>or</Text>
                <Input placeholder="Nickname" />
                <Button title="Send" 
                        buttonStyle={{marginLeft: 10, marginRight: 10}} 
                        onPress={() => navigate("Login")} 
                />
            </Card>
        )
    }
}

export default Credential;