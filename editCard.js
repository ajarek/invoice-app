async function editCard(e) {
    if (e.target.classList.contains('card')) {
        let id = e.target.dataset.id
        const res = await fetch(`http://localhost:3000/editOne/${id}`)
        const data = await res.json()
        const mainBody = document.querySelector('.main-body')
        mainBody.innerHTML = ''
        document.querySelector('.main-header').style.display = 'none'
        const div = document.createElement('div');
        div.classList.add('edit-card');
        div.innerHTML = ` <div class=back onclick=editBack()><img src=./images/icon-arrow-left.svg alt=> Go Back</div>
    <div class=edit-container>
    <div class=edit-panel>
        <div class=panel-row1>
    <p>Status</p>
        <button class=${data.status}-btn ><div class=${data.status}-div></div>${data.status}</button></div>
        <div class=panel-row2>
        <button data-id="${data._id}" onclick="editItem(event)">Edit</button>
        <button id="${data._id}" onclick="deleteItem(event)">Delete</button>
        </div>
    </div>
    <div class=edit-header>
        <div class=edit-row>
            <div class=id>${data.id}</div>
            <p class=description>${data.description}</p>
        </div>
        <div class=sender-adress>
            <div class=adress>${data.senderAddress.street}</div>
            <div class=adress>${data.senderAddress.city}</div>
            <div class=adress>${data.senderAddress.postCode}</div>
            <div class=adress>${data.senderAddress.country}</div>
        </div>
    </div>
    <div class=edit-body>
        <div class=inovice>
            <p>Inovice Date</p>
            <div class=created-at>${data.createdAt}</div>
            <p>Payment Due</p>
            <div class=paymentDue>${data.paymentDue}</div>
        </div>

        <div class=bill>
            <p>Bill To</p>
            <div class=client-name>${data.clientName}</div>
            <div class=adress>${data.clientAddress.street}</div>
            <div class=adress>${data.clientAddress.city}</div>
            <div class=adress>${data.clientAddress.postCode}</div>
            <div class=adress>${data.clientAddress.country}</div>
        </div>
        <div class=send>
        <p>Send To</p>
            <div class=mail>${data.clientEmail}</div>
        </div>

    </div>
    <div class=edit-footer>
        <div class=item>
            <p>Item Name</p>
            <div class=name>${data.items[0].name}</div>
        </div>
        <div class=qty>
            <p>QTY.</p>
            <div class=quantity>${data.items[0].quantity}</div>
        </div>
        <div class=price>
            <p>Price </p>
            <div class=price-1>${data.items[0].price}</div>
        </div>
        <div class=total>
            <p>Total</p>
            <div class=total-1>${data.items[0].total}</div>
        </div>
    </div>
</div>`
        mainBody.appendChild(div);
    }
}

async function editBack() {
    document.querySelector('.main-body').innerHTML = ''
    document.querySelector('.main-header').style.display = 'flex'
    location.reload()
}
async function deleteItem(e) {

    e.preventDefault()
    const _id = e.target.id
    console.log(_id)
    await fetch(`http://localhost:3000/delete/${_id}`, {
            method: 'DELETE',
        })
        .then(() => {
            location.reload()
        })
        .catch((error) => {
            console.error('Error:', error)
        })

}

async function editItem(e) {
    document.querySelector('.main-body').innerHTML = ''
    e.preventDefault()

    const _id = e.target.dataset.id

    const res = await fetch(`http://localhost:3000/editOne/${_id}`)
    const notes = await res.json()
    console.log(notes)
    const inoviceNew = document.createElement('div');
    inoviceNew.classList.add('new-invoice');
    inoviceNew.innerHTML = `<h1>New Invoice</h1>
<form action=>
<input type=hiden name=id-item id=id-item  value=${notes.id}>
<input type=hiden name=payment-due id=payment-due  value=${notes.paymentDue}>


    <div class=bill-from>
        <p>Bill From</p>
        <label for=name-street>Street Address</label>
        <input type=text name=street id=name-street required value="${notes.senderAddress.street}" >
    </div>
    <div class=from-city>
        <div class=row>
            <label for=name-city>City</label>
            <input type=text name=city id=name-city required value="${notes.senderAddress.city}">
        </div>
        <div class=row>
            <label for=name-post>Post Code</label>
            <input type=text name=post id=name-post required value="${notes.senderAddress.postCode}">
        </div>
        <div class=row>
            <label for=name-country>Country</label>
            <input type=text name=country id=name-country required value="${notes.senderAddress.country}">
        </div>
    </div>

    <div class=bill-to>
        <p>Bill To</p>
        <label for=client-name>Client's Name</label>
        <input type=text name=client-name id=client-name required value="${notes.clientName}">
        <label for=client-email>Client's Email</label>
        <input type=email name=client-email id=client-email required value="${notes.clientEmail}">
        <label for=client-street>Street Address</label>
        <input type=text name=client-street id=client-street required value="${notes.clientAddress.street}">
    </div>
    <div class=to-city>
        <div class=row>
            <label for=name-to-city>City</label>
            <input type=text name=to-city id=name-to-city required value="${notes.clientAddress.city}">
        </div>
        <div class=row>
            <label for=name-to-post>Post Code</label>
            <input type=text name=to-post id=name-to-post required value="${notes.clientAddress.postCode}">
        </div>
        <div class=row>
            <label for=name-to-country>Country</label>
            <input type=text name=to-country id=name-to-country required value="${notes.clientAddress.country}">
        </div>
    </div>
    <div class=date>
        <label for=date>Invoice Date</label>
        <input type=date name=date id=date required value="${notes.createdAt}" >
    </div>
    <div class=terms>
        <select name=payment-terms id=payment-terms>
            <option value="7Day">Net 7 Days</option>
            <option value="1Day">Net 1 Day</option>
            <option value="14Day" Days>Net 14 Days</option>
            <option value="30Day">Net 30 Days</option>
        </select>
        <div class=project-desc>
            <label for=project-desc>Project Description</label>
            <input type=text name=project-desc id=project-desc required value="${notes.description}">
        </div>
    </div>

<div class=item-list>
    <h2>Item List</h2>
</div>
<div class=grid>
    <div class=item>
        <label for=item>Item Name</label>
        <input type=text name=item-name id=item-name required value="${notes.items[0].name}">

    </div>
    <div class=item>
        <label for=item-qty>Qty.</label>
        <input type=number name=item-qty id=item-qty required value="${notes.items[0].quantity}">

    </div>
    <div class=item>
        <label for=item-price> Price</label>
        <input type=number name=item-price id=item-price required value="${notes.items[0].price}">

    </div>
    <div class=item>
        <label for=item-total>Total</label>
        <input type=number name=item-total id=item-total value="${notes.items[0].total}">
    </div>
    <div class=delete><img src=./images/icon-delete.svg alt=></div>
</div>
<div class=item-total>
    <button>+Add New Item</button>
</div>
<div class=buttons3>
    <button class=cancel onclick="location.reload()">Discard</button>
    <div class=row-btn>
        <button class=save>Save as Draft</button>
        <button data-id=${notes._id} type="submit" onclick="updateItem(event)"  class=save-send>Update & Save</button>
    </div>
</div>
</form>
</div>`
    document.querySelector('body').appendChild(inoviceNew);
    document.querySelector('.new-invoice').classList.toggle('active');
}

//----------------------------update item--------------
function updateItem(e) {
    e.preventDefault()

    const id = document.querySelector('input[name=id-item]').value
    const paymentDue = document.querySelector('input[name=payment-due]').value
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

    const data = {
        id: id,
        createdAt: todate,
        paymentDue: paymentDue,
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

    const _id = e.target.dataset.id
    console.log(_id);
    fetch(`http://localhost:3000/update/${_id}`, {
            method: 'put',
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