
import React, {useEffect, useState} from "react"
import { BASE_URL } from "../constants/api"
import { useNavigate } from "react-router-dom"


const Invoices = () =>{

  const navigate= useNavigate()

  const [Invoices,setInvoices] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async() =>{
      const data = await fetch(BASE_URL+`interview-invoices?limit=100&page=1&sort=invoice_number`,{headers:{"Authorization": 
        "Token d3e4f89ac17b4d62b98f5c3de709a1eb"}})
      const dataJson = await data.json()
      setInvoices([...dataJson?.data])
  }

  const redirectToElement = (id) =>{
    navigate(`/invoice/${id}`)
  }

  console.log(Invoices)

  const deleteInvoice = (id) =>{
    const invoices = [...Invoices]
    const newInvoice = invoices.filter((invoice)=>invoice.id !== id)
    setInvoices([...newInvoice])
  }

    return(
       <div>
        <select value=''>
          <option value="500">500</option>
          <option value="250">250</option>
          <option value="250">250</option>
        </select>
        <table>
          <td>ID</td>
          <td>I No.</td>
          <td>total_amount</td>
          <td>Currency</td>
          <td>Invoice Date</td>
          <td>Reduction type</td>
          <td>Customer Name</td>
          <td>Actions</td>
           {Invoices.map((invoice)=>(
            <tr key={invoice.id}>
            <td>{invoice.id}</td>
            <td>{invoice.invoice_number}</td>
            <td>{invoice?.total_amount}</td>
            <td>{invoice.currency}</td>
            <td>{invoice.invoice_date}</td>
            <td>{invoice.reduction_type}</td>
            <td>{invoice.customer_name}</td>
            <td>
              <button>Edit</button>
              <button onClick={()=>deleteInvoice(invoice.id)}>Delete</button>
              <button onClick={()=>redirectToElement(invoice.id)}>View</button>
            </td>
            </tr>
          ))}
        </table>
        </div>
    )
}

export default Invoices