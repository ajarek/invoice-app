function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function logSubmit(e) {
console.log(e)
  e.preventDefault()
  const street = document.querySelector('input[name=street]').value
  const city = document.querySelector('input[name=city]').value
  const post = document.querySelector('input[name=post]').value
  const country = document.querySelector('input[name=country]').value
  const clientName = document.querySelector('input[name=client-name]').value
  const clientEmail = document.querySelector('input[name=client-email]').value
  const clientStreet = document.querySelector('input[name=client-street]').value
  const toCity = document.querySelector('input[name=to-city]').value
  const toPost = document.querySelector('input[name=to-post]').value
  const toCountry = document.querySelector('input[name=to-country]').value
  const todate = document.querySelector('input[name=date]').value
  const paymentTerms = document.querySelector('#payment-terms  ').value
  const projectDesc = document.querySelector('input[name=project-desc]').value
  const itemName = document.querySelector('input[name=item-name]').value
  const itemQty = document.querySelector('input[name=item-qty]').value
  const itemPrice = document.querySelector('input[name=item-price]').value
  const itemTotal = document.querySelector('input[name=item-total]').value

   function paymentDate() {
    console.log(paymentTerms)
   if (paymentTerms == "7Day") {
    return 7
   } else if (paymentTerms == "1Day") {
    return 1
   } else if (paymentTerms == "14Day") {
    return 14
   } else if (paymentTerms == "30Day") {
    return 30
   }
 
}
function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

const date = new Date(todate)
  const data = {
    id:`FV${getRandomIntInclusive(1000, 9999)}`,
    createdAt: todate,
    paymentDue:addDays(date, paymentDate()).toISOString().split('T')[0],
    senderAddress: {
      street: street,
      city: city,
      postCode: post,
      country: country,
    },
    clientAddress: {
      street: clientStreet,
      city: toCity,
      postCode: toPost,
      country: toCountry,
    },
    clientName: clientName,
    clientEmail: clientEmail,
    paymentTerms: paymentTerms,
    description: projectDesc,
    items: [{
      name: itemName,
      quantity: itemQty,
      price: itemPrice,
      total: itemTotal,
    }],
    status: "pending",
  }
  console.log(JSON.stringify(data))

  fetch('http://localhost:3000/save', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(() => {
    location.reload()
})
.catch((error) => {
    console.error('Error:', error)
})

}
