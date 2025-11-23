from factories.italian_factory import ItalianFactory
from factories.japanese_factory import JapaneseFactory

def order_menu(factory):
    coffee = factory.create_coffee()
    dessert = factory.create_dessert()
    packaging = factory.create_packaging()

    print(coffee.brew())
    print(dessert.serve())
    print(packaging.wrap())


if __name__ == "__main__":
    print("=== Italian Café ===")
    order_menu(ItalianFactory())

    print("\n=== Japanese Café ===")
    order_menu(JapaneseFactory())