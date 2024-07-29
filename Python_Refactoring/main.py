def get_user_review():
    """
    Solicita al usuario una puntuación y un comentario, y los guarda en un archivo.
    """
    while True:
        # Solicita al usuario que introduzca una puntuación del 1 al 5
        point = input("Por favor, introduzca una puntuación del 1 al 5: ")

        # Verifica que la entrada sea un número
        if point.isdigit():
            point = int(point)

            # Verifica que la puntuación esté en el rango de 1 a 5
            if 1 <= point <= 5:
                # Solicita un comentario adicional del usuario
                comment = input("Ingrese su Comentario: ")
                print("\n")

                # Formatea la puntuación y el comentario para guardarlos
                post = f'point:{point}, comment: {comment}'

                # Abre el archivo 'data.txt' en modo de adición y guarda la entrada
                with open("data.txt", "a") as file:
                    file.write(f'{post}\n')

                # Sale de la función después de guardar el comentario
                return
            else:
                # Informa al usuario que la puntuación debe estar en el rango de 1 a 5
                print("Error: El número debe estar entre 1 y 5")
        else:
            # Informa al usuario que debe ingresar un número
            print("Error: Por favor ingrese un número")

def show_results_to_date():
    """
    Muestra todos los resultados guardados hasta la fecha.
    """
    print("Resultados :")
    try:
        # Intenta abrir el archivo 'data.txt' en modo lectura
        with open("data.txt", "r") as file:
            # Muestra el contenido del archivo
            print(file.read())
    except FileNotFoundError:
        # Informa si el archivo no existe (no hay resultados para mostrar)
        print("No hay resultados para mostrar.")

def option_menu():
    """
    Muestra el menú de opciones y ejecuta la función correspondiente
    según la elección del usuario.
    """
    while True:
        # Muestra el menú de opciones al usuario
        print("Seleccione el proceso que desea llevar a cabo\n1: Introduzca sus puntos de evaluación y comentarios\n2: Compruebe los resultados hasta el momento\n3: Finalizar.\n")
        option = input("Opción: ")

        # Verifica que la opción ingresada sea un número
        if option.isdigit():
            option = int(option)
        else: 
            # Informa al usuario que debe ingresar un valor numérico
            print("Error: Ingrese un valor numérico")
            continue

        # Llama a la función correspondiente según la opción seleccionada
        if option == 1:
            get_user_review()
        elif option == 2:
            show_results_to_date()
        elif option == 3:
            print("Fin")
            break
        else:
            # Informa al usuario que debe ingresar un valor válido entre 1 y 3
            print("Por favor, introduzca un valor del 1 al 3\n")

if __name__ == "__main__":
    # Ejecuta el menú de opciones cuando se ejecuta el script
    option_menu()
