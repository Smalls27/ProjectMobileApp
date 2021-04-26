import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Icon, Card } from "react-native-elements";
import { connect } from "react-redux";
import { removeProductFromCart } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        addedProductsToBuy: state.addedProductsToBuy,
        total: state.total
    }
}

const mapDispatchToProps = {
    removeProductFromCart: id => removeProductFromCart(id)
}

const TotalSpend = (props) => {
    return (
        <View style={{backgroundColor: "rgba(0, 0, 0, 0.7)", flexDirection: "row"}}>
            <Text style={{fontSize: 20, padding: 10, color: "white", width: 200}}>Total Price: ${props.total}</Text>
            <Button title="Checkout" 
                    buttonStyle={{marginLeft: 70, marginTop: 3, backgroundColor: "rgba(40, 158, 234, 0.8)"}}
                    icon={<Icon type="font-awesome-5" name="shopping-cart" iconStyle={{marginRight: 10}} />}
            />
        </View>
    )
}

class ProductCart extends Component {
    static navigationOptions = {
        title: "Cart"
    }

    handleRemove(id) {
        this.props.removeProductFromCart(id)
        console.log(this.props.products)
    }

    render() {

        const productsToBuy = this.props.addedProductsToBuy.map(product => {
                return (
                   <ScrollView key={product.id}>
                        <Card image={{uri: product.image}}> 
                            <Text style={{fontSize: 30}}>{product.name}</Text>
                            <Text style={{marginTop: 5, marginBottom: 20}}>{product.description}</Text>
                            <View style={{marginBottom: 10, flexDirection: "row"}}>
                                <Text style={{fontWeight: "bold"}}>Price: ${product.price}</Text> 
                                <Text style={{marginLeft: 210}}>Quantity: {product.quantity}</Text>
                            </View>
                            <Button 
                                title="Remove" 
                                icon={<Icon type="font-awesome-5" name="trash" iconStyle={{marginRight: 10}} />}
                                onPress={() => this.handleRemove(product.id)} 
                            />
                        </Card>
                    </ScrollView>                        
                )
            }); 

        return (
            <ScrollView stickyHeaderIndices={[0]}>
                <TotalSpend total={this.props.total} />
                {productsToBuy}
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);