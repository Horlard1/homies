function setContent (){
    let content = document.querySelector('#slide');
    content.innerHTML = `
    <div class='full-text'>
        <h1>Explore Amazing Properties in your city </h1>
        <p>let us help you find your ideal home</p>
    </div>
    `;
    setTimeout(()=>{
        let content = document.querySelector('#slide');
        content.innerHTML = `
        <div class="first-text">
            <div class="texts">
                <h2>Elegant Wuse something</h2>
            </div>
            <ul>
                <li><img src="./images/small1.svg" alt=""></li>
                <li><img src="./images/small2.svg" alt=""></li>
                <li><img src="./images/small3.svg" alt=""></li>
            </ul>
        </div>`;
    }, 3000)

}
setInterval(setContent, 5000)