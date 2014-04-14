<?php
    require_once('database.php');

    // get the apartments from database
    $query = "SELECT * FROM apartments
              ORDER BY id";
    $apartments = $db->query($query);
?>
<?php include 'view/header.php'; ?>
 
 <div id="content">
            
            <header>
               <a href="index.php">
                <img id="logo" src="a/img/aptAppLogo.png" alt="The Apt App"/>
               </a>
            </header>
            
            <h2>Apartments Listed</h2>
            <table id="listed-apartments">
                <tr>
                    <th>ID</th>
                    <th>Neighborhood</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    <th>Move in Date</th>
                    <th>Rent</th>
                    <th>Image Name</th>
                    <th>X</th>
                </tr>
                <?php foreach ($apartments as $apartment) : ?>
                <tr>
                    <td class="right"><?php echo $apartment['id']; ?></td>
                    <td><?php echo $apartment['neighborhood']; ?></td>
                    <td class="right"><?php echo $apartment['bedroom']; ?></td>
                    <td class="right"><?php echo $apartment['bathroom']; ?></td>
                    <td class="right"><?php echo $apartment['movedate']; ?></td>
                    <td class="right"><?php echo $apartment['rent']; ?></td>
                    <td class="right"><?php echo $apartment['imagename']; ?></td>
                    <td class="right"><form action="delete_apartment.php" method="post"
                              id="delete_apartment_form">
                        <input type="hidden" name="id"
                               value="<?php echo $apartment['id']; ?>" />
                        <input type="submit" value="Delete" />
                    </form></td>
                </tr>
                <?php endforeach; ?>
            </table>
            
            <h2>Add Apartment</h2>
            <div id="add-form">
                <form action="add_apartment.php" method="post"
                      id="add_apartment_form">

                    <label>Neighborhood:</label>
                    <select name="neighborhood">
                        <option value="Old City">Old City</option>
                        <option value="Rittenhouse Square">Rittenhouse Square</option>
                        <option value="Washington Square">Washington Square</option>
                        <option value="Logan Square">Logan Square</option>
                        <option value="University City">University City</option>
                    </select>
                    <br />

                    <label>Bedrooms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id="bedroom0" type="radio" name="bedroom" value="0" checked >0
                    <input id="bedroom1" type="radio" name="bedroom" value="1">1
                    <input id="bedroom2" type="radio" name="bedroom" value="2">2
                    <input id="bedroom3" type="radio" name="bedroom" value="3">3
                    <br />

                    <label>Bathrooms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id="bathroom1" type="radio" name="bathroom" value="1" checked>1
                    <input id="bathroom2" type="radio" name="bathroom" value="2">2
                    <input id="bathroom3" type="radio" name="bathroom" value="3">3
                    <br />

                    <label>Move in Date:&nbsp;&nbsp;&nbsp;</label>
                    <input id="movedate" type="input" name="movedate" />
                    <br />

                    <label>Rent:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="input" name="rent" />
                    <br />

                    <label>Image Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="input" name="imagename" />
                    <br />

                    <label>&nbsp;</label>
                    <input type="submit" value="Add Apartment" />
                    <br />
                </form>
            </div>

        </div>
    </div>

    <?php include 'view/footer.php'; ?>
</html>