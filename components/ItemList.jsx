import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

// import handleDelete from '../utils/handleDelete'
import { deleteItem } from '../utils/AsyncStorage'

const ItemList = (props) => {
	const { items, setItems } = props

    return (
        <View style={styles.itemListContainer}>
			<FlatList
				data={items}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<View>
							<Text>{item.name}</Text>
							<Text>{item.created_at}</Text>
						</View>
						<TouchableOpacity
                            // onPress={() => handleDelete(item.id, items, setItems)}
                            onPress={() => deleteItem(item.id, items, setItems)}
                        >
							<AntDesign name='close' size={16} color='black' />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
    )
}

const styles = StyleSheet.create({
    itemListContainer: {
        flex: 1,
        backgroundColor: '#ccd',
        padding: 16
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
  });

export default ItemList
