import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StudentService from "./StudentService";

const List = () => {

    let [studArr, setStudArr] = useState([]);
    let history=useHistory();

    useEffect(() => {
        StudentService.getStudents().then((result) => {
            setStudArr(result.data);
            console.log(studArr);
        }).catch(() => { });
    }, []);

  

    const renderList = () => {
        return studArr.map((stud) => {
            return <tr key={stud.roll}><td>{stud.name}</td><td>{stud.roll}</td><td>{stud.marks}</td>
           
                
                </tr>

        });
    }

return (
    <div>
        <table>
            <thead><tr><th>Name</th><th>Roll</th><th>Marks</th></tr></thead>
            <tbody>
                {renderList()}
            </tbody>
        </table>
        

    </div>
);


}
export default List;