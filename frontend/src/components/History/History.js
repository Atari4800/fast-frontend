import RouteService from '../../services/RouteService';

const routeService = new RouteService;

class History extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            routeList: {id: id, routes:[], others:[]},
            recipients: [],
            drivers: [],
            //status: "1",
        };
    }

    componentDidMount() {
        routeService.getRouteList(this.state.routeList.id).then(result => {
            console.log(result)
            this.setState({
                routeList: result,        
                status: result.solver_status
            })
        })
    }

    displayAllRoutes() {

    }
}