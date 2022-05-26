import React from 'react';

const OrderRow = ({order,handelDelete}) => {

    const{_id,userName, userEmail, quantity}= order
    return (
        
        <tr>
        <th>1</th>
        <td>{userName}</td>
        <td>{userEmail}</td>
        <td>{quantity}</td>

        <td><button onClick={()=>handelDelete(_id)} className="btn btn-xs">Cancel Order</button></td>
        
        
      </tr>  

    );
};

export default OrderRow;