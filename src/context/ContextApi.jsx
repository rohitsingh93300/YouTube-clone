import { createContext, useContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/API";

export const Context = createContext();

export const AppContext = (props) =>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    const fetchSelectedCategoryData = (query)=>{
      setLoading(true)
      fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
        console.log(contents)
        setSearchResults(contents)
        setLoading(false)
      })
    }

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

   

    return (
       <Context.Provider value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu
        }}>
        {props.children}
       </Context.Provider>
    )

}
export const useAppContext = ()=>{
  return useContext(Context)
}