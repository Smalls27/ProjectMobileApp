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
import { createDrawerNavigator } from "react-navigation-drawer";

export default function App() {
  const LoginNavigator = createStackNavigator(
    {
      Login: {screen: Login}
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
      }
    }
  );
  
  const CreateAccountNavigator = createStackNavigator(
    {
      CreateAccount: {screen: CreateAccount}
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
      }
    }
  );

  const ProductsNavigator = createStackNavigator(
    {
      Products: {screen: Products}
    },
    {
      defaultnavigationOptions: {
        headerStyle: {
          backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
      }
    }
  );

  const CartNavigator = createStackNavigator(
    {
      Cart: {screen: ProductCart}
    },
    {
      defaultNavigationOptions : {
        headerStyle: {
          backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
      }
    }
  );

  const MainNavigator = createDrawerNavigator(
    {
      Login: {screen: LoginNavigator},
      CreateAccount: {screen: CreateAccountNavigator},
      Products: {screen: ProductsNavigator},
      Cart: {screen: CartNavigator}
    },
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
