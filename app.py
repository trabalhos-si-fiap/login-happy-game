import random
lista_caracteres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','1','2','3','4','5','6','7','8','9','0']
contador = 0

while contador < 5:
    captcha = ''.join(random.choices(lista_caracteres, k=5))
    print(captcha)
    usuario = input('Digite os caracteres que você vê: ')
    if usuario == captcha:
        break
    contador += 1
    if contador == 5:
        print('Excesso de tentativas erradas, tente novamente mais tarde.')


if usuario == captcha:
    print('Correto!')




    





