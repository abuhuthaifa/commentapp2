function toDoList() {
	var nameData = document.getElementById("name").value
	var commentData = document.getElementById("comment").value
	var imgData = document.getElementById("imagesCreate").value
	
	//1.Create a variable to get value of the form data you wish to grab

	var userNameText = document.createTextNode("Username : " + nameData)
	var commentText = document.createTextNode("Comment : " + commentData)
	
	//2. Create a TextNode for what data you want transfer to your div or UL
	var newDiv = document.createElement('div')
	newDiv.className = "newDiv"
	var newListItem = document.createElement("LI")
	newListItem.className = "newList"
	var newImages = document.createElement('img')
	newImages.setAttribute('src', imgData)
	newImages.className = "newImg"
	var newUserName = document.createElement("H2")
	newUserName.appendChild(userNameText)
	newUserName.className = "nametfr"
	var newComment = document.createElement("P")
	newComment.className = "commentTfr"
	newComment.appendChild(commentText)
	

	
	//3a. Use method to creatElement 
	//3b. Append child (textNode) to new comment to put in your new element
	newDiv.appendChild(newImages)
	newDiv.appendChild(newListItem)
	newDiv.appendChild(commentText)
	newListItem.appendChild(newUserName)

	//4.Append newUserName to LI element

	document.getElementById("transfer").appendChild(newDiv)

	//5. grab by the UL element by ID append the the list to the html element
	}




