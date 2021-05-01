import React from 'react';
import { View } from "react-native";
import Login from "./components/LoginComponent";
import Products from "./components/ProductComponent";
import CreateAccount from "./components/CreateAccountComponent";
import ProductCart from "./components/ProductCartComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Icon, Text } from "react-native-elements";

export default function App() {
  const LoginNavigator = createStackNavigator(
    {
      Login: {screen: Login}
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: 'rgba(0, 135, 255, .6)'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon type="font-awesome-5" name="sign-in-alt" iconStyle={{marginLeft: 20}} onPress={() => navigation.toggleDrawer()} />
      })
    }
  );
  
  const CreateAccountNavigator = createStackNavigator(
    {
      CreateAccount: {screen: CreateAccount}
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: 'rgba(0, 135, 255, .6)'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon type="font-awesome-5" name="file" iconStyle={{marginLeft: 25}} onPress={() => navigation.toggleDrawer()} />
      })
    }
  );

  const ProductsNavigator = createStackNavigator(
    {
      Products: {screen: Products}
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: 'rgba(0, 135, 255, .6)'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff'
        },
        headerLeft: <Icon type="font-awesome-5" name="box-open" iconStyle={{marginLeft: 20}} onPress={() => navigation.toggleDrawer()} />
      })
    }
  );

  const CartNavigator = createStackNavigator(
    {
      Cart: {screen: ProductCart}
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: 'rgba(0, 135, 255, .6)'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon type="font-awesome-5" name="list" iconStyle={{marginLeft: 20}} onPress={() => navigation.toggleDrawer()} />
      })
    }
  );

  const CustomHeaderDesign = props => {
    return (
      <View style={{backgroundColor: "rgba(0, 96, 178,)"}}>
        <View style={{height: 150, justifyContent: "center", backgroundColor: "rgb(0, 0, 0)"}} >
          <Text style={{fontSize: 30, textAlign: "center", color: "white"}}>RGM</Text>
        </View>
        <DrawerItems {...props} />
      </View>
    )
  }

  const MainNavigator = createDrawerNavigator(
    {
      Login: {
        screen: LoginNavigator,
        navigationOptions: {
          drawerIcon: <Icon type="font-awesome-5" 
                            name="sign-in-alt" 
                            size={24}
                      />
        }
      },
      CreateAccount: {
        screen: CreateAccountNavigator,
        navigationOptions: {
          drawerIcon: <Icon type="font-awesome-5" 
                            name="file" 
                            size={24}
                      />
        }
      },
      Products: {
        screen: ProductsNavigator,
        navigationOptions: {
          drawerIcon: <Icon type="font-awesome-5" 
                            name="box-open" 
                            size={19}
                      />
        }
      },
      Cart: {
        screen: CartNavigator,
        navigationOptions: {
          drawerIcon: <Icon type="font-awesome-5" 
                            name="list" 
                            size={24}
                      />
        }
      }
    },
    {
      contentComponent: CustomHeaderDesign
    }
  )

  const AppContainer = createAppContainer(MainNavigator);
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
        <AppContainer />
      </View>
    </Provider>
  )
}
