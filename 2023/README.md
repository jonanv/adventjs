# **🎁🧦 AdventJS**
## **24 días 24 retos de programación**

# [![adventJS](https://img.shields.io/badge/adventJS-fbbf24?style=flat-square&logo=JavaScript&logoColor=000000)](https://adventjs.dev) [![#adventjs hashtag](https://img.shields.io/badge/-%23adventJS-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/search?q=%23adventjs&src=recent_search_click&f=live)



![AdventJs2023](https://imgur.com/V5JKvkv.png)


## **Sobre AdventJs**

### **¿Donde puedo participar?**

Si estas interesado participar, cada dia de Diciembre se desbloquea un nuevo reto a las 18h *(Hora Peninsular de España)*
Puedes acceder a los retos en **[Adventjs.dev](https://adventjs.dev/es)**
Y tambien puedes colaborar con la comunidad en el **[Discord](https://t.co/XruHkD62j3)** de **[Midudev](https://twitter.com/midudev)**


### **¿Qué es un adviento?**

Aunque tiene sus raices en la religión católica, el adviento se ha convertido en una tradición donde los niños conseguían chocolate por 4 semanas, uno por día, del 1 al 24 de diciembre. Aquí lo adaptamos a retos de programación.

### **¿Esto es una idea original?**

Desde 2015 se celebra el Advent Of Code que trae retos de programación cada día. En este caso, los retos están pensados para ser solucionados con `JavaScript`/`TypeScript`.

### **¿De qué trata este repositorio?**

Este repositorio esta creado para **recopilar mis soluciones** a cada uno de los retos mientras dure esta iniciativa, con el fin de ayudar a otros miembros de la comunidad o bien para recibir **feedback** sobre mis propias soluciones por parte de otros miembros de la comunidad.

### **¿Son estas soluciones las mejores posibles a cada uno de los retos?**

En absoluto, este es solo mi aporte como alguien que está iniciando su carrera en la programación, por lo que lo más posible es que las soluciones no sean las más optimas a cada reto.

### **¿Dónde encontrar más sobre la comunidad?**

Puedes seguir a **midudev** en **[Twitter](https://twitter.com/midudev)** También puedes ver sus directos en **[Twitch](https://www.twitch.tv/midudev)** *(L-J a las 20h horarios habituales, pueden cambiar)* o en su canal de **[YouTube](https://www.youtube.com/c/midudev)**
Además te puedes unir a su comunidad en **[Discord](https://t.co/XruHkD62j3).**

## **🎮 Retos realizados**

<details open>
<summary>Show / Hide</summary>

| Numbe     | Challenge                 | Description        | Solution                 | Difficulty[^1] | Score |
| --------: | :----------------------:  | :-----------------:| :----------------------: | :------------: | :---: |
| [✔] #01  | ¡Primer regalo repetido!  | [Show][c01-readme] | [Solution][c01-solution] |       🟢       |  330  |
| [-] #02  |                           |                    |                          |                |       |
| [-] #03  |                           |                    |                          |                |       |
| [-] #04  |                           |                    |                          |                |       |
| [-] #05  |                           |                    |                          |                |       |
| [-] #06  |                           |                    |                          |                |       |
| [-] #07  |                           |                    |                          |                |       |
| [-] #08  |                           |                    |                          |                |       |
| [-] #09  |                           |                    |                          |                |       |
| [-] #10  |                           |                    |                          |                |       |
| [-] #11  |                           |                    |                          |                |       |
| [-] #12  |                           |                    |                          |                |       |
| [-] #13  |                           |                    |                          |                |       |
| [-] #14  |                           |                    |                          |                |       |
| [-] #15  |                           |                    |                          |                |       |
| [-] #16  |                           |                    |                          |                |       |
| [-] #17  |                           |                    |                          |                |       |
| [-] #18  |                           |                    |                          |                |       |
| [-] #19  |                           |                    |                          |                |       |
| [-] #20  |                           |                    |                          |                |       |
| [-] #21  |                           |                    |                          |                |       |
| [-] #22  |                           |                    |                          |                |       |
| [-] #23  |                           |                    |                          |                |       |
| [-] #24  |                           |                    |                          |                |       |

[^1]: **Difficulty**: 🟢 Easy 🟠 Medium 🔴 Difficult 🟣 Very Difficult

[c01-readme]: ./challenge01/README.md
[c01-solution]: ./challenge01/index.js
</details>


# **📝 Instalación**

Instala Jest para las pruebas con:

```bash
npm install
```

## **🧪 Tests**

Puedes comprobar los retos usando en tu terminal el comando `npm run jest`.
Si quieres probar tus propios scripts, tienes dos opciones:

1. Cambiar de nombre el archivo `index.js` y crear tu propio `index.js`
2. Comentar la función en el archivo `index.js` y crear tu propia función

```bash
npm run test # Para correr todos los test de todos los retos

npm run test:yyyy # Para correr todos los test de todos los retos de un año es especifico, por ejemplo
npm run test:2022 # Para correr todos los test de todos los retos del año 2022

npm run test:n:yyyy # n siendo el numero del reto y yyyy el año, por ejemplo
npm run test:1:2022 # Correra el test del reto 1 del año 2022
```