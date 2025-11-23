from .email_notification import EmailNotification
from .sms_notifications import SmsNotification
from .push_notifications import PushNotification

def notification_factory(channel: str):
    if channel == "email":
        return EmailNotification()
    if channel == "sms":
        return SmsNotification()
    if channel == "push":
        return PushNotification()
    
    raise ValueError(f"Unknown channel: {channel}")