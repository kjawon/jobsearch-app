import { Image, TouchableOpacity, Pressable } from 'react-native';
import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
    return (
        <Pressable onPress={handlePress} style={styles.btnContainer}>
            <Image
                source={iconUrl}
                resizeMethod='cover'
                style={styles.btnImg(dimension)}
            />
        </Pressable>
    )
}

export default ScreenHeaderBtn;