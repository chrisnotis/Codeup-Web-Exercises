

$(document).ready(function() {
	console.log("document loaded");
	$("#btn-new-item").click(function(event){
		event.preventDefault();
		var content = $("#content").val();
		var priority = $("#priority").val();
		var due_date = $("#due_date").val();

		var data =   {
		    "content": content,
		    "priority": priority,
		    "due_date": due_date,
		   
		  };
		$.post("todo-json.php", data, function(item) {
			console.log(item);
		});
	});

	$("#btn-show-items").click(function(event){
		event.preventDefault(); /* prevents list from reloading on click */

		

		$.get("todo-json.php?complete false&order_by=priority&direction=asc", function(items, index) {
			console.log(items);
			$("#insertToDoItem").empty();
			
			items.forEach(function(item, index) {
			 // var date = item.created_at;
			 var date = moment(item.created_at).format("MMM Do YYYY");	
			 // due_date = item.due_date;
			 due_date = moment(item.due_date).format("MMM Do YYYY");	

			 var toDoList = 
			 	"<tr>" +
			 		"<td>" + item.content + "</td>" +
			 		"<td>" + item.priority + "</td>" +
			 		"<td>" + date + "</td>" +
			 		"<td>" + due_date + "</td>" +
			 		"<td>" +  "<button class='done-btn btn-danger' data-item='"+item.id+"'>Completed</button>" + "</td>"
			 	"</tr>";

			 	$("#insertToDoItem").append(toDoList);

			 });

			 $(".done-btn").on("click", function(item){
			 	console.log(item.target);
			 	$(item.target).closest("tr").fadeOut();
			 
			 	var dataItem =	$(item.target).data("item");
			 	console.log(dataItem);
			 

			 // $.post("todo-json.php?id=" + dataItem + "&action=delete", function(dataItem) {
			 // 	console.log(dataItem);
			 // })
			 });

			 				console.log("still on")		
			
		});

	});

})


 // $.ajax("data/inventory.json")
 //        .done(function(data) {
 //            console.log(data);


 //            data.forEach(function(element, index) {
                
 //            var productRow =    
 //                    "<tr>" +
 //                        "<td>"+ element.title +"</td>" +
 //                        "<td>"+ element.quantity +"</td>" +
 //                        "<td>"+ element.price +"</td>" +
 //                        "<td>"+ element.categories +"</td>" +
 //                    "</tr>";

 //                $("#insertProducts").append(productRow);

 //            }); 