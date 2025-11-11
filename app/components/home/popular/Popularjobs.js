import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS } from '../../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';


const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;
    const [selectedJob, setSelectedJob] = useState(null);
    
    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };
    
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
                    <FlatList
                        data={[1,2,3,4]}
                        renderItem={({item}) => (
                            <PopularJobCard
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={(item) => item?.job_id?.toString() || item?.toString()}
                        contentContainerStyle={{ columnGap: 16 }}
                        horizontal
                    />
                )}
                
            </View>   
        </View>
    );
};


export default Popularjobs;