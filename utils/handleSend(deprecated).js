const handleSend = async (value, items, setItems, setInputValue) => {
    const newItem = {
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
    try {
        const response = await fetch('http://192.168.3.4:8000/api/items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        if (!response.ok) {
            console.error('Failed to send items:', response)
        }
        const data = await response.json()
        console.log('data(send):', data)
        setItems([data, ...items])
        setInputValue('')
    }
    catch (error) {
        console.error('Failed to connect(send):', error)
    }
}

export default handleSend
