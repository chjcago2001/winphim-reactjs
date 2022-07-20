import { Home , Movies , Signin , Signup , WatchView, Search , History , ErrorPage, MoviesStore , UsersStore} from './components'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { useStore, actions } from './store'
import { useEffect, useState } from 'react'
import { category, movieType, tvType } from './api/tmdbApi'
import queryString from 'query-string'
import axiosClient from './api/axiosClient'
import axios from 'axios'

function App() {
    const [state, dispatch] = useStore()
    const location = 'location'
    const search = 'this is my value'
    const [ apiMovies , setApiMovies] = useState([])
    const { movies, users, selectedId  ,  isLoading } = state
    const formSearched =  JSON.parse(localStorage.getItem('searched')).s
    const mid  = localStorage.getItem("mId") || ''

    useEffect(  () => {
        axios.get("https://api.themoviedb.org/3/movie/438148/videos?api_key=7972e9a71a1dc065165d7db9acbf0e99&language=en-US")
        .then(response => console.log(response.data))
    },[])
   
    return ( 
    <BrowserRouter>
    <Routes>
         <Route path='/' element = {<Home/> }/> 
         <Route path='/movies' element={<Movies/> }/> 
         <Route path='/history' element={<History/> }/> 
         <Route path='/signin' element={<Signin/> }/> 
         <Route path='/signup' element={<Signup/> }/> 
         <Route path='/admin/users' element={<UsersStore/> }/> 
         <Route path='/admin/movies' element={<MoviesStore/> }/> 
         <Route path={'/movie/' + mid}  element={<WatchView /> }/> 
         <Route path={'/search/:slug'} element={<Search/>} />
         <Route path='/*' element={<ErrorPage/> }/> 
     </Routes>
  </BrowserRouter>
    )
}

export default App;