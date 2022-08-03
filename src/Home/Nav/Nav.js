import React from 'react';

const Nav = () => {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand ml-2   " href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-5">
      <li class="nav-item active">
        <a class="nav-link" href="">Home</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="">About Us</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="">Contact Us</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="">....</a>
      </li>
     
    
      
        
      
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Nav;