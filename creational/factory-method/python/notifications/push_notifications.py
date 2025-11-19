from .notification import Notification

class PushNotification(Notification):
    def send(self, user: str, message: str):
        print(f"🔔 Push notification for {user}: {message}")