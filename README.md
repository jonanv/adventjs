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

<details open>
<summary>Show / Hide</summary>

| #                    | Challenge                                         | Link                             | Difficulty[^1] | Score |
| :------------------: | :------------------------------------------------ | :------------------------------: | :------------: | :---: |
| [✔] [#1][c01-readme] | ¡Automatizando envolver regalos de navidad!       | [Solution][c01-solution]         |  🟢 Easy        | 132   |
| [✔] [#2][c02-readme] | Nadie quiere hacer horas extra                    | [Solution][c02-solution]         |  🟢 Easy        | 131   |
| [✔] [#3][c03-readme] | ¿Cuántas cajas de regalos puede llevar Papá Noel? | [Solution][c03-solution]         |  🟢 Easy        | 198   |
| [✔] [#4][c04-readme] | Una caja dentro de otra caja y otra...            | [Solution][c04-solution]         |  🟠 Medium      | 188   |
| [✔] [#5][c05-readme] | Optimizando viajes de Santa                       | [Solution][c05-solution]         | 🔴 Difficult   | 220   |
| [✔] [#6][c06-readme] | Creando adornos navideños                         | [Solution][c06-solution]         |  🟠 Medium      | 160   |

[^1]: **Difficulty**: 🟢 Easy 🟠 Medium 🔴 Hard 🟣 Very Hard

[c01-readme]: ./challenge01/README.md
[c01-solution]: ./challenge01/index.js
[c02-readme]: ./challenge02/README.md
[c02-solution]: ./challenge02/index.js
[c03-readme]: ./challenge03/README.md
[c03-solution]: ./challenge03/index.js
[c04-readme]: ./challenge04/README.md
[c04-solution]: ./challenge04/index.js
[c05-readme]: ./challenge05/README.md
[c05-solution]: ./challenge05/index.js
[c06-readme]: ./challenge06/README.md
[c06-solution]: ./challenge06/index.js
</details>

---

# ***Instalación***

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