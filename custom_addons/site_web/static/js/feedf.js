






const url = "/feedPage/"
const cardContainer = document.getElementById("card-container");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");
const loader = document.getElementById("spinner");
var currentPage = 0;
var throttleTimer;
const throttle = (callback, time) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
};
const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360);
    return `hsl(${h}deg, 90%, 85%)`;
};
const hideLoader = () => {
    loader.style.display = "none";
};
const showLoader = () => {
    loader.style.display = "grid";
};

function addComment(div, img, name, text) {
    const com = document.createElement("div");
    com.className = "w-10 h-10 rounded-full relative flex-shrink-0";
    com.style.width = "100%";
    com.style.height = "100%";

    com.innerHTML = `
                    <div class="flex">
                        <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                            <img src="${img}"
                                 alt=""
                                 title="${name}"
                                 class="absolute h-full rounded-full w-full"/>
                        </div>
                        <div class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                            <p class="leading-6">
                            ${text}
                            </p>
                            <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
                        </div>
                    </div>
                    `;
    div.appendChild(com)
}


function getLikesResume(likes, div) {
    for (let index = 0; index < likes.length; index++) {
        const im = document.createElement('img');
        im.src = likes[index]['image'];
        im.alt = likes[index]['name'];
        im.className = "w-6 h-6 rounded-full border-2 border-white dark:border-gray-900";

        div.appendChild(im);
        if (index > 1) {
            break
        }
    }
}

function showLikes(likes) {
    
    var modal = document.getElementById("myModal");
    modal.style.display = "block"

    html = '<span id="closeModal" class="close">&times;</span>'
    for (let index = 0; index < likes.length; index++) {
        html +=
            `
            <div class="flex flex-1 items-center space-x-4" style="margin:10px auto">
                 <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                    <img src="${likes[index]['image']}" class="bg-gray-200 border border-white rounded-full w-8 h-8"/>
                </div>

                <span class="block capitalize font-semibold dark:text-gray-100">
                    ${likes[index]['name']}
                </span>
            </div>

          
        `
    }

    document.getElementById("modal-content-feed").innerHTML = html;
    //close popup
    document.getElementById("closeModal").addEventListener('click', function (event) {
        var modal = document.getElementById("myModal");
        modal.style.display = "none"
    });
}


function getAllResume(likes) {
    out = ""

    for (let index = 0; index < likes.length; index++) {
        out += `< img src = "${likes[i]['image']}" alt = "${likes[i]['name']}"
            class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />`
    }
    console.log("out")

    console.log(out)
    return out
}


const createCard = (quote) => {
    console.log("imageeeeeeeeeeeee")

    console.log(quote.owner_image_profil)
    const card = document.createElement("div");
    // card.className = "col-lg-6";
    card.style.marginBottom = "30px"
    if (quote.image == "") {
        quote.image = "../../../site_web/static/img/team.jpg";
    }

    if (quote.owner_image_profil.trim() == "") {
        quote.owner_image_profil = "../../../site_web/static/img/unknown.png";
    }

    if (quote.connected_img.trim() == "") {
        quote.connected_img = "../../../site_web/static/img/unknown.png";
    }

    likeColor = "black"
    if (quote.liked) {
        likeColor = "blue"
    }

    quote.likes.forEach(element => {
        if (element['image'] == "") {
            element['image'] = "../../../site_web/static/img/unknown.png";
        }
    });




    var commentRand = new Date().getTime().toString() + Math.random().toString()

    card.innerHTML = `
        <!-- post 1-->
        <div class="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
            <!-- post header-->
            <div class="flex justify-between items-center px-4 py-3">
                <div class="flex flex-1 items-center space-x-4">
                        <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                            <img src="${quote.owner_image_profil}"
                                 class="bg-gray-200 border border-white rounded-full w-8 h-8"/>
                        </div>

                    <div>
                    <span class="block capitalize font-semibold dark:text-gray-100">
                    ${quote.owner_name}
                    </span>
                    <span style="    color: #808080;
                    font-size: small;">
                    ${quote.date}
                    </span>
                    </div>
                </div>
               
            </div>
            <div class="p-3 dark:border-gray-700">

            ${quote.description}

            </div>
            <div uk-lightbox="">
                <div class="grid grid-cols-2 gap-2 p-2">

                        <img  class="col-span-2" src="${quote.image}" alt=""
                             class="rounded-md w-full lg:h-76 object-cover"/>


                </div>
            </div>

            <div class="py-3 px-4 space-y-3">

                <div class="flex space-x-4 lg:font-bold">
                    <div id="like${commentRand}" style="color:${likeColor};cursor: pointer;"
                       class="flex items-center space-x-2">
                        <div class="p-2 rounded-full text-black">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                style="color:${likeColor}"
                                 viewBox="0 0 20 20"
                                 fill="currentColor" width="22" height="22"
                                 class="dark:text-gray-100">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                            </svg>
                        </div>
                        <div>Like</div>
                    </div>
                    <a href="#comments${commentRand}"
                       class="flex items-center space-x-2">
                        <div class="p-2 rounded-full text-black">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20"
                                 fill="currentColor" width="22" height="22"
                                 class="dark:text-gray-100">
                                <path fill-rule="evenodd"
                                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div>Comment</div>
                    </a>
                   
                </div>
                <div class="flex items-center space-x-3">
                    <div style="cursor:pointer;" id="likesResume${commentRand}" class="flex items-center">
                    </div>
                    <div  class="dark:text-gray-100">
                         <strong>${quote.likes.length}</strong> liked this post
                    </div>
                </div>

                <div  id ="comments${commentRand}" class="border-t pt-4 space-y-4 dark:border-gray-600">
                    
                </div>

                <div class="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                    <input id="comment${commentRand}" type="text" placeholder="Add your Comment.."
                           class="bg-transparent max-h-10 shadow-none"/>
                   
                </div>

            </div>

        </div>

        `;


    console.log("before")

    cardContainer.appendChild(card);

    for (let i = 0; i < quote.comments.length; i++) {

        if (quote.comments[i]["com_img"].trim() == "") {
            quote.comments[i]["com_img"] = "../../../site_web/static/img/unknown.png";
        }
        addComment(document.getElementById("comments" + commentRand), quote.comments[i]["com_img"], quote.comments[i]["com_name"], quote.comments[i]["com_text"])
    }


    var input = document.getElementById("comment" + commentRand);

    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            if (this.value.trim() != "") {
                {
                    var input = this;
                    console.log(this.value.trim())
                    console.log(quote.id)






                    const url = '/publication/comment';

                    const data = {
                        id: quote.id,
                        comment: input.value.trim()
                    };


                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', url, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            console.log('Post request successful:', xhr.responseText);
                            // Handle the response or perform any necessary actions
                            addComment(document.getElementById("comments" + commentRand), quote.connected_img, quote.connected_name, input.value.trim())
                            input.value = ""
                        } else if (xhr.readyState === 4) {
                            console.error('Error:', xhr.status);
                            // Handle the error
                        }
                    };

                    xhr.send(JSON.stringify({ 'params': data }));




                }
            }
        }
    });



    var hand = document.getElementById("like" + commentRand);

    hand.addEventListener('click', function (event) {

        var like = this;
        var icon = like.getElementsByTagName("svg")[0]
        var data = {
            id: quote.id,
            state: true

        };
        const url = '/publication/like';

        if (like.style.color == "blue") {
            data['state'] = false
        }




        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('Post request successful:', xhr.responseText);
                if (like.style.color == "blue") {
                    like.style.color = "black"
                    icon.style.color = "black"
                } else {
                    like.style.color = "blue"
                    icon.style.color = "blue"
                }
            } else if (xhr.readyState === 4) {
                console.error('Error:', xhr.status);
                // Handle the error
            }
        };

        xhr.send(JSON.stringify({ 'params': data }));




    });

    getLikesResume(quote.likes, document.getElementById("likesResume" + commentRand));

    document.getElementById("likesResume" + commentRand).addEventListener('click', function (event) {
        console.log("cliiiiiiiiiiick")
        showLikes(quote.likes);

    }
    );




    console.log("after")
};

function createNews(news) {
    for (let i = 0; i < news.length; i++) {
        createCard(news[i]);
    }
}

function fetchNextPage() {
    fetch(url + currentPage, { mode: 'no-cors' })
        .then(response => response.json())
        .then(data => {
            currentPage++;
            if (data.length == 0) {
                removeInfiniteScroll();
                hideLoader();
            } else {
                console.log("dataaaaaaaaaaaaaaaaaaa  ",currentPage, data)
                createNews(data);
            }

        })
        .catch(error => {
        });
}
const handleInfiniteScroll = () => {
    console.log('handleInfiniteScroll');
    showLoader();
    throttle(() => {
        const endOfPage =
            window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
        console.log(endOfPage);
        if (endOfPage) {
            console.log('true');
            fetchNextPage();
            // addCards(currentPage + 1);
        }
        // if (currentPage === pageCount) {
        //     console.log('removeInfiniteScroll');
        //     removeInfiniteScroll();
        //     hideLoader();
        // }
    }, 5000);
};
const removeInfiniteScroll = () => {
    console.log('removeInfiniteScroll');
    loader.remove();
    window.removeEventListener("wheel", handleInfiniteScroll);
};
window.onload = function () {
    fetchNextPage();
};
console.log('next');
window.addEventListener("wheel", handleInfiniteScroll);