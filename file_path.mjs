
/*console.log(import.meta.url) */
import { fileURLToPath } from 'url';

console.log(`
File Name : ${fileURLToPath(import.meta.url)}
File Path : ${import.meta.url}
`) 
