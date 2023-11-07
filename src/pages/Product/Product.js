import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native";
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from '../../hooks/useFetch';

const Product = ({navigation}) => {

    const { error, loading, productlist } = useFetch(Config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate('DetailScreen',{id});
    }

    const renderProduct = ({ item }) => (
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    );

    if (loading) {
        return <ActivityIndicator size={'large'} />
    }

    if (error) {
        return <Text>{error}</Text>
    }

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
