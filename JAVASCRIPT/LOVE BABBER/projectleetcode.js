document.addEventListener("DOMContentLoaded", function() {
// jab tak sara element html ka get nahi ho jata hai tab tak koi wrok mat karo
// ek ek karke sab element ko get kar liye

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    //return true or false based on a regex
    function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        // ye leetcode ka username type hota hai jo chatgpt se laye hai
        const regex = /^[a-zA-Z0-9_-]{1,20}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    // fetch details ko async function me de diye jab tak api details leke nahi aa jata ruke raho


    async function fetchUserDetails(username) {

        try{
            // jab koi search button daba de to  kya krna hai usko chupa ke searching de dena hai
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);

            // ab api ko data fecth karne ke url ki jarurt hoti hai kabhi kabhi url dirctely acess nahi kar pata to ek extara proxy url add kar dete hai
 /// ye har waqt kam nahi karega to difrent difrent tarika apnaana pad sakta hai
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
         //    const proxyUrl = 'https://leetcode-stats.herokuapp.com/${username}}'
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");
    // url ko batana padta hai kya kya fetch karke laye uske liye query likna padta hai ye bhi kahi se tapna padtha hai
            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }// username har barrr badelega na toh varible rakh liye
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };
      // responese ka wait kar rahe hai 
            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
                // agar kuch fetch nahi kar paya tho error throw kar do
            }
            const parsedData = await response.json(); // jo data aaya usko ek jagh rakh liye
            console.log("Logging data: ", parsedData) ;

            displayUserData(parsedData); // us data ko send kar diye display function me
        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search"; // sab kuch hone ke badd firse search ko unhidden kar diye
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }


    function displayUserData(parsedData){
        // jo bhi data mere pass aaaya wo vector ke form me tha ye tumko inspect me jake print karke pata chal jayega to use hisab se jo chiye tha wo le liye vector se
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;
// sab naam wahi se liye inspect se jjake 
        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;
// display karne ke liye calcution ke liye unpateprgedss me bhej diye data
        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);
// sab data ko cards ke from me bhi dikna chate hai to ek arary bane ke usme cahr elemetn staore kar liye
        const cardsData = [
            {label: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];

        console.log("card ka data: " , cardsData);
    // card bale section me label and value de diye 
        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")

    }

    // sab kam satarting yaha se hoga ekk ek karke
    searchButton.addEventListener('click', function() {
        // click karne par phle sab element add
        const username = usernameInput.value;
        // username me input diya usko le liye .value karke
        console.log("logggin username: ", username);
        if(validateUsername(username)) {
            // check kiye user name valid hai ki nahi agar thik hai toh detail fecth kar lo

            fetchUserDetails(username);
        }
    })

})