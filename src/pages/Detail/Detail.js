import React from 'react'
import { Image, SafeAreaView, Text, ActivityIndicator } from 'react-native'
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

const Detail = ({ route }) => {
    const { id } = route.params;
    const { error, loading, productlist } = useFetch(`${Config.API_URL}/${id}`);


    if (loading) {
        return <ActivityIndicator size={'large'} />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <SafeAreaView>
            <Image />
            <Text>{productlist.title}</Text>
            <Text></Text>
            <Text></Text>
        </SafeAreaView>
    );
};
export default Detail;
