from abc import ABC, abstractmethod

class Notification(ABC):
    @abstractmethod
    def send(self, user: str, message: str):
        pass