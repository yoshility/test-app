import { PermissionsAndroid } from 'react-native'
import { ExpoSpeechRecognitionModule } from 'expo-speech-recognition'

const handleStartRecognition = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: 'Microphone Permission',
                message: 'This app needs access to your microphone to recognize speech.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        )
        console.log('granted:', granted)
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.warn('Microphone permission denied')
            return
        }
        console.log('Microphone permission granted')
        ExpoSpeechRecognitionModule.start({
            lang: 'ja-JP',
            interimResults: true,
            maxAlternatives: 1,
            continuous: false,
            requiresOnDeviceRecognition: false,
            addsPunctuation: false
        })
    } catch (error) {
        console.warn(error)
    }
}

export default handleStartRecognition