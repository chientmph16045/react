import React from 'react'
type props={
  data:{id:number,name:string}[],
  onClick:(id: number)=> void
}
const ProductList=({data,onClick}:props) => {
    // console.log(data)
    return <>
        productsList
        {data.map((res,index)=>(
            <div key={index}>
                <a>{res.name}</a>
                <button onClick={()=>onClick(res.id)}>Click</button> 
            </div>
            
            ))}
        
    </>
}



export default ProductList