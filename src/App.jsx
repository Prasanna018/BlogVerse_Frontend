import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './authPages/Login';
import SignUp from './authPages/SignUp';
import { Toaster } from 'react-hot-toast';
import CreatePost from './CreatePost/CreatePost';
import PostView from './components/Post/PostView';
import UserCardList from './components/UserPosts/UserCardList';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import MainProfilePage from './Pages/ProfilePage/MainProfilePage';

// import CardList from './components/Post/CardList';
function App() {
  return (
    <Router>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/create-post' element={<CreatePost></CreatePost>}></Route>
        <Route path="/post/:id" element={<PostView></PostView>} />
        <Route path='/users-posts' element={<UserCardList></UserCardList>}></Route>
        <Route path='/user-profile' element={<MainProfilePage></MainProfilePage>}></Route>
      </Routes>

    </Router>
  );
}

export default App;