//*NOTE: All response from API Call will contain the following structure
/*


 {
 "status": "success",=====> will contain either 'success' or 'failure'
 "code": 200,======> status code Ex:404,500,200
 "data": {},====>>requested data
 "error": ""====>>if any errors
 }


 */

/*Service Factory for API Calls*/

/*

 create a service module using factory and 'ngResource' as dependency.

 This Service Should contain the configuration objects for the following APIs.

 1.To create a book
 =======================
 url:http://localhost:3000/book
 method:POST
 input data format:{name:'', description:'', price:'', category:''}

 2.To update a book
 =======================
 url:http://localhost:3000/book/id
 method:PUT
 input data format:{name:'', description:'', price:'', category:''}
 note:Here id is the id of book.

 3.To remove a book
 ========================
 url:http://localhost:3000/book/id
 method:DELETE
 note:Here id is the id of book.

 */

/*End of Service Factory*/

/*Create Angular Module*/

/*
 create a angular module in the name of 'Capstone' and put 'ui.router' as first dependency
 and the Service you have created above as a second dependency.
 */

/*End Of Module Creation*/

/*App Route Config*/

/*
 create following states here for Capstone for navigation.using the state provider.

 1.book List
 ================
 *use the page public/pages/list.html
 *define your own controller for this state.

 2.book creation
 ===================
 *use the page public/pages/book.html
 *define your own controller for this state.


 3.book update
 =================
 *use the page public/pages/book.html
 *define your own controller for this state.

 use the Url route provider to set the default opening page.
 */


/*End of Route Config*/




/*Book List Controller
 ==============================

 1.write your code to get list of Books using http provider in angularJs.

 URL: url:http://localhost:3000/Books
 method:GET

 2.after getting the list of Books, iterate the html elements to show all the Books as shown in requirement Document and
 iterate the Book list and get the unique category list.

 using this unique category list, display the categories in category filter section as shown in requirement Document .
 add "All Categories" as default in category filer section.

 3.write a function to filter the Books when a category is clicked in category filter section
 when "All categories" Clicked, show All Books.

 4.when edit button clicked, app should go to Book edit state.write a function to do that.

 5.when remove button clicked, a bootstrap modal should open to confirm the removal. upon confirmation,
 Book should be removed from the database. an alert message should be shown in green/Red upon successful/unsuccessful removal

 this alert messages should be hidden in 3 seconds. use timeout provider in angularJs for that.

 use the configured service object to make API call for removal.


 * */

/*End of Book List Controller*/

/*Book Create Controller
 ================================
 1. write a function to save the Book.
 call this function when submit button in Book page clicked.

 an alert message should be shown in green/Red upon successful/unsuccessful creation of Book

 after successful creation of Book, app should navigate to list page(Book list state)
 use the configured service object to make API call for Creating Book.

 2.write a function to remove the form values in the Book page.
 call this function when cancel button in Book page clicked.

 * */


/*End of Book Create Controller*/

/*Book edit Controller
 ================================

 1.populate the details of the Book which is going to be updated into form using 2 way binding.

 2. write a function to update the Book.
 call this function when submit button in Book page clicked.

 an alert message should be shown in green/Red upon successful/unsuccessful update of Book

 after successful update of Book, app should navigate to list page(Book list state)

 3.write a function to remove the form values in the Book page.
 call this function when cancel button in Book page clicked.

 * */
/*End of Book edit Controller*/