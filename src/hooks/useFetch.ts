
import { useState ,useEffect} from "react"

 export type DataType={
    count?:number
    pages:number
}
export type resultsType={
    id:number
    name: string
    status:string
    species:string
    image:string
    type:string
    gender:string
    location:{
        name:string
    }
    info:{
        count:number
    }
    error:string
}


export const useFetch=(url:string)=>{
    const [info , setInfo]=useState<DataType | undefined>()
    const [results , setResults]=useState<resultsType[]  >()
    const [data , setData]=useState<resultsType  >()
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData=async ()=>{
            setIsPending(true)
            try {
                const res= await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const json= await res.json()
                setIsPending(false)
                setInfo(json.info)
                setResults(json.results)
                setData(json)
                setError(null)
            } catch (err:any) {
                setError('there is a problem goes here')
                setIsPending(false)
                console.log(err.message);

            }
           
        }
        fetchData()
    }, [url]);
  
return {data, info,results , isPending, error}
}

