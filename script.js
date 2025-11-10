const backend_Url =  "https://daraja-stk-push.vercel.app/stk_push"


const form = document.querySelector('#form-submit')
form.addEventListener('submit',async (event)=>{
    event.preventDefault()
    const number = document.querySelector('#phone').value;
    const amount = document.querySelector('#amount').value;
    
    const formData = {
        number,
        amount
    }
    console.log(formData)
    try{
        const response = await fetch(backend_Url,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
    }
    catch(error){
        console.log("error",error)
    }
    
})
































// let inputNumber = document.querySelector('#phone')
// let inputAmount = document.querySelector('#amount')
// let button = document.querySelector('#click-btn')
// let form = document.querySelector('#form-submit')

// async function backend(number,amount) {
//     const details = {
//         phoneNumber:number,
//         amount:amount
//     }
//     console.log(details)
//      const response = await fetch(backend_Url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify(details)
//      })
//      console.log(response)
// }

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     backend(inputNumber.value,inputAmount.value)    
// })



