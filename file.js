const btns = document.querySelectorAll('#regx')
const logIns = document.querySelectorAll('#logx')
const register = document.querySelector('.register')
const closes = document.querySelectorAll('.close')
const login = document.querySelector('.log-field');
const registerField = document.querySelector('#register-fields');
const loginTog = document.querySelector('#login-btn');
const registerTog = document.querySelector('#register-btn');
const toggle = document.querySelector('.toggle')
const sideNav = document.querySelector('.side-nav')
const sidebar = document.querySelector('.sidebar')


toggle.addEventListener('click', (e)=>{
    sidebar.classList.toggle('active')
    sideNav.classList.toggle('active')
})
btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        if(registerField.classList.contains('reg')){
            e.preventDefault()
            login.classList.toggle('login')
            registerField.classList.toggle('reg')
            register.classList.add('modal')
            registerTog.classList.toggle('active')
            loginTog.classList.toggle('active')
        }else{
            e.preventDefault()
            register.classList.add('modal');
        }
    })
})

logIns.forEach(logIn=>{
    logIn.addEventListener('click', (e)=>{
        if(login.classList.contains('login')){
            e.preventDefault()
            register.classList.add('modal')
        }else{
            e.preventDefault()
            login.classList.toggle('login')
            registerField.classList.toggle('reg')
            register.classList.add('modal')
            loginTog.classList.toggle('active')
        }
    })
})

closes.forEach(close=>{
    close.addEventListener('click', (e)=>{
        register.classList.remove('modal')
    })
})

window.addEventListener('click', e=>{
    e.target == register ? register.classList.remove('modal'): false
})
window.addEventListener('click', e=>{
    (e.target != sideNav && !sideNav.classList.contains('active')) ? sideNav.classList.remove('active') : false
})

loginTog.addEventListener('click', (e)=>{
    if(login.classList.contains('login')){
        return false
    }else{
        login.classList.toggle('login')
        registerField.classList.toggle('reg')
    }
})
registerTog.addEventListener('click', ()=>{
    if(!registerField.classList.contains('reg')){
        return false
    }else{
        registerField.classList.toggle('reg')
        login.classList.toggle('login')
    }
    
})


