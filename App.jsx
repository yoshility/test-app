import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSpeechRecognitionEvent } from 'expo-speech-recognition'

import Header from './components/Header'
import ItemList from './components/ItemList'
import InputForm from './components/InputForm'
import ModalTab from './components/ModalTab'
import handleStartRecognition from './utils/handleStartRecognition'
// import handleSend from './utils/handleSend'
import handleNotification from './utils/handleNotification'
import { fetchItems, addItem } from './utils/AsyncStorage'

const App = () => {
	const [items, setItems] = useState([])
	const [inputValue, setInputValue] = useState('')
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [recognizing, setRecognizing] = useState(false)
	const [transcript, setTranscript] = useState('')
	
	// ------- Voice -------
	useSpeechRecognitionEvent('start', () => setRecognizing(true))
	useSpeechRecognitionEvent('end', async () => {
		setRecognizing(false)
		setIsModalVisible(false)
		if (transcript) {
			// handleSend(transcript, items, setItems, setInputValue)
			const updatedItems = await addItem(transcript, items)
			setItems(updatedItems)
			setTranscript('')
			handleNotification(transcript)
		}
	})
	useSpeechRecognitionEvent('result', (event) => {
		setTranscript(event.results[0]?.transcript)
	})
	useSpeechRecognitionEvent('error', (event) => {
		console.log('SR error:', event.error, 'error message:', event.message)
	})

	// ------- Get item -------
	useEffect(() => {
		const loadItems = async () => {
			const data = await fetchItems()
			console.log('data(fetch):', data)
			setItems(data) // data: Object[]
		}
		loadItems()
	}, [])
	
	return (
		<View style={styles.container}>
			{/* Status Bar */}
			<StatusBar style="auto" />
		
			{/* Header */}
			<Header />

			{/* Item List */}
			<ItemList
				items={items}
				setItems={setItems}
			/>

			{/* Input Form */}
			<InputForm
				items={items}
				setItems={setItems}
				inputValue={inputValue}
				setInputValue={setInputValue}
				setIsModalVisible={setIsModalVisible}
				handleStartRecognition={handleStartRecognition}
			/>

			{/* Modal Tab for Voice Recognition */}
			<ModalTab
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				recognizing={recognizing}
				transcript={transcript}
			/>
		</View>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App
