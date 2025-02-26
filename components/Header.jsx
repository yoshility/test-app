import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text>My App</Text>
                <Text>Logout</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#dcc',
      padding: 4,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '13%'
    }
});

export default Header;
