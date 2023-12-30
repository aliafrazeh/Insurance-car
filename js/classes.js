// classes
// every thing releted to the insurance
class Insurance{
    constructor (make,year,level){
    this.make = make
    this.year = year
    this.level = level
    }
    calculatePrice(info){
        let price;
        let base = 2000000;
        // get make value
        const make = info.make
        /*
        make:1 ==> pride 1.15
        make:2 ==> parse 1.30
        make:3 ==> Samand 1.80
        */
       switch(make){
        case '1':
            price = base * 1.15
            break
       case '2':
            price = base * 1.30
            break
       case '3':
            price = base * 1.80
            break
       }
       
       const year = info.year
       const difference = this.getYearDifference(year)
    //    3% cheaper for each year
       price = price - (((difference*3)/100)*price)
       const level = info.level
    
       price = this.calculateLevel(level,price)
    
       return price;
    }
    
    getYearDifference(year){
        let
        persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
        fixNumbers = function (str)
        {
          if(typeof str === 'string')
          {
            for(var i=0; i<10; i++)
            {
              str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
          }
          return str;
        };
        const now = new Date().toLocaleDateString('fa-IR')
        let nowYear = now.slice(0,4)
        let max = fixNumbers(nowYear)
        year = max - year
        return year;
    }
    
    
    calculateLevel(level,price){
        /*
        basic ==> insuranse 30%
        complete ==> insuranse 50%
        */
       if (level == 'basic'){
        price = price * 1.30
       }
       if (level == 'complete'){
        price = price * 1.50
       }
       return price;
    }
    
}


// every thing related to html
class HTMLUI{
    // display years
displayYears(){
    let
persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
fixNumbers = function (str)
{
  if(typeof str === 'string')
  {
    for(var i=0; i<10; i++)
    {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};
    const now = new Date().toLocaleDateString('fa-IR')
    let nowYear = now.slice(0,4)
    let max = fixNumbers(nowYear)
    //  min year

    let min = max - 20 
    // access to the select tag
    const selectYear = document.querySelector('#year')

    // create for loop for making option tag
    
    for  (let i = max;i>=min;i--){
        // create option
        const option = document.createElement('option')
        option.value = i
        option.textContent = i
        // append option to the selectYear
        selectYear.appendChild(option)
    }
}
// display error on the form
displayError(err){
    const div = document.createElement('div')
    div.classList = "error"
    div.textContent = err
    // insert div to the form
    form.insertBefore(div,document.querySelector('#messages'))

    // remove error after 3 Second
    setTimeout(() =>{
        document.querySelector(".error").remove()
    },3000)
}
// display factor to the for 
showResult(price,info){
    const result = document.querySelector('#result') 
    // create div for showing price
    const div = document.createElement('div')
    let make = info.make
    let level = info.level
   switch(make){
    case '1':
        make = "پراید"
        break
   case '2':
        make = "پژوپارس"
        break
   case '3':
        make = "سمند"
        break
   }
   if (level == 'basic'){
        level = "ساده"
   }
   if (level == 'complete'){
        level = "کامل"
    }

    div.innerHTML = `
    <h2 class="header">خلاصه فاکتور</h2>
    <p>مدل ماشین: ${make}</p>
    <p>سال ساخت: ${info.year}</p>
    <p>نوع بیمه: ${level}</p>

    <p class="total">قیمت نهایی: ${price}</p>
    `
    const spinner = document.querySelector('.loading img')

    spinner.style.display = 'block'
    setTimeout(() =>{
        spinner.style.display = "none"
        result.appendChild(div)
        button.disabled = false

    },3000)
    // append div in result
    console.log(level);
}
}


