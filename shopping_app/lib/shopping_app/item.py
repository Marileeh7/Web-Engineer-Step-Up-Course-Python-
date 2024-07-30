class Item:

    from ownable import set_owner

    instances = [] # Aqui se guardan los item del vendedor

    def __init__(self, name, price, owner=None):
        self.name = name
        self.price = price
        self.set_owner(owner)
        # Cuando se crea una instancia de Item, esa instancia de Item (yo) se almacena en una variable de clase llamada instancias.
        Item.instances.append(self)

    def label(self):
        return {"name": self.name, "price": self.price}

    @staticmethod
    def item_all():
        #Return instancia ==> Item.item_all() devuelve todas las instancias de elementos creadas hasta el momento.
        return Item.instances
