async function getVideoInfo(){

    let url = document.getElementById('ytUrl').value
    let id = "LoaG5G5L8x0"
    // let data =  await axios.get(`/ytUrl?id=${id}&&url=${"https://www.youtube.com/watch?v=gpLJKNPtKB8"}`)
    location.href = `/ytUrl?id=${id}&&url=${url}`
    console.log(data)

}
