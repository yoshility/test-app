import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// import handleSend from '../utils/handleSend'
import handleNotification from '../utils/handleNotification'
import { addItem } from '../utils/AsyncStorage'

const InputForm = (props) => {
    const {
        items,
        setItems,
        inputValue,
        setInputValue,
        setIsModalVisible,
        handleStartRecognition
    } = props

    return (
        <View style={styles.inputFormContainer}>
            <View style={styles.inputForm}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    placeholder='Add todo'
                />
                {inputValue ? (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                            // handleSend(inputValue, items, setItems, setInputValue)
                            const updatedItems = await addItem(inputValue, items)
                            setItems(updatedItems)
                            setInputValue('')
                            handleNotification(inputValue)
                        }}
                    >
                        <Text>Send</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setIsModalVisible(true)
                            handleStartRecognition()
                        }}
                    >
                        <Text>Mic</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputFormContainer: {
        backgroundColor: '#cdc',
        padding: 16,
    },
    inputForm: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        fontSize: 16, 
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#4d4',
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InputForm
