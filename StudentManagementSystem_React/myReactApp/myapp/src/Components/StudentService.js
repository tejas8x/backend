import axios from "axios";
class StudentService{
    constructor(){
        this.baseurl="http://localhost:4001/";
    }

    getStudents(){
        return axios.get(this.baseurl+"stud");
    }

    

}
export default new StudentService();