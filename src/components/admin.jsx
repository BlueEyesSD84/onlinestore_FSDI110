import "./admin.css";
import { useState } from 'react';
import DataService from "../services/dataService";


const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [showProdSuccess, setShowProdSuccess] = useState(false);

    const saveProduct = async () => {
        
        let fixProd = {...product};
        fixProd.price = parseFloat(fixProd.price);
     
        let service = new DataService();
        let prods = await service.saveProduct(fixProd);

        if(prods && prods._id){
           setShowProdSuccess(true); 
            
            setTimeout(() =>  {setShowProdSuccess(false);
            }, 2000); //milli seconds
        
        };
        setProduct(prods);
        console.log("savedProduct");
    };

        //use a service to send it to the server

    

    const textChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        
        let copy = {...product}; //to copy an object
        copy[name] = value;
        setProduct(copy);
     };

    const saveCoupon = () => {
        console.log(coupon);
    };

    const couponChange = (c) => {
        let value = c.target.value;
        let name = c.target.name;
        
        let copy = {...coupon} ;
        copy[name] = value;
        setCoupon(copy);
    
    };
         
    return (<div className="admin">
        <h1>Store Administration</h1>

        {showProdSuccess ? <div className='alert alert-success'>Product Saved</div> : null}


        <div className="parent">
            <section className="products">
            <h3>Register Products</h3>

            <div className="my-form">
                <label>Title</label>
                <input name="title" onChange={textChange} type="text" />
            </div>

            <div className="my-form">
                <label>Price:</label>
                <input name="price" onChange={textChange} type="text" />
            </div>

            <div className="my-form">
                <label>Image</label>
                <input name="image" onChange={textChange} type="text" />
            </div>

            <div className="my-form">
                <label>Category</label>
                <input name="category" onChange={textChange} type="text" />
            </div>

            <div className="my-form">
               <button onClick={saveProduct} className='btn btn-sm btn-primary'>Save Product</button>
            </div>
            </section>
    
            <section className="list">
                <h3>Discount Code</h3>
              
                <div className="my-form">
                <label>Code</label>
                <input name="code" onChange={couponChange} type="text" />
            </div>

            <div className="my-form">
                <label>Disount</label>
                <input name="discount" onChange={couponChange} type="text" />
            </div>
            <div className="my-form">
               <button onClick={saveCoupon} className='btn btn-sm btn-dark'>Save Coupon</button>
            </div>
            </section>
        </div>
        <img src="/images/studio.png" alt="" />
      </div>
    );
  };
  
    export default Admin;