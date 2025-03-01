// ------- Get item -------
// useEffect(() => {
// 	const fetchItems = async () => {
// 		try {
// 			const response = await fetch('http://192.168.3.4:8000/api/items/')
// 			console.log('connected!')
// 			if (!response.ok) {
// 				console.error('Failed to get items:', response)
// 			}
// 			const data = await response.json()
// 			console.log('data(get):', data)
// 			setItems(data)
// 		} catch (error) {
// 			console.error('Failed to connect(get):', error)
// 		}
// 	}
// 	fetchItems()
// }, [])