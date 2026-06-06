import axios from 'axios';
import react from 'react';



function AddProduct(){
    
const [txtName, setName] = react.useState("");
const [txtPrice, setPrice] = react.useState("");
const [txtDetails, setDetails] = react.useState("");

const saveData = () => {
    var myObj = {
        pname : txtName,
        pprice : txtPrice,
        pdetails : txtDetails
    }
    axios.post("http://127.0.0.1:4000/addData" , myObj)
    .then((res) => {
        console.log(res.data)
        alert(res.data.message)
    })
    .catch(err => alert(err))
    
    }

    return(<>
    <center>
    <h1>Add New Product</h1>
        <br></br>
        <input type = 'text' placeholder='Product Name' onChange={e => setName(e.target.value)}/><br/><br/>
        <input type = 'text' placeholder='Product Price' onChange={e => setPrice(e.target.value)}/><br/><br/>
        <input type = 'text' placeholder='Product Details' onChange={e => setDetails(e.target.value)}/><br/><br/>
      
        <input type = 'button' value='Add Product'  onClick={saveData}/><br/><br/>
       

    </center>



    
    </>)
}
export default AddProduct;