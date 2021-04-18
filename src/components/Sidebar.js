import React from 'react';

/*drawer menu */ 



const Sidebar = () => {
    return(
        <>
        <div id="drawer" class="menu" style="left: 0px">                        
            <a className="menu-link close-button" hrf="javascript:void(0)" onclick="closeNav()">×</a>      
            <a className="menu-link" hrf="#">Most popular fruits</a>
            <a className="menu-link" hrf="#">Stone fruits</a>
            <a className="menu-link" hrf="#">Pome fruit</a>
            <a className="menu-link" hrf="#">Nuts</a>
            <a className="menu-link" hrf="#">Vegitables</a>    
        </div>
         <div id="main">
         <button class="menu-button" onclick="openNav()">
           <i class="fas fa-apple-alt">
         </i>
       </button>
     </div>
     </>
    )
}

export default Sidebar;