import { View, Text, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import { ExpoSpeechRecognitionModule } from 'expo-speech-recognition'

const ModalTab = (props) => {
    const {
        isModalVisible,
        setIsModalVisible,
        recognizing,
        transcript
    } = props

    return (
        <Modal
            style={styles.modalContainer}
            isVisible={isModalVisible}
            onBackdropPress={() => {
                ExpoSpeechRecognitionModule.stop()
                setIsModalVisible(false)
            }}
            swipeDirection={['down']}
        >
            <View style={styles.modal}>
                {!recognizing ? (
                    <Text>Not recognizing</Text>
                ) : (
                    <Text>Recognizing...</Text>
                )}
                <Text>背景をタップしてキャンセル</Text>
                <Text>transcript:{transcript}</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',
        margin: 0
    },
    modal: {
        backgroundColor: '#fff',
        height: '30%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center'
    }
})

export default ModalTab
