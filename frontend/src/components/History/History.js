import RouteService from '../../services/RouteService';
import  React, { Component } from  'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import RecipientService from '../../services/RecipientService'
import DriverService from '../../services/DriverService'
const routeService = new RouteService;

class History extends Component {

    constructor(props) {
        super(props);
        const {id} = props.match.params;
        this.state  = {
            routeList: {id: id, routes:[], others:[]},
            recipients: [],
            drivers: [],
        };

        this.displayAllRoutes = this.displayAllRoutes.bind(this);
        this.displayAnyRoute = this.displayAnyRoute.bind(this);
    }

    componentDidMount() {
        routeService.getRouteList().then(result => {
            console.log(result)
            this.setState({
                routeList: result
            })
        })
    }


    displayAllRoutes() {
        let routes = this.state.routeList
        let str = "\n\nSomething "
        for (let i = 0; i < routes.length; i++) {
            str += routes[i].routes + " "
        }
        return `Route:${this.state.routeList}\n ${str}`;
    }

    displayAnyRoute() {
        return `Blah:${this.state.routeList.routes}\n`
    }


    render() {
        return (
                <h1>
                    {this.displayAnyRoute()}
                    {this.state.routeList.length + "\n"}
                    {this.state.routeList[0]}
                    {this.displayAllRoutes()}
                    {/* {this.state.routeList.map( r => 
                        <p>{r.total_distance}</p>
                    )} */}
                </h1>
        )        
    }



        //     <Container>
        //         {this.state.routeList.routes.map( r =>
        //         <Card border="dark" className="mb-4 mt-4">
        //         <Card.Title className="card-header border-dark bg-grey">

        //         </Card.Title>
        //         <Card.Header className="pt-1 pl-1 pr-1 pb-1 border-dark bg-grey">
        //         <Table className="hover table  mb-0">
        //                 <thead>
        //                     <tr>
        //                         <th>Capacity</th>
        //                         <th>Total Quantity</th>
        //                         <th>Expected Distance Traveled (in Miles)</th>
        //                         <th>Expected Duration (in Minutes)</th>
        //                         <th>Itinerary</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     <tr>
        //                         <td>{this.getCapacity(r)}</td>
        //                         <td>{r.total_quantity}</td>
        //                         <td>{Math.round(r.total_distance)}</td>
        //                         <td>{Math.round(r.total_duration)}</td>
        //                         <td>{this.displayAllRoutes(r)}</td>
        //                     </tr>
        //                 </tbody>
        //             </Table>
        //         </Card.Header>
        //         <Card.Subtitle className="pb-2 pt-4 pl-4 title">
        //             <Col>
        //                 <Row className="d-flex flex-row">
        //                     <Col sm={8} className="title">
        //                         Delivery List
        //                     </Col>   
        //                 </Row>
        //             </Col> 
        //         </Card.Subtitle>
        //         <Card.Body className="card-body pl-1 pr-1 pt-1">
        //             <Table className="hover table mb-0">
        //                 <thead>
        //                     <tr>
        //                         <th>Name</th>
        //                         <th>Address</th>
        //                         <th>Apt #</th>
        //                         <th>City</th>
        //                         <th>State</th>
        //                         <th>Zip Code</th>
        //                         <th>Phone Number</th>
        //                         <th>Quantity</th>
        //                         <th>Comments</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //             {r.itinerary.map( l =>                     
        //                     <tr>
        //                         <td>{this.getRecipientName(l)}</td>
        //                         <td>{l.address.address}</td>
        //                         <td>{this.getRecipientRoomNumber(l) ? this.getRecipientRoomNumber(l) : ""}</td>
        //                         <td>{l.address.city}</td>
        //                         <td>{l.address.state}</td>
        //                         <td>{l.address.zipcode}</td>
        //                         <td>{this.getPhone(l)}</td>
        //                         <td>{l.demand}</td>
        //                         <td>{this.getRecipientComment(l)}</td>
        //                     </tr>
        //                 )}
        //                 </tbody>
        //             </Table>
        //         </Card.Body>
        //         </Card>
        //         )}            
        // </Container>
        //);

}
export default History;