import React, { useEffect, useState } from "react";
import './App.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";

const Quries= () => {
  const Api_Url="https://62b56502530b26da4ccdef2d.mockapi.io/userdetails/"

  const [apiData, setApiData] = useState([]);
  const deleteUser = async (id) => {
    await axios.delete(Api_Url + id);
    callGetApi();
  };
  const callGetApi = async () => {
    const resp = await axios.get(Api_Url);
    setApiData(resp.data);
  };
  useEffect(() => {
    callGetApi();
  }, []);
  return (
    <div>
      <div className="Read">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{backgroundColor:"#534f8a"}}>
              <TableRow >
              <TableCell align="center" ><h3 className="thead">S.No</h3></TableCell>
                <TableCell align="center" ><h3 className="thead">Name</h3></TableCell>
                <TableCell align="center"><h3 className="thead">Number</h3></TableCell>
                <TableCell align="center"><h3 className="thead">Email</h3></TableCell>
                <TableCell align="center"><h3 className="thead">Location</h3></TableCell>
                <TableCell align="center"><h3 className="thead">Queries</h3></TableCell>
                <TableCell align="center"><h3 className="thead">Delete</h3></TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell align="center">{data.id}</TableCell>
                  <TableCell align="center">{data.uname}</TableCell>
                  <TableCell align="center">{data.number}</TableCell>
                  <TableCell align="center">{data.email}</TableCell>
                  <TableCell align="center">{data.location}</TableCell>
                  <TableCell align="center">{data.query}</TableCell>
                  
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => deleteUser(data.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
            
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
 
export default Quries;







