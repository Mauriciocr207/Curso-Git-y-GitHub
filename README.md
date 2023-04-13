# Curso-Git-y-GitHub
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