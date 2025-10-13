import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons, images } from '../constants';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from './components/header/ScreenHeaderBtn';
import { Welcome } from './components/home';

export default function Home() {
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
            <Welcome/>
        </SafeAreaView>
    );
}