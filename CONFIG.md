

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


## Utilisation point d'arrêt et génération de code Playwright

- Créer un nouveau fichier `odyssey-login.spec.ts`.

- `npx playwright test tests/odyssey-login.spec.ts --headed`
L'option --headed permet de lancer le navigateur de manière visible et ainsi d'avoir directement un aperçu visuel de l'exécution du test.
On peut régler ça en mettant un point d'arrêt avec page.pause().


## Challenge Calculator check out opération

- Pour ne tester que le fichier de test destiné à la calculatrice : 
`npx playwright test tests/calculator.spec.ts`

- Afin d'ouvrir les navigateurs lors du lancement de la commande 
 `npx playwright test tests/calculator.spec.ts`, il faut rajouter l'option --headed dans la commande : 
 `npx playwright test tests/calculator.spec.ts --headed`

- Pour mettre en pause l'ouverture des navigateurs et avoir la possibilité d'enregistrer les interaction en générant des bouts de code, rajouter `await page.pause()` dans le fichier de test.