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
                    <Text style={styles.text1}>認識停止</Text>
                ) : (
                    <Text style={styles.text1}>認識中...</Text>
                )}
                <Text style={styles.text2}>背景をタップしてキャンセル</Text>
                <Text>{transcript}</Text>
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
    },
    text1: {
        fontSize: 30
    },
    text2: {
        marginTop: 15,
        color: 'gray'
    }
})

export default ModalTab
