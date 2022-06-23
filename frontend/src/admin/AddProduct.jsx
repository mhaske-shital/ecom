import React ,{useState}from 'react'
import axios from 'axios'
import{useSelector} from "react-redux"
export default function AddProduct() {
    const {userInfo}=useSelector(state=>state.user)
    const [brand, setbrand] = useState()
    const [price, setprice] = useState()
    const [image, setimage] = useState()
    const [description, setdescription] = useState()
    const [stock, setstock] = useState()
    const [category, setcategory] = useState()
    const [preview, setpreview] = useState()
    const handleAddProduct =async(e)=>{
        e.preventDefault()
        const fd= new FormData()
        fd.append("brand",brand)
        fd.append("price",price)
        fd.append("image",image)
        fd.append("description",description)
        fd.append("stock",stock)
        fd.append("category",category)
        fd.append("name","fake name")
        const config={
            headers:{
                "Content-Type":"multipart/form-data",
                Authorization:userInfo.token,
            }
        }
        const {data}= await axios.post(`http://localhost:5000/api/products/addProduct`,fd,config)
        console.log(data);
        
    }
    const handleImage=(e)=>{
        setimage(pre=>e.target.files[0])
        setpreview(URL.createObjectURL(e.target.files[0]))
        console.log( e.target.files[0]);

    }
  return (
    <>
    {/* 
        brand
        price
        image
        description
        stock
        category 
    */}
    {
        JSON.stringify(userInfo.token)
    }
    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Add Product</div>
                    <div className="card-body">
                        <form onSubmit={handleAddProduct} >
                        <input onChange={e=>setbrand(e.target.value)} type="text" placeholder='brand' className="form-control" />
                        <br />
                        <input onChange={e=>setprice(e.target.value)} type="number" placeholder='price' className="form-control" />
                        <br />
                       <div className="d-flex gap-2">
                       <input onChange={handleImage} type="file" placeholder='image' className="form-control" />
                       <img src={preview} alt="" height="40" width="40" />
                           </div>
                        <br /> 
                        <textarea  onChange={e=>setdescription(e.target.value)} type="text" placeholder='description' className="form-control" ></textarea>
                        <br />
                        <input onChange={e=>setstock(e.target.value)} type="number" placeholder='stock' className="form-control" />
                        <br />
                        <input onChange={e=>setcategory(e.target.value)} type="text" placeholder='category' className="form-control" />
                        <br />
                        <button className="btn btn-success w-100">Add Product</button>
                    
                        </form>
                       </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
