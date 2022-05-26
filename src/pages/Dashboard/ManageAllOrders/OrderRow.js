import React from 'react';

const OrderRow = ({order}) => {

    const{userName, userEmail, quantity}= order
    return (
        
        <tr>
        <th>1</th>
        <td>{userName}</td>
        <td>{userEmail}</td>
        <td>{quantity}</td>

        <td><button className="btn btn-xs">Cancel Order</button></td>
        
      </tr>  

    );
};

export default OrderRow;