import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

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
                    placeholder='Todoを入力'
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
                        <Feather name="send" size={36} color="black" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setIsModalVisible(true)
                            handleStartRecognition()
                        }}
                    >
                        <Feather name="mic" size={36} color="black" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputFormContainer: {
        backgroundColor: '#fff',
        padding: 16,
    },
    inputForm: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 16, 
        backgroundColor: '#eee',
        borderRadius: 30,
        padding: 15
    },
    button: {
        height: 50,
        width: 50,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InputForm
