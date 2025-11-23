from factories.cafe_factory import CafeFactory
from products.coffee import ItalianCoffee
from products.dessert import ItalianDessert
from products.packaging import ItalianPackaging

class ItalianFactory(CafeFactory):
    def create_coffee(self):
        return ItalianCoffee()
    
    def create_dessert(self):
        return ItalianDessert()
    
    def create_packaging(self):
        return ItalianPackaging()