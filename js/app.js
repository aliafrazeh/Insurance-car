// variabels
const form = document.querySelector('#request-quote')
const html = new HTMLUI()
const button = document.querySelector("button")
// eventlisteners
eventlisteners()

function eventlisteners(){
    // display the option
    document.addEventListener("DOMContentLoaded",function(){
        html.displayYears()
    })
    // submit form when click
    form.addEventListener('submit' ,function(e){
        e.preventDefault()
        // read value from the form
        const make = document.querySelector('#make').value
        const year = document.querySelector('#year').value
        const level = document.querySelector('input[name="level"]:checked').value

        // check the value of fields are correct
        
        if (make === "" || year === "" || level === ""){
            html.displayError("لطفا همه مقادیر به درستی وارد شود")
        }else{
            let resultDiv = document.querySelector("#result div")
            if (resultDiv != null) {
                resultDiv.remove()
            }
            const insurance = new Insurance(make,year,level)
            const price = insurance.calculatePrice(insurance)
            html.showResult(price,insurance)
            button.disabled = true
        }
        
    })
}