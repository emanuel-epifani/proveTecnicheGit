let b = Date.now()
// for (let i = 0; i < 1000000000; i++) {
//    let a = ''
// }
let c = Date.now()
//console.log(c-b)//milliseconds




async function fetchUsers() {
   try {
      const response = await fetch('https://reqres.in/api/users');
      if (!response.ok) {
         throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
   } catch (error) {
      console.error('Errore durante il fetch:', error);
      return null;
   }
}

async function main() {
   const a = await fetchUsers();
   console.log( a);
}

main();

//add branch1
