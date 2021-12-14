/*  
a. Receives up to 3 parameters
b. 1st parameter is the HTML element string name to be created (h1, p, button, etc)
c. Set a default value for the 1st parameter to “p”
d. 2nd parameter is the textContent of the element to be created
e. Default value of the 2nd parameter is “”
f. 3rd parameter is a className if one is to be applied (optional)
g. Use document.createElement() to create the requested HTML element
h. Set the other desired element attributes.
i. Return the created element.
*/

function createElemWithText(elementName = "p", textContent = "", className = ""){
    // deines and element and creatss the element based on the value passed to it
    let element = document.createElement(elementName);
    // assigns element text content
    element.textContent = textContent;
    // sets element class name
    element.className = className;

    // returns element
    return element;
}

/*
a. Test users JSON data available here: https://jsonplaceholder.typicode.com/users
b. For testing (not in function) you may want to define users with the test data.
c. Receives users JSON data as a parameter
d. Returns undefined if no parameter received
e. Loops through the users data
f. Creates an option element for each user with document.createElement()
g. Assigns the user.id to the option.value
h. Assigns the user.name to the option.textContent
i. Return an array of options elements 
*/

function createSelectOptions(users){
    // checks if users exit. returns undefined if not
    if(!users) {
        return undefined;
    }
    const optionElements = users.map(user => {
        
        // creats option element
        const option = document.createElement('option');
        
        // assigns option value to user id
        option.value = user.id;
        
        // assings options text content to user name
        option.textContent = user.name;
        
        // return option
        return option;
    });

    // returns option elements
    return optionElements;
}

/*
a. Receives a postId as the parameter
b. Selects the section element with the data-post-id attribute equal to the postId
received as a parameter
c. Use code to verify the section exists before attempting to access the classList
property
d. At this point in your code, the section will not exist. You can create one to test if
desired.
e. Toggles the class 'hide' on the section element
f. Return the section element
*/

// toggleCommentSection
function toggleCommentSection(postId) {
    
    // checks if users exit. returns undefined if not
    if(!postId){return undefined;}

    // selects section element with data-post-id attribute equal to the postId
    let section = document.querySelector(`section[data-post-id="${postId}"]`);
    
    // if section exist
    if (section) {

        // toggle hide classList
        section.classList.toggle('hide');
    }

    // returns section
    return section;
}
// test toggleCommentSection function
toggleCommentSection(1);
toggleCommentSection(2);

/*
a. Receives a postId as the parameter
b. Selects the button with the data-post-id attribute equal to the postId received as a
parameter
c. If the button textContent is 'Show Comments' switch textContent to 'Hide
Comments'
d. If the button textContent is 'Hide Comments' switch textContent to 'Show
Comments'
e. Suggestion (not required) for above: try a ternary statement
f. Return the button element
*/

function toggleCommentButton(postId){
    
    // checks if users exit. returns undefined if not
    if(postId == undefined){
        return undefined;
    }
    
    // selects button elment with data-post-id attribute equal to the postId
    const selectedButton = document.querySelector(`button[data-post-id = "${postId}"`);

    // not = to null
    if(selectedButton != null){
        (selectedButton.textContent === 'Show Comments') ? selectedButton.textContent = 'Hide Comments' : selectedButton.textContent = 'Show Comments';
    }

    // returns selectedButton
    return selectedButton;
}

/*
a. Receives a parentElement as a parameter
b. Define a child variable as parentElement.lastElementChild
c. While the child exists…(use a while loop)
d. Use parentElement.removeChild to remove the child in the loop
e. Reassign child to parentElement.lastElementChild in the loop
f. Return the parentElement
*/

function deleteChildElements(parentElement){
    // checks if elment exists
    if(!parentElement?.tagName) return;
    
    // assigns child to parentElement.lastElementChild
    let child = parentElement.lastElementChild;
    
    // while child exist
    while(child){

        // remove child from parentElement
        parentElement.removeChild(child);

        // reassign child to parentElement.lastElementChild
        child = parentElement.lastElementChild;
    }

    // returns parentElement
    return parentElement;
}

/*
a. Selects all buttons nested inside the main element
b. If buttons exist:
c. Loop through the NodeList of buttons
d. Gets the postId from button.dataset.postId
e. Adds a click event listener to each button (reference addEventListener)
f. The listener calls an anonymous function (see cheatsheet)
g. Inside the anonymous function: the function toggleComments is called with the
event and postId as parameters
h. Return the button elements which were selected
i. You may want to define an empty toggleComments function for now. Not all tests
will pass for addButtonListeners until toggleComments exists. I recommend
waiting on the logic inside the toggleComments function until we get there.
*/

function addButtonListeners(){

    // selects main element
    let mainElem = document.querySelector('main');
    
    // select all button elements
    let buttons = mainElem.querySelectorAll('button');
    
    // if exist
    if(buttons){
        
        // loops
        for(let i = 0; i < buttons.length; i++){
            // sets button to button[index]
            let button = buttons[i];
            
            // asigns postId to button.postId
            let postId = button.dataset.postId;
            
            // adds event listener
            button.addEventListener('click', function(event){
                // passes values to toggleComments function
                toggleComments(event, postId)}, false);
        }
    }
    // returns buttons
    return buttons;
}

/*
a. Selects all buttons nested inside the main element
b. Loops through the NodeList of buttons
c. Gets the postId from button.dataset.id
d. Removes the click event listener from each button (reference
removeEventListener)
e. Refer to the addButtonListeners function as this should be nearly identical
f. Return the button elements which were selected
*/

function removeButtonListeners(){

    // selects main element
    let mainElem = document.querySelector('main');
    
    // selects buttons in main element
    let buttons = mainElem.querySelectorAll('button');
    
    // if exists
    if(buttons){
        // loops through buttons
        for(let i = 0; i < buttons.length; i++){
            
            // assigns button to buttons[index]
            let button = buttons[i];
            
            // assigns postId to button.dataset.postId
            let postId = button.dataset.postId;
            
            // removes event listener
            button.removeEventListener('click', function(event){
                // passes values to toggleComments function
                toggleComments(event, postId)},false);
        }
    }
    // returns buttons
    return buttons;
}

/*
a. Depends on the createElemWithText function we created
b. Receives JSON comments data as a parameter
c. Creates a fragment element with document.createDocumentFragment()
d. Loop through the comments
e. For each comment do the following:
f. Create an article element with document.createElement()
g. Create an h3 element with createElemWithText('h3', comment.name)
h. Create an paragraph element with createElemWithText('p', comment.body)
i. Create an paragraph element with createElemWithText('p', `From:
${comment.email}`)
j. Append the h3 and paragraphs to the article element (see cheatsheet)
k. Append the article element to the fragment
l. Return the fragment element
*/

function createComments(comment){
    
    // checks if exist else returns
    if(!comment) return;
    
    // creates fragment
    let fragment = document.createDocumentFragment();

    for(let i = 0; i < comment.length; i++){
    
        // creates article element
        let article = document.createElement("article");
        
        // creates h3 element
        let h3 = createElemWithText('h3', comment[i].name);
        
        // creates p element
        let p1 = createElemWithText('p', comment[i].body);
        
        // creates p element
        let p2 = createElemWithText('p', `From: ${comment[i].email}`);
        
        // appends created elements to article element
        article.append(h3,p1,p2);

        // appends article element to fragment
        fragment.append(article);
    }
    return fragment;
}

/* 
a. Depends on the createSelectOptions function we created
b. Receives the users JSON data as a parameter
c. Selects the #selectMenu element by id
d. Passes the users JSON data to createSelectOptions()
e. Receives an array of option elements from createSelectOptions
f. Loops through the options elements and appends each option element to the
select menu
g. Return the selectMenu element
*/

function populateSelectMenu(users) {
    
    // checks if exist else returns undefined
    if (!users) {return undefined;}
    
    // selects selectMenu element
    let selectMenu = document.getElementById("selectMenu");
        
    // creats options
    let options = createSelectOptions(users);

    if(options){
        for (let i = 0; i < options.length; i++) {
            // appends option to selectMenu
            selectMenu.appendChild(options[i]);
        }}
        // returns selectMenu
        return selectMenu;
    }

/*
a. Fetches users data from: https://jsonplaceholder.typicode.com/ (look at
Resources section)
b. Should be an async function
c. Should utilize a try / catch block
d. Uses the fetch API to request all users
e. Await the users data response
f. Return the JSON data
*/

async function getUsers(){
    try{

        // fetch users
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // to json
        const users = await response.json();
        
        // returns users
        return users;
    }catch(err){
        
        // writes error to console
        console.error(err);
    }
}

/*
a. Receives a user id as a parameter
b. Fetches post data for a specific user id from:
https://jsonplaceholder.typicode.com/ (look at Routes section)
c. Should be an async function
d. Should utilize a try / catch block
e. Uses the fetch API to request all posts for a specific user id
f. Await the users data response
g. Return the JSON data
*/

async function getUserPosts(userId){
    
    // checks if userId is undefined else returns
    if(!userId){return};
    
    try{
        // fetch post with userid
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=${userId}');
        
        // returns responds
        return await response.json();

    }catch(err){

        // prints error to console
        console.error(err);
    }
}
/*
a. Receives a user id as a parameter
b. Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/
(look at Routes section)
c. Should be an async function
d. Should utilize a try / catch block
e. Uses the fetch API to request a specific user id
f. Await the user data response
g. Return the JSON data
*/

async function getUser(userId){
    // checks if there is a postid else returns
    if(!userId) return;

    try{
        // fetch comments with postid
        const response = await fetch('https://jsonplaceholder.typicode.com/users?userId=${userId}');
        
        // jsonPostComments to reponse
        const jsonUserIdData = await response.json();
        
        // returns jsonPostComments
        return jsonUserIdData;
    }catch(err){

        // prints error to console
        console.error(err);
    }
}

/*
a. Receives a post id as a parameter
b. Fetches comments for a specific post id from:
https://jsonplaceholder.typicode.com/ (look at Routes section)
c. Should be an async function
d. Should utilize a try / catch block
e. Uses the fetch API to request all comments for a specific post id
f. Await the users data response
g. Return the JSON data
*/

async function getPostComments(postId){
    // checks if there is a postid else returns
    if(!postId) return;

    try{
        // fetch comments with postid
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=${postId}');
        
        // jsonPostComments to reponse
        const jsonPostComments = await response.json();
        
        // returns jsonPostComments
        return jsonPostComments;
    }catch(err){
        
        // prints error to console
        console.error(err);
    }
}

/*
a. Dependencies: getPostComments, createComments
b. Is an async function
c. Receives a postId as a parameter
d. Creates a section element with document.createElement()
e. Sets an attribute on the section element with section.dataset.postId
f. Adds the classes 'comments' and 'hide' to the section element
g. Creates a variable comments equal to the result of await
getPostComments(postId);
h. Creates a variable named fragment equal to createComments(comments)
i. Append the fragment to the section
j. Return the section element
*/

async function displayComments(postId){
    
    // checks postId passed else return
    if(!postId) {return;}
    
    // creates section element
    let section = document.createElement("section");
    
    // assigns section.dataset.postId to postId
    section.dataset.postId = postId;
    
    // adds comments and hide to class list
    section.classList.add('comments','hide');
    
    // gets comments based on postId
    const comments = await getPostComments(postId);
    
    // creates fragment
    const fragment = createComments(comments);
    
    // appends fragment to section element
    section.append(fragment);
    
    // returns section
    return section;
}

/*
a. Dependencies: createElemWithText, getUser, displayComments
b. Is an async function
c. Receives posts JSON data as a parameter
d. Create a fragment element with document.createDocumentFragment()
e. Loops through the posts data
f. For each post do the following:
g. Create an article element with document.createElement()
h. Create an h2 element with the post title
i. Create an p element with the post body
j. Create another p element with text of `Post ID: ${post.id}`
k. Define an author variable equal to the result of await getUser(post.userId)
l. Create another p element with text of `Author: ${author.name} with
${author.company.name}`
m. Create another p element with the author’s company catch phrase.
n. Create a button with the text 'Show Comments'
o. Set an attribute on the button with button.dataset.postId = post.id
p. Append the h2, paragraphs, button, and section elements you have created to
the article element.
q. Create a variable named section equal to the result of await
displayComments(post.id);
r. Append the section element to the article element
s. After the loop completes, append the article element to the fragment
t. Return the fragment element
*/

async function createPosts (jsonPosts){
    
    // checks if jsonPosts else return
    if(!jsonPosts) return;

    // creates fragment
    let fragment = document.createDocumentFragment();

    for(let i = 0; i < jsonPosts.length; i++){
        
        // assigns post to jsonPosts[index]
        let post = jsonPosts[i];

        // creates article element
        let article = document.createElement("article");
        
        // assisns section to displayComments return value
        let section = await displayComments(post.id);
        
        // assisns section to getusers return value
        let author = await getUser(post.userId);

        // creates h2 element
        let h2 = createElemWithText("h2", post.title);
        
        // creates p element
        let p = createElemWithText("p", post.body);
        
        // creates p element
        let p2 = createElemWithText("p", `Post ID: ${post.id}`);

        // creates p element
        let p3 = createElemWithText("p",`Author: ${author.name} with ${author.company.name}`);
        
        // creates p element
        let p4 = createElemWithText("p",'${author.company.catchPhrase}');

        // creates button element
        let button = createElemWithText("button", "Show Comments");
        
        // assigns button.dataset.postId to post id
        button.dataset.postId = post.id;

        // appends created elements to article element
        article.append(h2,p,p2, p3,p4,button,section);

        // appends article to fragment
        fragment.append(article)
    }
    // returns fragment
    return fragment;
}

/*
a. Dependencies: createPosts, createElemWithText
b. Is an async function
c. Receives posts data as a parameter
d. Selects the main element
e. Defines a variable named element that is equal to:
i. IF posts exist: the element returned from await createPosts(posts)
ii. IF post data does not exist: create a paragraph element that is identical to
the default paragraph found in the html file.
iii. Optional suggestion: use a ternary for this conditional
f. Appends the element to the main element
g. Returns the element variable
*/

async function displayPosts(posts){
    
    // selects main element
    let myMain = document.querySelector('main');
    
    let element = (posts) ? await createPosts(posts) : document.querySelector("main p");
    
    // appends element to myMain
    myMain.append(element);
    
    // returns element
    return element;
}

/*
a. Dependencies: toggleCommentSection, toggleCommentButton
b. Receives 2 parameters: (see addButtonListeners function description)
i. The event from the click event listener is the 1st param
ii. Receives a postId as the 2nd parameter
c. Sets event.target.listener = true (I need this for testing to be accurate)
d. Passes the postId parameter to toggleCommentSection()
e. toggleCommentSection result is a section element
f. Passes the postId parameter to toggleCommentButton()
g. toggleCommentButton result is a button
h. Return an array containing the section element returned from
toggleCommentSection and the button element returned from
toggleCommentButton: [section, button]
*/

function toggleComments(event, postId){
    
    // checks if event or postid passed else returns undefined
    if(event || !postId){return undefined;}
    
    // asigns event target listener to true
    event.target.lister = true;
    
    // asigns section to toggleCommentSection(postId) return value
    let section = toggleCommentSection(postId);

    // asigns section to toggleCommentSection(postId) return value
    let button = toggleCommentButton(postId);
    
    // returns array with toggleCommentSection and toggleCommentButton retuned values
    return[section, button];
}

/*
a. Dependencies: removeButtonListeners, deleteChildElements, displayPosts,
addButtonListeners
b. Is an async function
c. Receives posts JSON data as a parameter
d. Call removeButtonListeners
e. Result of removeButtonListeners is the buttons returned from this function
f. Call deleteChildElements with the main element passed in as the parameter
g. Result of deleteChildElements is the return of the main element
h. Passes posts JSON data to displayPosts and awaits completion
i. Result of displayPosts is a document fragment
j. Call addButtonListeners
k. Result of addButtonListeners is the buttons returned from this function
l. Return an array of the results from the functions called: [removeButtons, main,
fragment, addButtons]
*/

async function refreshPosts(posts){
    
    // checks if posts is passed else returns undefined
    if (!posts){return undefined;}
    
    // removeButtons = removeButtonListeners function
    let removeButtons = removeButtonListeners();
    
    // selects main
    let main = deleteChildElements(document.querySelector('main'));
    
    // assigns fragment to displayPosts(posts) return value;
    let fragment = await displayPosts(posts);
    
    // // removeButtons = removeButtonListeners function
    let addButtons = addButtonListeners();
    
    // returns array of removeButtons, main, fragment, addButtons
    return [removeButtons, main, fragment, addButtons];
}

/*
a. Dependencies: getUserPosts, refreshPosts
b. Should be an async function
c. Automatically receives the event as a parameter (see cheatsheet)
d. Defines userId = event.target.value || 1; (see cheatsheet)
e. Passes the userId parameter to await getUserPosts
f. Result is the posts JSON data
g. Passes the posts JSON data to await refreshPosts
h. Result is the refreshPostsArray
i. Return an array with the userId, posts and the array returned from refreshPosts:
[userId, posts, refreshPostsArray]
*/

async function selectMenuChangeEventHandler(e){
    let userId = e?.target?.value || 1;
    
    // gets posts based on userId
    let posts = await getUserPosts(userId);
    
    // refrshes posts
    let refreshPostsArray = await refreshPosts(posts);
    
    // returns userId, posts, refreshPostsArray 
    return [userId, posts, refreshPostsArray];
}

/*
a. Dependencies: getUsers, populateSelectMenu
b. Should be an async function
c. No parameters.
d. Call await getUsers
e. Result is the users JSON data
f. Passes the users JSON data to the populateSelectMenu function
g. Result is the select element returned from populateSelectMenu
h. Return an array with users JSON data from getUsers and the select element
result from populateSelectMenu: [users, select]
*/

async function initPage(){

    // gets users
    let users = await getUsers();
    
    // fiils select
    let select = populateSelectMenu(users);
    
    // returns array of users and select
    return [users, select];
}

/*
a. Dependencies: initPage, selectMenuChangeEventHandler
b. Call the initPage() function.
c. Select the #selectMenu element by id
d. Add an event listener to the #selectMenu for the “change” event
e. The event listener should call selectMenuChangeEventHandler when the change
event fires for the #selectMenu
f. NOTE: All of the above needs to be correct for you app to function correctly.
However, I can only test if the initApp function exists. It does not return anything.
*/

function initApp(){
    
    // init page
    initPage();
    
    // sets select to #selectMenu element
    let select = document.querySelector('#selectMenu');
    
    // add listener to select element
    select.addEventListener("change",selectMenuChangeEventHandler,false); 
}

// add event listener
document.addEventListener("DOMContentLoaded",initApp,false);