import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)


export const ArticleProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {

        try {
            const result = await fetch(apiUrl)
            if (!result.ok) {
                throw new Error('Nätverksförfrågan misslyckades')
            }
            setArticles(await result.json())
            setError('')
        }
        catch (error) {
            setError(error.message)
        }
        
    }

    const getArticle = async (id) => {
        try {
            const result = await fetch(`${apiUrl}/${id}`)
            if (!result.ok) {
                throw new Error('Nätverksförfrågan misslyckades')
            }
            const data = await result.json()
            setArticle(data)
        }
        catch (error) {
            setError(error.message)
        }

    }

    const clearArticle = () => {
        setArticle(null)
    }

    return (
        <ArticleContext.Provider value={{articles, article, error, getArticles, getArticle, clearArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}
