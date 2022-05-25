import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
const OrderForm = ({item}) => {
    
    const {name, price,availableQuantity,minimumOrder}=item
    const [user, loading, error] = useAuthState(auth);
    
      const orderForm= async (data) => {

      }
    return (
        <div className=' grid-cols-1'>

            <form onSubmit={{orderForm}}>
                <input type="text" value={name} placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                <input type="text" value={price} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                
                <label for="quantity">Quantity (between 1 and 5):
                </label>
                <input type="number" id="quantity" name="quantity" min="20" max="499" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                
                

            </form>
            
        </div>
    );
};

export default OrderForm;