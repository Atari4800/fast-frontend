import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import RouteService from '../../services/RouteService'
import RecipientService from '../../services/RecipientService'
import DriverService from '../../services/DriverService'

const recipientService = new RecipientService();
const routeService = new RouteService();
const driverService = new DriverService();


/**
 * This component is used to display route information for an 
 * individual driver.
 */
class History extends Component {

    /**
     * The constructor method initializes the component's state object and
     * binds the methods of the component to the current instance.
     * @param {Object} props The properties passed to the component.
     */
    constructor(props) {
        super(props);
        this.state = {
            route: {
                itinerary: [], total_distance: "", total_duration: "",
                total_quantity: "", first_name: "", last_name: ""
            },
            recipients: [],
            driver: { capacity: "", employee_status: "" }
        };

        this.getRecipientName = this.getRecipientName.bind(this)
        this.getPhone = this.getPhone.bind(this)
    }

    /**
     * Life cycle hook that is called after the component is first rendered.
     */
    componentDidMount() {
        let params = this.props.match.params

        recipientService.getRecipients().then(result => {
            this.setState({
                recipients: result
            })
        })

        routeService.getRoute(1).then(result => {
            this.setState({
                route: result
            })
        })

        driverService.getDriver(params.driverId).then(result => {
            this.setState({
                driver: result
            })
        })
    }

    /**
     * Function to return full name for individual recipients. Called 
     * for each client in the itinerary for each driver's route.
     * @param {Object} recipient Recipient object from the route.
     * @returns Client's full name.
     */
    getRecipientName(recipient) {
        let clients = this.state.recipients
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].id === recipient.id) {
                return clients[i].first_name + " " + clients[i].last_name
            }
        }
    }

    /**
     * Function to return phone number for individual recipients. Called 
     * for each client in the itinerary for the driver's route.
     * @param {Object} recipient Recipient object from the route.
     * @returns Client's phone number.
     */
    getPhone(recipient) {
        let clients = this.state.recipients
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].id === recipient.id) {
                return clients[i].phone
            }
        }
    }

    /**
     * The render method used to display the component. 
     * @returns The HTML to be rendered.
     */
    render() {
        return (
            <main className="content">
                <div className="row">
                <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Phone Number</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.route.itinerary.map(l =>
                            <tr>
                                <td>{this.getRecipientName(l)}</td>
                                <td>{l.address.address}</td>
                                <td>{l.address.city}</td>
                                <td>{l.address.state}</td>
                                <td>{l.address.zipcode}</td>
                                <td>{this.getPhone(l)}</td>
                                <td>{l.demand}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
                </div>
            </main>
        )
    }
} export default History
