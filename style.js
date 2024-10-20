
 function calculateTotal() {
     
     const item1Price = parseFloat(document.getElementById('item1Price').value) || 0;
     const item1Qty = parseInt(document.getElementById('item1Qty').value) || 0;
     const item2Price = parseFloat(document.getElementById('item2Price').value) || 0;
     const item2Qty = parseInt(document.getElementById('item2Qty').value) || 0;
     const shippingCharges = parseFloat(document.getElementById('shippingCharges').value) || 0;
    
     const totalItem1 = item1Price * item1Qty;
     const totalItem2 = item2Price * item2Qty;
     const totalCost = totalItem1 + totalItem2 + shippingCharges;
    
     let receipt = `
            <h3>Total Cost: PKR ${totalCost.toFixed(2)}</h3> `;
        
     document.getElementById('receipt').innerHTML = receipt;
 }