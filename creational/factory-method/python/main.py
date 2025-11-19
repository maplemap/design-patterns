from notifications.factory import notification_factory

def notify_user(channel: str, user: str, message: str):
    notifier = notification_factory(channel)
    notifier.send(user, message)


if __name__ == "__main__":
    notify_user("email", "serhii@example.com", "Welcome to the system!")
    notify_user("sms", "+380501234567", "Your code is 1234")
    notify_user("push", "serhii", "New message received")