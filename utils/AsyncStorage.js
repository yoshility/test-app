import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

// Fetch Items
export const fetchItems = async () => {
    const storedItems = await AsyncStorage.getItem("items")
    return storedItems ? JSON.parse(storedItems) : []
}

// Add Item
export const addItem = async (value, items) => {
    const newItem = {
        id: new Date().toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo'
        }),
        name: value,
        created_at: new Date().toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // 24h
        })
    }
    console.log('newItem:', newItem)
    const updatedItems = [newItem, ...items] // newItemはID付き！
    await AsyncStorage.setItem("items", JSON.stringify(updatedItems))
    return updatedItems
}

// Delte Item
export const deleteItem = async (id, items, setItems) => {
    Alert.alert('メモを削除します', 'よろしいですか？', [
        {
            text: 'キャンセル'
        },
        {
            text: '削除',
            onPress: async () => {
                try {
                    const updatedItems = items.filter((item) => item.id !== id)
                    console.log('updatedItems(delete):', updatedItems)
                    await AsyncStorage.setItem("items", JSON.stringify(updatedItems))
                    setItems(updatedItems)
                } catch (error) {
                    console.error("Failed to deleteItem:", error)
                }
            }
        }
    ])
}
