import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.logo}>Speak Todo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#fff',
      padding: 16,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '13%',
      borderColor: 'gray'
    },
    logo: {
        fontSize: 20
    }
});

export default Header;
