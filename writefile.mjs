import { writeFile } from 'node:fs';

writeFile('message.txt', 'Ciao, sono una prova di writeFile ed è stato generato un nuovo file!', 'utf8', function(error, data) {
   if (error) {
    console.error(error);
    return
   }
   console.log('Il file è stato creato!')
});