Next.js OpenJira App 
Para correr localmente, se necesita la base de datos 
```

docker-compose up -d 
```

* El -d, significa __detached__

MONGODB URL Local:
```
mongodb://localhost:27017/entriesdb
```


## Configurar las variables de entorno 
Renombrar el archivo __.env.template__ a__.env__

## LLenar la base de datos con informacion de prueba 

LLamar a :
http://localhost:3000/api/seed