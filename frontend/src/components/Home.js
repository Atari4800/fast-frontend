function Home() {
    return (
        <div class="content">
            <h1>About</h1><br />
            <h5>This App can be used to create a multiple vehicle route delivery. By inputting the data of your drivers and recipients, 
                this app will use Bing Maps to create an optimized route for your drivers to follow, as well as allow you to view a map 
                of those routes and check some basic metrics of the routes.</h5><br />
            <h2>Instructions</h2>
            <p>
                To use this app, click on Data at the upper right.<br /><br />
                To enter a new Driver, click Add Driver to the right of Driver.
                Enter all fields of data and click submit.<br /><br />
                To enter a new Recipient, click Add Recipient to the right of the Recipient section.
                Enter all fields required and click submit.<br /><br />
                Once a Driver or Recipient has been added, you may edit the data by clicking on Edit in
                any Driver or Recipients row.<br /><br />
                To add multiple Drivers or Recipients at a time, prepare an Excel spreadsheet 
                or Comma Separated Value (CSV) file with the header format as follows:<br /><br />
                For Driver the header row should be in the format<br />
                Firstname | Lastname | Role | Availability | Language | Phone | Capacity<br /><br />
                For Recipient the header row should be in the format<br />
                Firstname | Lastname | Address | City | State | Zipcode | Center | Room_Number | Language | Quantity<br /><br />
                These files can be uploaded by clicking on browse files and browsing to your prepared file on your computer.<br /><br />
                To create a Route from the provided Data, at the top of the screen, click Create Route, you will be taken to a new page 
                where you can enter the drivers and recipients to be added to the route. Please select the maximum capacity for the 
                drivers to deliver as well as the maximum total hours the volunteers can work for, as well as the departure location 
                for the drivers to begin and return to.<br /><br />
                Then to add Drivers, please click on the blank entry field to select a driver from a dropdown menu. 
                The capacity of that driver is displayed next to their name.<br /><br />
                To add the Recipients, please click the blank area of the recipients box to select a recipient from a  dropdown list.<br /><br />
                To add more recipients or drivers, again click the blank area next to the drivers oor recipients row and repeat for as many 
                drivers and recipients are available or needed.<br /><br />
                Then click Create Route and the algorithm will run and display the results when it is finished.<br /><br />
                Once the results are displayed, you will be presented with the results. 
                You may click View Map to see a static map of the resulting routes.<br />
            </p>
            <p>
                Sponsored by:<br />
                Dr. Fabio Torres Vitor<br /><br />

                Main Contributors:<br />
                Isidore Sossa<br />
                Liam Betterman<br />
                Kamryn Pullen<br />
                Scott Negus<br /><br />

                With additional contributions by:<br />
                Joel McMaken<br />
                Will Palmer<br />
                Jake Peterson<br />
                Nick Cox<br />
            </p>
        </div>
    );
}

export default Home;