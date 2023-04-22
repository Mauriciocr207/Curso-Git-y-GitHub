# Curso-Git-y-GitHub
### Aquí puedes ver las prácticas con git y github que voy realizando.

* Práctica 1: 

    En esta primera práctica utilicé algunos comandos de git, fueron los siguientes:

```bash
    git init #incia el repositorio
    git add [archivo] #añade un archivo al área de preparación
    git commit -m "[mensaje]"
    git remote add origin main [url] #crea una rama y sube los cambios a un repositorio remoto
    git push -d origin [rama] # borra una rama en el repositorio remoto
    git branch [nueva_rama] #crea una rama
    git branch -d [rama] #borra una rama
    git checkout -b [nueva_rama] #crea una rama y nos posiciona en ella
    git switch [rama] #nos posiciona en una rama
    git push #actualiza cambios en el repositorio remoto
    git push --set-upstream origin [nueva_rama] #crea una nueva rama en el repositorio remoto y sube sus confirmaciones
    git push -u origin [nueva_rama] #reliza lo mismo que el comando anterior
    git log --oneline --graph #muestra las confirmaciones en un formato corto y en un gráfico
    git checkout [commit] #nos lleva a una confirmación en específico en la historia del repositorio
    git status #nos muestra el estado del repositorio
    git reset --hard [commit] #resetea el repositorio a un commit en la historia del respositorio sin mantener los cambios de las confirmaciones posteriores.
```

En estos ejercicios de git practiqué con algunos comandos básicos para comenzar a utilizar más agilmente git y github.
Aquí se puede ver el historial de la práctica:

![Práctica 1](./img/Pr%C3%A1ctica%201.png)

* Práctica 2: 
    En esta práctica utilicé los comandos:
```bash 
    git stash
    git stash apply
```
Es práctica fue necesaria para practicar el uso de stash en conjunto con commits, pull requests y la creacion de ramas.

En esta práctica realicé algunas simulaciones de qué sucedería si estás realizando cambios en una rama, creas un pull request y quieres continuar realizando cambios en otra rama y borrar la rama anterior. 

El resultado es que al utilizar stash, el pull request se incorpora sin problema y puedes recuperar los cambios que hagas en tu nueva rama a través del stash sin haber, claro está, haber hecho commits en esta nueva rama. El resultado de esta práctica es que obtienes un control de versiones bastante limpio. 

![Práctica 2](./img/Pr%C3%A1ctica%202.png)

Es claro que, sin realizar el stash y simplemente guardando los cambios en los archivos que estes editando, obtendrías el mismo comportamiento. Una historia de versiones limpia. Sin embargo, el stash nos permite tener un respaldo por si, por algún motivo los avances se pierden. 