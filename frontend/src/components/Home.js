import './Home.css'

function Home() {
    return (
        <div class="content">
            <h1>About</h1><br />
            <h5>This App can be used to create a multiple vehicle route delivery. By inputting the data of your drivers and recipients, 
                this app will use Bing Maps to create an optimized route for your drivers to follow, as well as allow you to view a map 
                of those routes and check some basic metrics of the routes.</h5><br />
            <h1>Instructions</h1><br />
            <h3>How to add new data:</h3>
            <p>
                To add a single new Driver to this App: 
                <ol>
                    <li>Click on Data at the upper right</li>
                    <li>Click Add Driver to the right of the Driver title</li>
                    <li>Enter all eligable fields of data</li>
                    <li>Click the Submit button</li>
                </ol>

                To add a single new Recipient to this App: 
                <ol>
                    <li>Click on Data at the upper right</li>
                    <li>Click Add Recipient to the right of the Driver title</li>
                    <li>Enter all eligable fields of data</li>
                    <li>Click the Submit button</li>
                </ol>

                Once a Driver or Recipient has been added, you may edit the data by clicking on Edit in
                any Driver or Recipients row.<br /><br />
                <h3>How to add multiple Drivers or Recipienmts simultaneously:</h3>
                To add multiple Drivers or Recipients at a time, prepare an Excel spreadsheet 
                or Comma Separated Value (CSV) file with the header format as follows:<br /><br />
                For Driver the header row should be in the format<br />
                Firstname | Lastname | Role | Availability | Language | Phone | Capacity<br /><br />
                For Recipient the header row should be in the format<br />
                Firstname | Lastname | Address | City | State | Zipcode | Center | Room_Number | Language | Quantity<br /><br />
                These files can be uploaded by clicking on the Browse Files button and browsing to your prepared file on your computer.<br /><br />
                <h3>How to create new Routes:</h3>
                To create a Route from the provided Data, at the top of the screen, click Create Route, you will be taken to a new page. 
                <ol>
                    <li>Select the Maximum Capacity hat the Drivers can deliver</li>
                    <li>Select the Maximum Hours the volunteers can work this assignment</li>
                    <li>Select the Departure Location if one is not already selected</li><br />
                    <li>Enter the drivers to be added to the assignment
                        <ol>
                            <li>Click the empty box next to Driver</li>
                            <li>Choose a driver from the dropdown list</li>
                            <li>Click the empty space next to the added driver and repeat to add more drivers</li>
                        </ol>
                    </li>
                    <li>Enter the Recipients to be delivered to on this assignment
                        <ul><li>Enter this the same way as Drivers above</li></ul>
                    </li>
                    <li>Click Create Route button</li>
                </ol>
                The algorithm will run and display the results when it is finished.<br /><br />
                
                <h3>Viewing Results</h3>
                Once the assignment is complete, you may:
                <ul>
                    <li>Click View Map to open a new window containing a static Bing map of the resulting routes</li>
                    <li>Click View Metrics button to open a window containing calculated metrics for these routes</li>
                </ul>
                <br />
            </p>
            <h1>Credits</h1><br />
            <p>
                <h4>Sponsored by:</h4>
                Fabio Torres Vitor, Ph. D. <br />
                Assistant Professor<br />
                Department of Mathematics <br />
                University of Nebraska at Omaha<br />
                Email: ftorresvitor@unomaha.edu<br />
                Phone: (402) 554-2691<br /><br />

                <h4>Main Contributors:</h4>
                Liam Betterman<br />
                Scott Negus<br />
                Kamryn Pullen<br />
                Isidore Sossa<br /><br />

                <h4>Additional Contributions:</h4>
                Nick Cox<br />
                Joel McMaken<br />
                Will Palmer<br />
                Jake Peterson<br /><br />
            </p>
        </div>
    );
}

export default Home;