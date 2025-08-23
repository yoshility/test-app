import AsyncStorage from "@react-native-async-storage/async-storage"

// Fetch Items from storage
export const fetchItems_from_storage = async () => {
    const storedItems = await AsyncStorage.getItem("items")
    return storedItems ? JSON.parse(storedItems) : []
}

// Add Item
export const addItem = (value, items) => {
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
    return updatedItems
}

// Add Item to storage
export const addItem_to_storage = async (updatedItems) => {
    // ストレージだけを更新
    await AsyncStorage.setItem("items", JSON.stringify(updatedItems))
}

// Delte Item from storage
export const deleteItem_from_storage = async (id, items) => {
    // ストレージだけを更新
    try {
        const updatedItems = items.filter((item) => item.id !== id)
        console.log('updatedItems(delete):', updatedItems)
        await AsyncStorage.setItem("items", JSON.stringify(updatedItems))
    } catch (error) {
        console.error("Failed to deleteItem:", error)
    }
}
