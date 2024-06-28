import express from "express";
import { getEmpoyleeDetailID, getEmpoyleeDetails ,createemployee, editeEmployee, deleteEmployee} from "../Controllers/employeeControllers.js";



const routes = express.Router()

routes.get('/empDetails',getEmpoyleeDetails)
routes.get('/empDetails/:id',getEmpoyleeDetailID)
routes.post('/createEmp', createemployee)
routes.put('/edit/:id',editeEmployee)
routes.delete('/delete/:id',deleteEmployee)


export default routes;
