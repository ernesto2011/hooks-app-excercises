import { useEffect, useState } from "react"

const localCache=[]
export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });
    useEffect(()=>{
       getData() 
    },[url])
    const setLoading=()=>{
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error:null
        })

    }
    const getData = async ()=>{
        if(localCache[url]){
          console.log('usando cache');
          setState({
            data: localCache[url],
            isLoading: false,
            hasError: false,
            error: null,
          });
          return
        }
        setLoading();
        const res = await fetch(url)
        await new Promise(resolve => setTimeout(resolve, 1500));
        if(!res.ok){
            setState({
                data:null,
                isLoading:false,
                hasError: true,
                error:{
                    code: res.status,
                    message: res.statusText,
                }
            })
            return
        }
        const data = await res.json()
        setState({
            data:data,
            isLoading: false,
            error: null
        })
        localCache[url]=data
    }
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}
