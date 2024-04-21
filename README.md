# Wordle Challenge

## Lancer le projet 🚀

```bash
npm run dev
```

## En quoi consiste le Challenge ? 🧐

Créer un clone du jeu **Wordle** qui se veut "minimaliste".  
Le but du jeu est de trouver THE mot mystère.Ce mot comporte cinq lettres. Six tentatives sont possibles pour réussir le jeu.

Pour chaque tentative, le jeu nous indique :

⬛ Gris = La lettre n'existe pas dans le mot secret.

🟧 Orange = La lettre existe mais n'est pas bien placé.

🟩 Vert = La lettre existe ET est bien placée.

👁️‍🗨️ Liste des fonctionnalités attendues :

📍 Comporte un Board de 5 colonnes et 6 rangées.  
📍 Le Board se met à jour lorque l'utilisateur tape un nouveau mot.  
📍 Quand l'utilisateur clique sur la touche supprimer, il est possible de supprimer les caractères comme dans un champ texte.  
📍 Pour soumettre un mot, l'utilisateur appuie sur la touche entrée.  
📍 Lors de la soumission, la ligne correspondante affiche les bonnes couleurs en fonction du dernier mot entré.  
📍 Quand le mot mystère a été trouvé, un message annonce que l'utilisateur à terminer le jeu avec succès.

## Bonus 🌟

📍 Lorsque la partie est terminée, une modale apparaît avec des confettis et informe le joueur sur son score final.  
📍 Des animations sont présentes lors du "reveal" des réponses du mot mystère. Également présente quand le jeu est terminé et réussi.
