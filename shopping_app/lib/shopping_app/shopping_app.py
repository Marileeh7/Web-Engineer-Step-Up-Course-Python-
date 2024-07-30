from customer import Customer
from item import Item
from seller import Seller

seller = Seller("Tienda DIC")
for i in range(10):
    Item("CPU", 40830, seller)
    Item("Memoria", 13880, seller)
    Item("tarjeta madre", 28980, seller)
    Item("Unidad de fuente de alimentación", 8980, seller)
    Item("caja de la computadora", 8727, seller)
    Item("HHD de 3,5 in", 10980, seller)
    Item("SSD de 2,5 in", 13370, seller)
    Item("M.2 SSD", 12980, seller)
    Item("Enfriador de CPU", 13400, seller)
    Item("Targeta Grafica", 23800, seller)

print("🤖 Por favor dime tu nombre")
customer = Customer(input()) 
print("🏧 Por favor ingrese el monto a cargar en la billetera")
customer.wallet.deposit(int(input()))  
print("🛍️ empieza a comprar")
end_shopping = False
while not end_shopping:
    print("📜 Lista de productos")
    seller.show_items() 
    print("️️⛏ Ingrese el número de producto")
    number = int(input())  
    print("⛏ Por favor ingrese la cantidad del artículo")
    quantity = int(input()) 
    items = seller.pick_items(number, quantity)
    
    for item in items:
         customer.cart.add(item) 
    print("🛒 Contenido del carrito")
    customer.cart.show_items()  
    print(f"🤑 cantidad total: {customer.cart.total_amount()}")

    print("😭 terminar de comprar? (yes no)")
    end_shopping = input() == "yes"


print("💸 ¿Confirmar compra? (yes no)")
if input() == "yes":
    customer.cart.check_out(seller)


print("୨୧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈Resultado┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨୧")
print(f"️🛍️ ️{customer.name} propiedad de")
customer.show_items()
print(f"😱👛 {customer.name} saldo de la cartera de: {customer.wallet.balance}")

print(f"📦 {seller.name} Estado de existencias de: ")
seller.show_items()
print(f"😻👛 {seller.name} Saldo de la cartera de: {seller.wallet.balance}")

print("🛒 Contenido del carrito")
customer.cart.show_items()
print(f"🌚 cantidad total: {customer.cart.total_amount()}")

print("🎉 fin")