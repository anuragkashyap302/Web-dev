//asysnc fuction
async function getData() {
    setTimeout(function(){
        console.log("i am inside Timeout block")
    },3000);
    //asyschonus function banaye 
    
}
  let output = getData(); // 3 sec ke run karega

  // await - ?

  //fetch API
  async function getData(){
    let response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //fecthing of data is async opreation so for making it syc we use await jab tak data fetch hoke nahi jata ruk tab aage jana

    // parse json - async
  let data = await response.json();
    console.log(response);
    
  }
//scenario
//prepare url / api endpoint ->synchorus
// await//fetch data ->network call ->  asynchourys(kuch time lagegaa)
//jab tak data aaygea nahi tab tak process hoga nahi to await ka use kar lo sequetial manner me sab kuch hoga
//process data ->synchorynus

