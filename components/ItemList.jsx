import { View, Text, StyleSheet, FlatList, TouchableOpacity, LayoutAnimation, Platform, UIManager, Alert } from 'react-native'
import { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'

// import handleDelete from '../utils/handleDelete'
import { deleteItem_from_storage } from '../utils/AsyncStorage'

const ItemList = (props) => {
	const { items, setItems } = props

    useEffect(() => {
        if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
            console.log("setLayoutAnimationEnabledExperimental(true)")
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }, [])

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
                            onPress={() => {
                                Alert.alert('メモを削除します', 'よろしいですか？', [
                                        {
                                            text: 'キャンセル'
                                        },
                                        {
                                            text: '削除',
                                            onPress: () => {
                                                LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut)
                                                // 1. 先に状態を更新
                                                const updatedItems = items.filter(i => i.id !== item.id)
                                                setItems(updatedItems)
                                                // 2. 非同期でストレージを更新
                                                deleteItem_from_storage(item.id, items)
                                            }
                                        }
                                    ]
                                )
                            }}
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
