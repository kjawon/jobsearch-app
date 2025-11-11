import {Text, View} from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons, images } from '../constants';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from './components/header/ScreenHeaderBtn';
import { Welcome, Nearbyjobs, Popularjobs } from './components/home';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleClick = () => {
        // 검색 로직 추가
        console.log("Searching for:", searchTerm);
    }

    return (
        <SafeAreaView style = {{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    ),
                    headerTitle: "Header"
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={handleClick}
                />
                <Popularjobs />
                <Nearbyjobs />
            </ScrollView>
        </SafeAreaView>
    );
}