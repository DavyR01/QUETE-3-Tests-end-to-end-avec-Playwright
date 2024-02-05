

## Setup & Config

- Pour installer le projet :
`npm init playwright@latest`

- Pour exécuter le test : 
`npx playwright test`
Par défaut le rapport de test s'ouvre automatiquement sur `http://localhost:9323/` lorsqu'au moins un test échoue.

- Pour avoir un récapitulatif des tests exécutés sous forme de rapport de tests après avoir effectué la commande précédente :
`npx playwright show-report`

- Pour garder une trace de l'exécution sous forme de fichier zip rajouté dans le dossier test-results par défaut : 
`npx playwright test --trace on`
Cela peut permettre de mieux comprendre ce qu'il se passe, en rejouant action par action le scénario et en inspectant la console, le réseau, etc...

