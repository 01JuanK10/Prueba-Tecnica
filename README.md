# Prueba Técnica

Este proyecto fue creado utilizando **[Angular CLI](https://github.com/angular/angular-cli)** versión **21.0.4**.

---

## Ejecución con Angular CLI

En el directorio raíz del proyecto, ejecuta los siguientes comandos:

Para ejecutar la aplicación de forma local usando Angular CLI, primero debes instalar las dependencias del proyecto:

```bash
npm install
```

Una vez instaladas, puedes iniciar la aplicación con el siguiente comando:

```bash
ng serve --proxy-config proxy.conf.json
```

Si deseas que la aplicación se abra automáticamente en el navegador, utiliza:

```bash
ng serve -o --proxy-config proxy.conf.json
```

La aplicación estará disponible en:

```
http://localhost:4200/
```

---

## Ejecución con Docker

Si no tienes Angular CLI configurado o instalado en tu sistema, puedes ejecutar la aplicación utilizando **Docker**.

### 1. Construcción de la imagen

Desde el directorio raíz del proyecto, construye la imagen con el siguiente comando:

```bash
docker build -t prueba-tecnica .
```

### 2. Ejecución del contenedor

Una vez finalizada la construcción de la imagen, ejecuta el contenedor con:

```bash
docker run -d -p 4200:4200 prueba-tecnica
```

Si en la consola aparece un hash similar al siguiente:

```bash
a505b5d13bddd0420f068714d63ff18835028450a072bd65ed0047e8048a5e4e
```

significa que el contenedor se está ejecutando correctamente.

Finalmente, abre tu navegador y accede a la aplicación desde:

```
http://localhost:4200/
```


