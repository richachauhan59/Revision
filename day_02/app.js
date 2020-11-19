const container = document.querySelector('.container')

window.addEventListener('load', () =>{
    for(let i  = 0 ; i < 25 ; i++){
        infiniteScroll()
    }
})
window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight, scrollHeight } = document.documentElement
    console.log({scrollTop, clientHeight, scrollHeight })
    setTimeout(() => {
        if(scrollTop + clientHeight >= scrollHeight){
            for(let i  = 0 ; i < 25 ; i++){
                infiniteScroll()
            }
        }
    }, 1000);
})

let i = 0;
function infiniteScroll(){
    i++
    const h1 = document.createElement('h1')
    h1.innerHTML = "Masai School " + i
    container.appendChild(h1)
}