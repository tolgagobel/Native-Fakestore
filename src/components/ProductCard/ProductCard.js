import React from 'react'
import { View, Image, Text, Button, TouchableWithoutFeedback } from 'react-native'
import styles from './ProductCard.style';

const ProductCard = ({ product, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.body}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}₺</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default ProductCard;
