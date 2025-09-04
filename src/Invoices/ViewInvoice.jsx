import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../constants/api"

const ViewInvoice = () =>{

    const [invoice,setInvoice] = useState({})
    const params = useParams()

    useEffect(()=>{
        getData()
    },[])

    console.log(params)

    const getData =async() =>{
        const data = await fetch(BASE_URL+`transactions?invoice_id=${params.id}`,{headers:{"Authorization": 
                "Token d3e4f89ac17b4d62b98f5c3de709a1eb"}})
              const dataJson = await data.json()
              setInvoice([...dataJson?.data])
    }
}

export default ViewInvoice