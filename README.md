# **AdventJS** 🎅🎄
## **24 días 24 retos de programación**

# [![adventJS](https://img.shields.io/badge/adventJS-fbbf24?style=flat-square&logo=JavaScript&logoColor=000000)](https://adventjs.dev) [![#adventjs hashtag](https://img.shields.io/badge/-%23adventJS-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/search?q=%23adventjs&src=recent_search_click&f=live)



![AdventJs2022](https://res.cloudinary.com/caraje/image/upload/v1669984572/cof4k8cttt06cjpf42ys.png)


## **Sobre AdventJs**

### **¿Donde puedo participar?**

Si estas interesado participar, cada dia de Diciembre se desbloquea un nuevo reto a las 18h *(Hora Peninsular de España)*
Puedes acceder a los retos en **[Adventjs.dev](https://adventjs.dev/es)**
Y tambien puedes colaborar con la comunidad en el **[Discord](https://t.co/XruHkD62j3)** de **[Midudev](https://twitter.com/midudev)**


### **¿Que es AdventJs?**

AdventJs es una iniciativa creada por el creador de contenido sobre Desarrollo Web **[Midudev](https://twitter.com/midudev)**, donde durante 24 días se revelaran retos diarios para que lo resuelvan la comunidad. 

Estos retos pueden ser resueltos usando tanto `Javascript` como `Typescript` y tendrán una dificultad que ira variando según el día.

### **¿De qué trata este repositorio?**

Este repositorio esta creado para **recopilar mis soluciones** a cada uno de los retos mientras dure esta iniciativa, con el fin de ayudar a otros miembros de la comunidad o bien para recibir **feedback** sobre mis propias soluciones por parte de otros miembros de la comunidad.

### **¿Son estas soluciones las mejores posibles a cada uno de los retos?**

En absoluto, este es solo mi aporte como alguien que está iniciando su carrera en la programación, por lo que lo más posible es que las soluciones no sean las más optimas a cada reto.

### **¿Dónde encontrar más sobre la comunidad?**

Puedes seguir a **midudev** en **[Twitter](https://twitter.com/midudev)** También puedes ver sus directos en **[Twitch](https://www.twitch.tv/midudev)** *(L-J a las 20h horarios habituales, pueden cambiar)* o en su canal de **[YouTube](https://www.youtube.com/c/midudev)**
Además te puedes unir a su comunidad en **[Discord](https://t.co/XruHkD62j3).**

## **Retos realizados**

| Challenge                                                                            | Link                             | Level  | Score |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------ | ----- |
| [✔] [Reto #1][challenge01-readme]: ¡Automatizando envolver regalos de navidad!       | [Solution][challenge01-solution] | Easy   | 132   |
| [✔] [Reto #2][challenge02-readme]: Nadie quiere hacer horas extra                    | [Solution][challenge02-solution] | Easy   | 131   |
| [✔] [Reto #3][challenge03-readme]: ¿Cuántas cajas de regalos puede llevar Papá Noel? | [Solution][challenge03-solution] | Easy   | 198   |
| [✔] [Reto #4][challenge04-readme]: Reto #4: Una caja dentro de otra caja y otra...   | [Solution][challenge04-solution] | Medium | 170   |
| [✔] [Reto #5][challenge05-readme]: Reto #5: Optimizando viajes de Santa              | [Solution][challenge05-solution] | Medium | 167   |



[challenge01-readme]: ./challenge01/README.md
[challenge01-solution]: ./challenge01/index.js
[challenge02-readme]: ./challenge02/README.md
[challenge02-solution]: ./challenge02/index.js
[challenge03-readme]: ./challenge03/README.md
[challenge03-solution]: ./challenge03/index.js
[challenge04-readme]: ./challenge04/README.md
[challenge04-solution]: ./challenge04/index.js
[challenge05-readme]: ./challenge05/README.md
[challenge05-solution]: ./challenge05/index.js

---

## ***Instalación***

Instala Jest para las pruebas con:

```bash
npm install
```

## Tests

Puedes comprobar los retos usando en tu terminal el comando `npm run jest`.
Si quieres probar tus propios scripts, tienes dos opciones:

1. Cambiar de nombre el archivo `index.js` y crear tu propio `index.js`
2. Comentar la función en el archivo `index.js` y crear tu propia función

```bash
npm run test # Para correr todos los test de todos los retos

npm run test:n # n siendo el numero del reto, por ejemplo
npm run test:1 # Correra el test del reto 1
```