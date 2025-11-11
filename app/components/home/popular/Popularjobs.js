import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS } from '../../../../constants';


const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;
    
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
               <Text style={styles.headerTitle}>Popular jobs</Text>
               <TouchableOpacity>
                  <Text style={styles.headerBtn}>Show all</Text>
               </TouchableOpacity>
            <View style = {styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primary}/>
                ) : error?(
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList/>
                )}
                
            </View>   
        </View>
    );
};


export default Popularjobs;