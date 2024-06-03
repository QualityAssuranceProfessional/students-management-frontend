<template>
    <div>
      <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav" dir="rtl">
              <a href="index.html" class="logo" style="float:right">
                <!-- <img src="assets/images/logo.png" alt="" height="90px" width="90px"> -->
              </a>
              <ul class="nav cairo-text" dir="rtl" style="float:left;padding: 10px;margin-left: 20%;">
                <li class="scroll-to-section cairo-text">
                    <RouterLink to="/"> 
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/cities"> 
                        Cities
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/regions"> 
                        Regions
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/students"> 
                        Students
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/teachers"> 
                        Teachers
                    </RouterLink>
                </li>
              </ul>        
              <a class='menu-trigger'>
                  <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
    </div>
</template>