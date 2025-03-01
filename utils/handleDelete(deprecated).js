import { Alert } from 'react-native'

const handleDelete = (id, items, setItems) => {
    Alert.alert('メモを削除します', 'よろしいですか？', [
        {
            text: 'キャンセル'
        },
        {
            text: '削除',
            onPress: async () => {
                try {
                    const response = await fetch('http://192.168.3.4:8000/api/items/'+id+'/', {
                        method: 'DELETE'
                    })
                    if (!response.ok) {
                        console.error('Failed to delete items:', response)
                    }
                    const newItems = items.filter((item) => item.id !== id)
                    setItems(newItems)
                } catch (error) {
                    console.error('Failed to connect(delete):', error)
                }
            }
        }
    ])
}

export default handleDelete
