<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>My First HTML Form</title>
	</head>

	<body>
		<h3>User Login</h3>
		<form method="post" action="/my_first_form.php">
		    <p>
		        <label for="username">Username</label>
		        <input id="username" name="username" type="text" placeholder="Username goes here">
		    </p>
		    <p>
		        <label for="password">Password</label>
		        <input id="password" name="password" type="password" placeholder="Password here">
		    </p>
		    <p>
        		<input type="submit" value="Login">
        <!-- <button>Login2</button> -->
    		</p>
		</form>
		<form>
		<h3>Compose an Email</h3>
			<p>
				<label for="email_to">To:</label>
				<input id="email_to" name="email_to" type="text" placeholder="Who are you sending this to?">
			</p>
			<p>
				<label for="email_from">From:</label>
				<input id="email_from" name="email_from" type="text" placeholder="Your email address here">
			</p>
			<p>
				<label for="subject">Subject:</label>
				<input id="subject" name="subject" type="text" placeholder="Subject goes here">
			</p>
			<p>  <!-- TYPICALLY FOR TEXT-->
				<label for="email_body">Comments</label>
				<textarea name="email_body" rows="10" cols="60" placeholder="Enter your message here"></textarea>
			</p>
			<p>
				<label>Would you like to save a copy of the email to your sent items? (check if yes)<input checked="checked" type="checkbox" id="save_to_email" value="yes" name="save_to_email"></label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
		<form>
			<h3>Multiple Choice Test</h3>
				<p>Who is your favorite?</p>
				<!--TYPICALLY FOR RADIO, CHECKBOXES AND THE LIKE-->
				<label>
					<input type="radio" name="kid" value="Isabella">Isabella
				</label>
				<label>
					<input type="radio" name="kid" value="Cooper">Cooper
				</label>
				<label>
					<input type="radio" name="kid" value="Caiden">Caiden
				</label>
				<label>
					<input type="radio" name="kid" value="Marin">Marin
				</label>
				<label>
					<input type="radio" name="kid" value="AllofThem">All of them
				</label>
			
					<p>Who is your favorite?</p>
				<label>
					<input type="radio" name="dog" value="Jonah">Jonah
				</label>
				<label>
					<input type="radio" name="dog" value="Jake">Jake
				</label>
				<label>
					<input type="radio" name="dog" value="Kailani">Kailani
				</label>
				<label>
					<input type="radio" name="dog" value="Jaiko">Jaiko
				</label>
				<label>
					<input type="radio" name="dog" value="NoneofThem">None
				</label>
				<button type="submit">Submit1</button>
		</form>
		<form>
			<p>What foods do you like?</p>
			<label>Scallops<input type="checkbox" id="scallops" value="scallops" name="foods[]">
			</label>
			<label>Steak<input type="checkbox" id="steak" value="steak" name="foods[]">
			</label>
			<label>Sandwiches<input type="checkbox" id="sandwiches" value="sandwiches" name="foods[]">
			</label>
			<label>Burgers<input type="checkbox" id="burgers" value="burgers" name="foods[]">
			</label>
			<button type="submit">Submit</button>
		</form>

		<form>
			<h3>Select Testing</h3>
				<label for="BrusselSprouts">Do you like Brussel Sprouts?</label>
				<select id="brusselsprouts" name="brusselsprouts[]" multiple>
					<option value="1">yes</option>
					<option value="2">no</option>
					<option value="3">maybe, sometimes</option>
				</select>
					<button type="submit">Submit</button>
		</form>

	</body>
</html>