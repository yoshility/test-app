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
						<View style={{width: '93%'}}>
							<Text style={{fontSize: 20}}>{item.name}</Text>
							<Text style={{color: '#444'}}>{item.created_at}</Text>
						</View>
						<TouchableOpacity
                            // onPress={() => handleDelete(item.id, items, setItems)}
                            onPress={() => deleteItem(item.id, items, setItems)}
                            style={styles.deleteButton}
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
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    deleteButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default ItemList
