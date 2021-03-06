# 
La seguente guida ha lo scopo di aiutarvi a fare il deploy su heroku delle vostre api.

> !! Per svolgere correttamente il progetto __NON è necessario__ fare il deploy delle api su heroku. Ad ogni modo soprattuto per la vostra comodità e per facilitare il lavoro a distanza __è altamente consigliato__.


> La Guida è pensata per l'utilizzo in un ambiente UNIX la maggior parte delle operazioni dovrebbero funzionare comunque su una macchina windows correttamente configurata. Nelle risorse linkate sono disponibili tutti i software anche per windows.

>Ricordate che Google è vostro amico!

## Demo deployato su heroku del codice in questa repo
[https://progetto-awc-antongiacomo.herokuapp.com/](https://progetto-awc-antongiacomo.herokuapp.com/)
## Strumenti necessari

- un account [heroku](https://signup.heroku.com/login)


è necessario che sulla vostra macchina siano installati i seguenti comandi:
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [heroku cli](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- [node (con npm)](https://nodejs.org/it/download/)



assicuratevi di avere installato ogni comando provando ad eseguire lo stesso

**ES:**
```
bash-3.2$:git                                                                   
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one
.
.
.
```
## Facoltativi
- [Postman](https://www.postman.com/) - utile per testare le vostri API
# Heroku
prima di creare la vostra app su heroku,
assicuratevi di aver eseguito:

```
heroku login
```

a questo punto passiamo alla creazione vera e propria:
```
heroku create
```
questo comando genererà una nuova app con un nome arbitrario scelto da heroku,
se volete personalizzare il nome della vostra app:
```
heroku create < nome app >
```
> !! Il nome deve essere univoco per ciascuna app
> ad esempio "casa" non andrebbe bene
> "progetto awc nome cognome" è una scelta più ragionevole

in output otterrete qualcosa del genere
```
Creating progetto-awc-antongiacomo... done
https://progetto-awc-antongiacomo.herokuapp.com/ | https://git.heroku.com/progetto-awc-antongiacomo.git

```

prendete nota dell'url git ovvero, in questo caso: `https://git.heroku.com/progetto-awc-antongiacomo.git`

Maggiori informazioni su questa parte qui:

- [https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)
 

## Git 
Innanzitutto recatevi con il terminale in una cartella in cui avete regolari permessi di scrittura (e.g. la vostra home o il vostro desktop). 
Poi:
```
git clone <url>
```
l'url ovviamente è quella che abbiamo ottenuto nella fase precedente durante la creazione dell'app

ES:
```
git clone https://git.heroku.com/progetto-awc-antongiacomo.git
```

controllate la corretta inizializzazione lanciando il comando 

```
git status
```
che dovrebbe darvi in output qualcosa del genere:

```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	file.js

nothing added to commit but untracked files present (use "git add" to track)
```
----
create un file chiamato `Procfile`
con all'interno il seguente contenuto:

```
web: node app.js
```


> !! Fate attenzione che la prima lettera del file sia maiuscola è molto importante
> !! Se l'avete creato con la lettere minuscola potrebbe non bastare un semplice commit
> in quel caso
>  - spostatelo fuori dalla cartella
>  - date `git add .`
>  - committate
>  - copiate il file con la lettera maiuscola  dentro la cartella
>  - date `git add .`
>  - committate
>  - pushate


Il procfile serve ad istruire heroku su come trattare il vostro codice. Il tipo di processo `web` dice ad Heroku di far partire la vostra applicazione web lanciando `node app.js`. 
 >!! ovviamente dovrete sostituire ad `app.js` il nome della vostra applcazione web.

----

aggiungete i vostri file all'index

```
git add .
```
oppure

```
git add <nome file>
```
> !! Ogni modifica ai file richiederà che essi vengano aggiunti  all'index con il comando precente.
> 
> Lo stesso vale per i nuovi file
> 
> vi consiglio di fare un `git add .` prima di ogni commit -> push


committate e pushate

```
git commit -m "aggiunta una nuova emozionante feature"
git push heroku master
```

---

maggiori informazioni su questa parte, qui:

[https://devcenter.heroku.com/articles/git#creating-a-heroku-remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote)

# Postman
[Postman](https://www.postman.com/) vi sarà utile  utile per testare le vostri API. Per utilizzarlo con il codice fornito vi consiglio impostazioni simili a queste 

![](https://raw.githubusercontent.com/antongiacomo/AWC-2020/master/postman.png)
