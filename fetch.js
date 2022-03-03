export async function showData() {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const response = await fetch("http://localhost:3000/display")
    const data = await response.json()

    data.forEach(el => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.setAttribute('onclick', 'editCard(event)event.stopPropagation()')
        div.setAttribute('data-id', el._id)
        div.innerHTML = `
        <div class=id>${el.id}</div>
        <div class=paymentDue>${el.paymentDue}</div>
        <div class=clientName>${el.clientName}</div>
        <div class=price><span>${formatter.format(el.items[0].total)}</span></div>
        <div class=btnStatus><button class=${el.status}-btn onclick=editCard(event)><div class=${el.status}-div data-id=${el.id}></div>${el.status}</button></div>
        `
        document.querySelector('.main-body').appendChild(div)
    })
}