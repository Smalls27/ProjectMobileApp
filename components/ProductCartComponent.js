import React, { Component, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Modal } from "react-native";
import { Button, Icon, Card, Input } from "react-native-elements";
import { connect } from "react-redux";
import { removeProductFromCart, increaseProductQuantity, decreaseProductQuantity, addingUpQuantity } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        addedProductsToBuy: state.addedProductsToBuy,
        total: state.total,
    }
}

const mapDispatchToProps = {
    removeProductFromCart: id => removeProductFromCart(id),
    increaseProductQuantity: id => increaseProductQuantity(id),
    decreaseProductQuantity: id => decreaseProductQuantity(id),
    addingUpQuantity: () => addingUpQuantity()
}

const TotalSpend = (props) => {
    const [showModal, setShowModal] = useState(false);
    const buyingProducts = props.productsToBuy.map(product => {
        return (
            <View style={style.checkoutList}>
                <Text style={{width: 130, textAlign: "center", fontSize: 16}} >{product.name}</Text>
                <Text style={{width: 130, textAlign: "center", fontSize: 16}}>{product.quantity}</Text>
                <Text style={{width: 130, textAlign: "center", fontSize: 16}}>{product.price}</Text>
            </View>
        )
    })

    return (
        <View style={{backgroundColor: "rgba(0, 0, 0, 0.7)", flexDirection: "row"}}>
            <Text style={{fontSize: 20, padding: 10, color: "white", width: 200}}>Total Price: ${props.total}</Text>
            <Button title="Checkout" 
                    buttonStyle={{marginLeft: 70, marginTop: 3, backgroundColor: "rgba(40, 158, 234, 0.8)"}}
                    icon={<Icon type="font-awesome-5" name="shopping-cart" iconStyle={{marginRight: 10}} />}
                    onPress={() => setShowModal(true)}
            />
            <Modal transparent={false} visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)}>
                <View style={{marginTop: 30}}>
                    <View style={style.shadow} >
                        {buyingProducts}
                    </View>
                    <View style={style.contentDividerAdjacent} />
                    <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 20}}>
                        <Text style={{fontSize: 20}} >Total:</Text>
                        <Text style={{fontSize: 20}} >${props.total}</Text>
                    </View>
                    <View style={style.contentDivider} />
                    <Card title="Credit Card Information" >
                        <Input placeholder="Name on Card" 
                                leftIcon={{type: "font-awesome-5", name: "signature"}} 
                                leftIconContainerStyle={{marginTop: 20, marginRight: 5}} 
                        />
                        <Input placeholder="Card Number" 
                                leftIcon={{type: "font-awesome-5", name: "credit-card"}} 
                                leftIconContainerStyle={{marginRight: 5}} 
                        />
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Input placeholder="Expiration" 
                                    leftIcon={{type: "font-awesome-5", name: "exclamation-triangle"}}
                                    leftIconContainerStyle={{marginRight: 5}}
                                    containerStyle={{width: 170}} 
                            />
                            <Input placeholder="Security Code"
                                    leftIcon={{type: "font-awesome-5", name: "lock"}}
                                    leftIconContainerStyle={{marginRight: 5}}
                                    containerStyle={{width: 170}} 
                            />
                        </View>
                        <Button title="Buy" 
                                icon={<Icon type="font-awesome-5" name="coins" iconStyle={{marginRight: 8}} />}
                                buttonStyle={{marginLeft: 10, marginRight: 10, marginBottom: 10}}
                                onPress={() => props.navigate.navigate("Products")}

                        />
                        <Button title="Cancel" 
                                onPress={() => setShowModal(false)} 
                                buttonStyle={{backgroundColor: "black", marginLeft: 10, marginRight: 10}}
                        />
                    </Card> 
                </View>
            </Modal>
        </View>
    )
}

class ProductCart extends Component {
    static navigationOptions = {
        title: "Cart"
    }

    handleRemove(id) {
        this.props.removeProductFromCart(id)
    }

    handleIncreaseQuantity(id) {
        this.props.increaseProductQuantity(id)
    }

    handleDecreaseQuantity(id) {
        this.props.decreaseProductQuantity(id)
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
                            <View style={{marginBottom: 5, flexDirection: "row", justifyContent: "center"}}>
                                <Button onPress={() => this.handleIncreaseQuantity(product.id)} 
                                        icon={<Icon type="font-awesome-5" 
                                        name="plus" />} 
                                />
                                <View style={style.quantityContainer}>
                                    <Text style={style.textmargin}>{product.quantity}</Text>
                                </View>
                                <Button onPress={() => this.handleDecreaseQuantity(product.id)} 
                                        icon={<Icon type="font-awesome-5"
                                        name="minus" />} 
                                />
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
                <TotalSpend total={this.props.total} 
                            productsToBuy={this.props.addedProductsToBuy} 
                            totalQuantity={this.props.totalQuantity}
                            navigate={this.props.navigation}
                />
                {productsToBuy}
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    quantityContainer: {
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        width: 60,
        justifyContent: "center"
    },

    textmargin: {
        textAlign: "center"
    },

    checkoutList: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row"
    },

    contentDivider: {
        marginLeft: 10, 
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, .2)"
    },

    contentDividerAdjacent: {
        marginLeft: 10, 
        marginRight: 10,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, .2)"
    },

    shadow: {
        backgroundColor: "rgba(0, 0, 0, .1)",
        elevation: 5,
        borderRadius: 5
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);