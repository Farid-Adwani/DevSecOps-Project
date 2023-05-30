// // Change color icons categories lab on click sideBar
const item_1 = document.querySelector("#cercle-1");
const color_item_1 = document.querySelector("#change-color-1");

const item_2 = document.querySelector("#cercle-2");
const color_item_2 = document.querySelector("#change-color-2");

const item_3 = document.querySelector("#cercle-3");
const color_item_3 = document.querySelector("#change-color-3");

const item_4 = document.querySelector("#cercle-4");
const color_item_4 = document.querySelector("#change-color-4");

const item_5 = document.querySelector("#cercle-5");
const color_item_5 = document.querySelector("#change-color-5");

const item_6 = document.querySelector("#cercle-6");
const color_item_6 = document.querySelector("#change-color-6");

const item_7 = document.querySelector("#cercle-7");
const color_item_7 = document.querySelector("#change-color-7");

const item_8 = document.querySelector("#cercle-8");
const color_item_8 = document.querySelector("#change-color-8");

const item_9 = document.querySelector("#cercle-9");
const color_item_9 = document.querySelector("#change-color-9");

const item_10 = document.querySelector("#cercle-10");
const color_item_10 = document.querySelector("#change-color-10");

const item_11 = document.querySelector("#cercle-11");
const color_item_11 = document.querySelector("#change-color-11");

const item_12 = document.querySelector("#cercle-12");
const color_item_12 = document.querySelector("#change-color-12");

const item_13 = document.querySelector("#cercle-13");
const color_item_13 = document.querySelector("#change-color-13");

const item_14 = document.querySelector("#cercle-14");
const color_item_14 = document.querySelector("#change-color-14");

const removeActiveTab = () => {
  item_6.classList.remove("icon-color-nav-left");
  color_item_6.classList.remove("icon-color");

  item_1.classList.remove("icon-color-nav-left");
  color_item_1.classList.remove("icon-color");

  item_2.classList.remove("icon-color-nav-left");
  color_item_2.classList.remove("icon-color");

  item_3.classList.remove("icon-color-nav-left");
  color_item_3.classList.remove("icon-color");

  item_4.classList.remove("icon-color-nav-left");
  color_item_4.classList.remove("icon-color");

  item_5.classList.remove("icon-color-nav-left");
  color_item_5.classList.remove("icon-color");

  item_7.classList.remove("icon-color-nav-left");
  color_item_7.classList.remove("icon-color");

  item_8.classList.remove("icon-color-nav-left");
  color_item_8.classList.remove("icon-color");

  item_9.classList.remove("icon-color-nav-left");
  color_item_9.classList.remove("icon-color");

  item_10.classList.remove("icon-color-nav-left");
  color_item_10.classList.remove("icon-color");

  item_11.classList.remove("icon-color-nav-left");
  color_item_11.classList.remove("icon-color");

  item_12.classList.remove("icon-color-nav-left");
  color_item_12.classList.remove("icon-color");

  item_13.classList.remove("icon-color-nav-left");
  color_item_13.classList.remove("icon-color");

  item_14.classList.remove("icon-color-nav-left");
  color_item_14.classList.remove("icon-color");
};

const activeTab = (item, iconItem) => {
  item.classList.add("icon-color-nav-left");
  iconItem.classList.add("icon-color");
};

item_1.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_1, color_item_1);
});

item_2.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_2, color_item_2);
});

item_3.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_3, color_item_3);
});

item_4.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_4, color_item_4);
});

item_5.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_5, color_item_5);
});

item_6.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_6, color_item_6);
});

item_7.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_7, color_item_7);
});

item_8.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_8, color_item_8);
});

item_9.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_9, color_item_9);
});

item_10.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_10, color_item_10);
});

item_11.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_11, color_item_11);
});

item_12.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_12, color_item_12);
});

item_13.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_13, color_item_13);
});

item_14.addEventListener("click", () => {
  removeActiveTab();
  activeTab(item_14, color_item_14);
});





// Setup isScrolling variable
let isScrolling;

// Listen for scroll events
window.addEventListener('wheel', function ( event ) {
  const mediaQuery = window.matchMedia('(max-width: 1200px)')
  let top = (window.pageYOffset + window.innerHeight)
  isVisibleSectionPeople =  top > document.querySelector('#people').offsetTop;
  isVisibleSectionPublications =  top > document.querySelector('#publications').offsetTop;
  isVisibleTeachingNumber = top > document.querySelector('#teaching__number').offsetTop;
  isVisibleFundedProjects= top > document.querySelector('#funded__projects').offsetTop;
  isVisibleEventNumber = top > document.querySelector('#event__number').offsetTop;
  isVisibleToolsNumber = top > document.querySelector('#tools__number').offsetTop;
  isVisibleJobsNumber = top > document.querySelector('#jobs__positions').offsetTop;



    // Clear our timeout throughout the scroll
    window.clearTimeout( isScrolling );

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {

        // Run the callback
  if(isVisibleSectionPeople ) {
    removeActiveTab();
    activeTab(item_1, color_item_1);
  }
  if(isVisibleSectionPublications ) {
    removeActiveTab();
    activeTab(item_2, color_item_2);
  }

  if(isVisibleTeachingNumber ) {
    removeActiveTab();
    activeTab(item_3, color_item_3);
  }
  if(isVisibleFundedProjects ) {
    removeActiveTab();
    activeTab(item_4, color_item_4);
  }
  if(isVisibleEventNumber ) {
    removeActiveTab();
    activeTab(item_5, color_item_5);
  }
  if(isVisibleToolsNumber ) {
    removeActiveTab();
    activeTab(item_6, color_item_6);
  }
  if(isVisibleJobsNumber ) {
    removeActiveTab();
    activeTab(item_7, color_item_7);
  }

// if (mediaQuery.matches) {
//   // Then trigger an alert
//           // Run the callback
//           if(isVisibleSectionPeople ) {
//             removeActiveTab();
//             activeTab(item_8, color_item_8);
//           }
//           if(isVisibleSectionPublications ) {
//             removeActiveTab();
//             activeTab(item_9, color_item_9);
//           }

//           if(isVisibleTeachingNumber ) {
//             removeActiveTab();
//             activeTab(item_10, color_item_10);
//           }
//           if(isVisibleFundedProjects ) {
//             removeActiveTab();
//             activeTab(item_11, color_item_11);
//           }
//           if(isVisibleEventNumber ) {
//             removeActiveTab();
//             activeTab(item_12, color_item_12);
//           }
//           if(isVisibleToolsNumber ) {
//             removeActiveTab();
//             activeTab(item_13, color_item_13);
//           }
//           if(isVisibleJobsNumber ) {
//             removeActiveTab();
//             activeTab(item_14, color_item_14);
//           }

// }

    }, 1);
}, false);



var fixmeTop = $('.left-nav').offset().top;
$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();

  if (currentScroll >= fixmeTop) {
    $('.left-nav').css({
      position: 'fixed',
      top: '50%',
      transition: '0.5s'

    });
  } else {
    $('.left-nav').css({
      position: 'fixed',
      top: '59%',
      transition: '0.5s'
    });
  }
});





