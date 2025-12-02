# **🎅🎄 AdventJS**
## **24 días 24 retos de programación**

# [![adventJS](https://img.shields.io/badge/adventJS-fbbf24?style=flat-square&logo=JavaScript&logoColor=000000)](https://adventjs.dev) [![#adventjs hashtag](https://img.shields.io/badge/-%23adventJS-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/search?q=%23adventjs&src=recent_search_click&f=live)


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

## **🎮 Advent JS'**

<details open>
<summary>Show / Hide</summary>

| Year       | Readme                    | Description          |
| :--------: | :-----------------------: | :------------------- |
| [-] 2021   | [README](./2021/README.md)  | Advent JS 2021       |
| [✔] 2022   | [README](./2022/README.md)  | Advent JS 2022       |
| [✔] 2023   | [README](./2023/README.md)  | Advent JS 2023       |
| [-] 2024   | [README](./2024/README.md)  | Advent JS 2024       |
| [-] 2025   | [README](./2025/README.md)  | Advent JS 2025       |

</details>


# **📝 Instalación**

Instala Jest para las pruebas con:

```bash
pnpm install
```

## **🧪 Tests**

Puedes comprobar los retos usando en tu terminal el comando `pnpm run jest`.
Si quieres probar tus propios scripts, tienes dos opciones:

1. Cambiar de nombre el archivo `index.js` y crear tu propio `index.js`
2. Comentar la función en el archivo `index.js` y crear tu propia función

```bash
pnpm run test # Para correr todos los test de todos los retos

pnpm run test:yyyy # Para correr todos los test de todos los retos de un año es especifico, por ejemplo
pnpm run test:2022 # Para correr todos los test de todos los retos del año 2022

pnpm run test:yyyy:n     # n siendo el numero del reto y yyyy el año, por ejemplo
pnpm run test:2022:01    # Correra el test del reto 1 del año 2022
```