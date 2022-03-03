export function newInvoice() {

    const inoviceNew = document.createElement('div')
    inoviceNew.classList.add('new-invoice')
    inoviceNew.innerHTML = `<h1>New Invoice</h1>
<form action=>
    <div class=bill-from>
        <p>Bill From</p>
        <label for=name-street>Street Address</label>
        <input type=text name=street id=name-streetrequired >
    </div>
    <div class=from-city>
        <div class=row>
            <label for=name-city>City</label>
            <input type=text name=city id=name-city required>
        </div>
        <div class=row>
            <label for=name-post>Post Code</label>
            <input type=text name=post id=name-post required>
        </div>
        <div class=row>
            <label for=name-country>Country</label>
            <input type=text name=country id=name-country required>
        </div>
    </div>

    <div class=bill-to>
        <p>Bill To</p>
        <label for=client-name>Client's Name</label>
        <input type=text name=client-name id=client-name required>
        <label for=client-email>Client's Email</label>
        <input type=email name=client-email id=client-email required>
        <label for=client-street>Street Address</label>
        <input type=text name=client-street id=client-street required>
    </div>
    <div class=to-city>
        <div class=row>
            <label for=name-to-city>City</label>
            <input type=text name=to-city id=name-to-city required>
        </div>
        <div class=row>
            <label for=name-to-post>Post Code</label>
            <input type=text name=to-post id=name-to-post required>
        </div>
        <div class=row>
            <label for=name-to-country>Country</label>
            <input type=text name=to-country id=name-to-country required>
        </div>
    </div>
    <div class=date>
        <label for=date>Invoice Date</label>
        <input type=date name=date id=date required>
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
            <input type=text name=project-desc id=project-desc required>
        </div>
    </div>

<div class=item-list>
    <h2>Item List</h2>
</div>
<div class=grid>
    <div class=item>
        <label for=item>Item Name</label>
        <input type=text name=item-name id=item-name required>

    </div>
    <div class=item>
        <label for=item-qty>Qty.</label>
        <input type=number name=item-qty id=item-qty required>

    </div>
    <div class=item>
        <label for=item-price> Price</label>
        <input type=number name=item-price id=item-price required>

    </div>
    <div class=item>
        <label for=item-total>Total</label>
        <input type=number name=item-total id=item-total >
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
        <button type="submit" onclick="logSubmit(event)"  class=save-send>Save & Send</button>
    </div>
</div>
</form>
</div>`
    document.querySelector('body').appendChild(inoviceNew)
    document.querySelector('.new-invoice').classList.toggle('active')
}