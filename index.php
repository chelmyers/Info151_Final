<?php
    require_once('database.php');

    // Get apartments
    $query = "SELECT * FROM apartments
              ORDER BY id";
    $apartments = $db->query($query);
?>

<!-- Call header -->
<?php include 'view/header.php'; ?>
		
		<div id="content">
			
			<header>
            	<a id="manage-apart" href="manage-apartments.php">Manage Apartments</a>
				
				<!-- logo -->
				<a href="index.php">
                	<img id="logo" src="a/img/aptAppLogo.png" alt="The Apt App"/>
            	</a>

				<div id="searchBar">

					<form>
						<div id="sect1">
							<label>Neighborhood:</label>
							<select id="neighborhoods" name="neighborhoods" >
								<option value="Select One">Select One</option>
								<option value="Rittenhouse Square">Rittenhouse Square</option>
								<option value="Washington Square">Washington Square</option>
								<option value="Old City">Old City</option>
								<option value="University City">University City</option>
                                <option value="Logan Square">Logan Square</option>
								<option value="All">All</option>
							</select>
												
							<br/>

							<label>Move In Date: </label>
							<input id="moveInDate" type="text" name="date" placeholder="MM/DD/YYYY"/>
						
						</div> <!--sect1-->
						
						
						<div id="sect2">
							<label>Bedrooms:</label>
							<input id="bedroom0" type="radio" name="bedrooms" value="0" checked >0
							<input id="bedroom1" type="radio" name="bedrooms" value="1">1
							<input id="bedroom2" type="radio" name="bedrooms" value="2">2
							<input id="bedroom3" type="radio" name="bedrooms" value="3">3
								
							<br/>
		
							<label>Bathrooms:</label>
							<input id="bathroom1" type="radio" name="bathroom" value="1" checked>1
							<input id="bathroom2" type="radio" name="bathroom" value="2">2
							<input id="bathroom3" type="radio" name="bathroom" value="3">3
						</div> <!--sect2-->
						
						
						<div id="sect3">	
							<label style="padding-right:2px;">Min Rent: </label>
							<input id="min" type="number" name="min"/>
					
							<br/>
							
							<label>Max Rent: </label>
							<input id="max" type="number" name="max"/>
						</div> <!--sect3-->
			
	
						<div id="sect4">
							<button id="submit" type="button">Submit</button>					
							<input id="reset" type="reset" value="Reset"/>
						</div> <!--sect4-->
						
					</form>
	
				</div> <!--sidebar-->

				
			</header>
			
			<div id="main">

			<!-- set up counter to see how many apartments are add -->
            <?php $i=1; ?> 
            <!-- add div for each apartment -->
            <?php foreach ($apartments as $apartment) : ?>
                <div id="apart<?php echo $i; ?>" class="apartment" >
                    <a href="a/img/aparts/<?php echo $apartment['imagename']; ?>"><img class="apartImg" src="a/img/aparts/<?php echo $apartment['imagename']; ?>" /></a>
                    <p>Neighborhood: <span id="neigh<?php echo $i; ?>"><?php echo $apartment['neighborhood']; ?></span></p>
                    <p>Bedrooms: <span id="bed<?php echo $i; ?>"><?php echo $apartment['bedroom']; ?></span></p>
                    <p>Bathrooms: <span id="bath<?php echo $i; ?>"><?php echo $apartment['bathroom']; ?></span></p>
                    <p>Available: <span id="avail<?php echo $i; ?>"><?php echo $apartment['movedate']; ?></span></p> 
                    <p>Monthly Rent: $<span id="rent<?php echo $i; $i++ ; ?>"><?php echo $apartment['rent']; ?></span></p>
                    
                    <a href="mailto:chel.myers@gmail.com?subject=Listing%<?php echo $apartment['id']; ?>"><img class="mailIcon" src="a/img/mailIcon.png" alt="Send Email About Property"/></a>

                </div>
            <?php endforeach; ?>

			

				

			</div> <!--main-->
			
		</div><!--content-->
		
    
<?php include 'view/footer.php'; ?>