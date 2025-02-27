import * as Notifications from 'expo-notifications'

// 通知権限確認
const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync()
    console.log('notification status:', status)
}

// アプリ起動時にも通知を表示
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
    })
})

const handleNotification = async (title) => {
    requestPermissions()
    await Notifications.scheduleNotificationAsync({
        content: {
            title: title
        },
        trigger: null
    })
}

export default handleNotification