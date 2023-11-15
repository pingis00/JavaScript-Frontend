import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)


export const ArticleProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(apiUrl)
        setArticles(await result.json())
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        const data = await result.json()
        setArticle(data)
    }

    const clearArticle = () => {
        setArticle(null)
    }

    return (
        <ArticleContext.Provider value={{articles, article, getArticles, getArticle, clearArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}
