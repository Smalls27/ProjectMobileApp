import React, { Component } from "react";
import { addProductToCart, colorChange } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { Card, Button, Icon } from "react-native-elements";
import { ScrollView, Text, View } from "react-native";

const mapStateToProps = state => {
    return {
        products: state.products,
        color: state.color,
    }
}

const mapDispatchToProps = {
    addProductToCart: id => addProductToCart(id),
    colorChange: id => colorChange(id)
}

const Greeting = () => {
    return (
        <Card title="Give Your Home A Makeover" 
              titleStyle={{color: "white"}} 
              containerStyle={{backgroundColor: "rgb(0, 156, 219)"}} 
        >
            <Text style={{color: "white"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus 
                id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</Text>
        </Card>
    )
}

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }
    
    static navigationOptions = {
        title: "Products"
    }

    handleCartSubmit(id) {
        this.props.addProductToCart(id)
        this.props.colorChange(id)
    }

    wasPressed(wasPressed) {
        if (!wasPressed) {
            this.setState({pressed: true})
        }
    }

    render() {
        const ProductsList = this.props.products.map(product => {
            return (
                <Card title={product.name} image={{uri: product.image}} imageStyle={{height: 200, width: 400}} key={product.id}>
                    <Text>{product.description}</Text>
                    <Button title={product.price}
                            icon={<Icon name="comments-dollar" 
                                        type="font-awesome-5" 
                                        size={13} 
                                        iconStyle={{marginRight: 5}} 
                                    />}
                            onPress={() => 
                                {this.wasPressed(product.wasPressed),
                                this.handleCartSubmit(product.id)}}
                            buttonStyle={{backgroundColor: 
                                this.state.pressed === product.wasPressed ? this.props.color : product.color}}
                            />
                            
                </Card>
            )
        });

        return (
            <ScrollView>
                <Greeting />
                <View style={{marginLeft: 15, marginRight: 15, marginTop: 15}}>
                    <View style={{borderBottomColor: "rgb(200, 200, 200)", borderBottomWidth: 5}} />
                </View>
                {ProductsList}
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);