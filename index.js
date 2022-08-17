const api ="AIzaSyDPMJHtkXnmxJQ02rCLre_hmSiPeV9oojI"
    const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=${api}`

    async function search()
    {
        try{
            let query=document.querySelector("#query").value 
            const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`
        let res = await fetch(url)
        let data= await res.json()
        appendData(data.items)
        console.log(data.items)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    let appendData = (data) =>{
        let showdiv=document.querySelector("#show")
        showdiv.innerHTML=null
        data.map(function (el)
        {
            let iframe=document.createElement("iframe")
            
            iframe.src="https://www.youtube.com/embed/"+el.id.videoId
            let p=document.createElement("h4")
            p.innerText=el.snippet.title
            let div=document.createElement("div")
            
            div.addEventListener("click", function()
            {
                showtonewpage(el)
            })
            div.style.width="250px"
            div.style.height="300px"
            div.append(iframe,p) // a
            document.querySelector("#show").append(div) // append

        })
    }
    
    function showtonewpage(el)
    {
        let obj={
                id : el.id.videoId,
                snippet : el.snippet.title
                
            }
        localStorage.setItem("showdiv",JSON.stringify(obj))
        window.location.href="main.html"
    }