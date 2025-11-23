from .notification import Notification

class SmsNotification(Notification):
    def send(self, user: str, message: str):
        print(f"📱 SMS to {user}: {message}")