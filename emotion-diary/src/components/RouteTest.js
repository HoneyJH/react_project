import {Link} from "react-router-dom";
const RouteTest = () =>{
    return (
        <>
            <Link to={"/"}>Home</Link>
            <br></br>
            <Link to={"/diary"}>Diary</Link>
            <br></br>
            <Link to={"/new"}>New</Link>
            <br></br>
            <Link to={"/edit"}>edit</Link>
            <br></br>
        </>
    );

};
export default RouteTest;