from factories.cafe_factory import CafeFactory
from products.coffee import JapaneseCofee
from products.dessert import JapaneseDessert
from products.packaging import JapanesePackaging

class JapaneseFactory(CafeFactory):
    def create_coffee(self):
        return JapaneseCofee()
    
    def create_dessert(self):
        return JapaneseDessert()
    
    def create_packaging(self):
        return JapanesePackaging()