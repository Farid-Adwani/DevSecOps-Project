const item_15 = document.querySelector("#cercle-15");
const color_item_15 = document.querySelector("#change-color-15");

const item_16 = document.querySelector("#cercle-16");
const color_item_16 = document.querySelector("#change-color-16");

const item_17 = document.querySelector("#cercle-17");
const color_item_17 = document.querySelector("#change-color-17");

const item_18 = document.querySelector("#cercle-18");
const color_item_18 = document.querySelector("#change-color-18");

const item_19 = document.querySelector("#cercle-19");
const color_item_19 = document.querySelector("#change-color-19");

const item_20 = document.querySelector("#cercle-20");
const color_item_20 = document.querySelector("#change-color-20");

const item_21 = document.querySelector("#cercle-21");
const color_item_21 = document.querySelector("#change-color-21");

const item_22 = document.querySelector("#cercle-22");
const color_item_22 = document.querySelector("#change-color-22");

const item_23 = document.querySelector("#cercle-23");
const color_item_23 = document.querySelector("#change-color-23");

const item_24 = document.querySelector("#cercle-24");
const color_item_24 = document.querySelector("#change-color-24");

 const activeTabPageDetailPerson = (item, iconItem) => {
  item.classList.add("icon-color-nav-left-0");
  iconItem.classList.add("icon-color-0");
};

const removeActiveTabPageDetailPerson = () => {

  item_15.classList.remove("icon-color-nav-left-0");
   color_item_15.classList.remove("icon-color-0");

   item_16.classList.remove("icon-color-nav-left-0");
   color_item_16.classList.remove("icon-color-0");
 
   item_17.classList.remove("icon-color-nav-left-0");
   color_item_17.classList.remove("icon-color-0");
 
   item_18.classList.remove("icon-color-nav-left-0");
   color_item_18.classList.remove("icon-color-0");
 
   item_19.classList.remove("icon-color-nav-left-0");
   color_item_19.classList.remove("icon-color-0");

   
   item_20.classList.remove("icon-color-nav-left-0");
   color_item_20.classList.remove("icon-color-0");

   
   item_21.classList.remove("icon-color-nav-left-0");
   color_item_21.classList.remove("icon-color-0");

   
   item_22.classList.remove("icon-color-nav-left-0");
   color_item_22.classList.remove("icon-color-0");

   
   item_23.classList.remove("icon-color-nav-left-0");
   color_item_23.classList.remove("icon-color-0");

   item_24.classList.remove("icon-color-nav-left-0");
   color_item_24.classList.remove("icon-color-0");
 
 }
 
 item_15.addEventListener("click", () => {
  removeActiveTabPageDetailPerson();
  activeTabPageDetailPerson(item_15, color_item_15);
});



item_16.addEventListener("click", () => {
    console.log('hello')
  removeActiveTabPageDetailPerson();
  activeTabPageDetailPerson(item_16, color_item_16);
});



item_17.addEventListener("click", () => {
  removeActiveTabPageDetailPerson();
  activeTabPageDetailPerson(item_17, color_item_17);
});



item_18.addEventListener("click", () => {
  removeActiveTabPageDetailPerson();
  activeTabPageDetailPerson(item_18, color_item_18);
});



item_19.addEventListener("click", () => {
  removeActiveTabPageDetailPerson();
  activeTabPageDetailPerson(item_19, color_item_19);
});



item_20.addEventListener("click", () => {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_20, color_item_20);
  });

  
  item_21.addEventListener("click", () => {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_21, color_item_21);
  });
  

  item_22.addEventListener("click", () => {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_22, color_item_22);
  });
  

  item_23.addEventListener("click", () => {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_23, color_item_23);
  });
  

  item_24.addEventListener("click", () => {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_24, color_item_24);
  });
  




// Setup isScrolling variable
let isScrolling;

// Listen for scroll events
window.addEventListener('wheel', function ( event ) {
  const mediaQuery = window.matchMedia('(max-width: 1200px)')
  let top = (window.pageYOffset + window.innerHeight)
  isVisibleSectionOverview =  top > document.querySelector('#overview').offsetTop;
  isVisibleSectionIndicators =  top > document.querySelector('#indicators').offsetTop;
  isVisiblePublications = top > document.querySelector('#publications').offsetTop;
  isVisibleTeachingNumber= top > document.querySelector('#teaching__number').offsetTop;
  isVisibleCurriculumVitae= top > document.querySelector('#curriculum__vitae').offsetTop;
 


 
    // Clear our timeout throughout the scroll
    window.clearTimeout( isScrolling );

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {

        // Run the callback
  if(isVisibleSectionOverview ) {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_15, color_item_15);
  }   
  if(isVisibleSectionIndicators ) {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_16, color_item_16);
  }
     
  if(isVisiblePublications ) {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_17, color_item_17);
  }
  if(isVisibleTeachingNumber ) {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_18, color_item_18);
  }
  if(isVisibleCurriculumVitae ) {
    removeActiveTabPageDetailPerson();
    activeTabPageDetailPerson(item_19, color_item_19);
  }
  

if (mediaQuery.matches) {
  // Then trigger an alert
          // Run the callback
          if(isVisibleSectionOverview ) {
            removeActiveTabPageDetailPerson();
            activeTabPageDetailPerson(item_20, color_item_20);
          }   
          if(isVisibleSectionIndicators ) {
            removeActiveTabPageDetailPerson();
            activeTabPageDetailPerson(item_21, color_item_21);
          }
             
          if(isVisiblePublications ) {
            removeActiveTabPageDetailPerson();
            activeTabPageDetailPerson(item_22, color_item_22);
          }
          if(isVisibleTeachingNumber ) {
            removeActiveTabPageDetailPerson();
            activeTabPageDetailPerson(item_23, color_item_23);
          }
          if(isVisibleCurriculumVitae ) {
            removeActiveTabPageDetailPerson();
            activeTabPageDetailPerson(item_24, color_item_24);
          }
         
       
}
   
    }, 1);
}, false);

