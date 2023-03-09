import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import ProductList from './components/product'
import { IProduct } from './interface/product'
import Counter from './components/counter'
type props={
  data:IProduct[]
}
function App() {
  const [product, setProduct] = useState([
    
  ])

  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(({data}:any)=>{
      setProduct(data)
    })
  },[])
  const onHandleClick =(id:number)=>{
    console.log(id)
  }
  return (
    <div className="App">
      <Counter/>
      <ProductList data ={product} onClick={onHandleClick}/>
    </div>
  )
}

export default App
