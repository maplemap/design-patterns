from abc import ABC, abstractmethod

class CafeFactory(ABC):

    @abstractmethod
    def create_coffee(self):
        pass

    @abstractmethod
    def create_dessert(self):
        pass

    @abstractmethod
    def create_packaging(self):
        pass