import React, {useContext} from 'react'
import './Admin.css'
import AuthContext from '../Components/Context/AuthContext'
const Admin = () => {
  const {logoutUser} = useContext(AuthContext)
  return (
    <div>
    
  <body>
    <main>
      <header>
        <h2  className='h11'>Admin Dashboard</h2>
      </header>
      <section class="row">
        <article class="col-md-3 article-left">
<i class="fa fa-heart-o fa-5x" aria-hidden="true"></i>
        <h2 class="text-center title">Admin Dashboard</h2>
        <ul class="ul">
          <li><i class="fa fa-home" aria-hidden="true"></i><a href="#">Home</a></li>
          <li><i class="fa fa-comments" aria-hidden="true"></i><a href="#">Messages</a></li>
          <li><i class="fa fa-user-o" aria-hidden="true"></i><a href="#">Users</a></li>
          <li><i class="fa fa-rocket" aria-hidden="true"></i><a href="#">To-Do</a></li>
          <li><i class="fa fa-pie-chart" aria-hidden="true"></i><a href="#">Statistics</a></li>
          <li><i class="fa fa-cogs" aria-hidden="true"></i><a href="#">Settings</a></li>
          <li><i class="fa fa-line-chart" aria-hidden="true"></i><a href="#">Analytics</a></li>
          <li><i class="fa fa-facebook" aria-hidden="true"></i><a href="#">Social</a></li>
          <li><i class="fa fa-rss" aria-hidden="true"></i><a href="#">Feedback</a></li>
        </ul>
      </article>
      <article class="col-md-9 article-right">
        {/* <h1  className='h112'>Admin Panel</h1> */}
        
       </article>
       <button class="login-btn" onClick={logoutUser}>Logout</button>
      </section>
     </main>
  </body>

    </div>
  )
}

export default Admin
