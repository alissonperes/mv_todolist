import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectView from './views/project';
import projectContrller from './controllers/project.controller';

const defaultProject = projectContrller();
projectView(defaultProject);
