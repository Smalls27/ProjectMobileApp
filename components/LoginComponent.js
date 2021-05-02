import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Button, Input } from "react-native-elements";


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
    constructor(props) {
        super(props);
        this.state = {
            email: " ",
            password: " ",
            emailErr: " ",
            passwordErr: " ",
            emailInput: React.createRef(),
            passwordInput: React.createRef()
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    static navigationOptions = {
        title: "Login"
    }

    handleLogin() {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (regex.test(this.state.email) && this.state.password.length >= 7) {
            this.props.navigation.navigate("Products")
        } 
            
        if (!regex.test(this.state.email)) {
            this.setState({emailErr: "Email you entered must be a valid email."})
        } else {
            this.setState({emailErr: " "})
        }

        if (this.state.password.length < 7) {
            this.setState({passwordErr: "Password must be at least 7 characters long."})
        } else {
            this.setState({passwordErr: " "})
        }
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
                        ref={this.state.emailInput} 
                        placeholder="Email"
                        onChangeText={text => this.setState({email: text})}
                        leftIcon={{type: "font-awesome", name: "envelope"}}
                        leftIconContainerStyle={{paddingRight: 10}}
                        errorMessage={this.state.emailErr} 
                    />
                    <Input
                        ref={this.state.passwordInput}
                        placeholder="Password"
                        onChangeText={text => this.setState({password: text})} 
                        leftIcon={{type: "font-awesome", name: "key"}}
                        leftIconContainerStyle={{paddingRight: 10}} 
                        errorMessage={this.state.passwordErr}
                    />
                    <Button 
                        title="Log-in"
                        onPress={() => this.handleLogin()} 
                    />
                    <Button 
                        title="Create account here" 
                        buttonStyle={style.accountButtonColor}
                        onPress={() => navigate("CreateAccount")} 
                    />
                </Card>
                <Button buttonStyle={style.center} title="Click to retrieve Email/Password" onPress={() => navigate("Credential")} />
            </View>
        )
    }
}

export default Login;