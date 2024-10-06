import {Routes,Route} from 'react-router-dom'
import Header from './Header'
import Post from './Post'
import IndexPage from '../Pages/IndexPage'
import LoginPage from '../Pages/LoginPage'

export default function Layout() {
    return (
        <Routes>
            <Route index element={<IndexPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    )
}

// export default ;