import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import styles from './Product.style'
import Config from "react-native-config";
import axios from 'axios';
import ProductCard from "../../components/ProductCard/ProductCard";

const Product = () => {

    const [productlist, setProductlist] = useState([]);

    const getProducts = async () => {
        try {
            const products = await axios.get(Config.API_URL);
            setProductlist(products.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }


    useEffect(() => {
        getProducts();
    }, []);

    const renderProduct = ({ item }) => (
        <ProductCard product={item} />
    );


    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={productlist}
                    renderItem={renderProduct}
                />
            </View>
        </SafeAreaView>
    );
};
export default Product;
