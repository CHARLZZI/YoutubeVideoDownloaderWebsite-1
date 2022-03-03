async function getVideoInfo(){

    console.log('started')
    let videoId = '7JmcmaAXzks'
    let eurl = `https://youtube.googleapis.com/v3/${videoId}`
    const response = await axios.get(`https://www.youtube.com/get_video_info?video_id=${videoId}&eurl=https%3A%2F%2Fyoutube.googleapis.com%2Fv%2F${videoId}&html5=1&c=TVHTML5&cver=6.20180913`);
    // const response = await axios.get(`${eurl}`);
    const parsedResponse = Object.fromEntries(new URLSearchParams(response.data));
    console.log(parsedResponse)

}
