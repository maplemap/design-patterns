from .notification import Notification

class EmailNotification(Notification):
    def send(self, user: str, message: str):
        print(f"📧 Email to {user}: {message}")