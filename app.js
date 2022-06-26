function updateProductNumber(product,price,isIncrease)
{
    const productInput=document.getElementById(product + '-number')
   let ProductNumber=productInput.value;
    if(isIncrease==true){
    ProductNumber=parseInt(ProductNumber)+1
}
else if(ProductNumber>0)
    {
    ProductNumber=parseInt(ProductNumber)-1
}
const productTotal=document.getElementById(product + '-total');
productTotal.innerText=ProductNumber*price
productInput.value=ProductNumber;
calculateTotal()
}

 function calculateTotal()

 {
    const phoneInput=document.getElementById('phone-number');
    const phoneNumber=parseInt(phoneInput.value);
    const caseInput=document.getElementById('case-number');
    const caseNumber=parseInt(caseInput.value);

    const totalPhone=phoneNumber*1219
    const totalCase= caseNumber*59

    const subtotal=totalPhone+totalCase;
    const tax=subtotal/10;
    const grandTotal=subtotal+tax;
    
   const totalOfSub=document.getElementById('sub-total')
   totalOfSub.innerText=subtotal;
   
   const totalOfTax=document.getElementById('tax-amount')
   totalOfTax.innerText=tax;

   const totalOfGrand=document.getElementById('total-amount')
   totalOfGrand.innerText=grandTotal;
   
 }
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false)
})


document.getElementById('case-plus').addEventListener('click',function(){
//    const caseInput=document.getElementById('case-number')
//    const caseNumber=caseInput.value;
//    caseInput.value=parseInt(caseNumber)+1
updateProductNumber('case',59,true);
   
})

document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput=document.getElementById('case-number')
    // const caseNumber=caseInput.value;

    updateProductNumber('case',59,false)
    // caseInput.value=parseInt(caseNumber)-1
})

