import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from 'material-table';
import Search from "@material-ui/icons/Search";
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';

const Dashboard = () => {

  const [Userdetail, setUserdetail] = useState({});
  const [isLoading, setIsLoading]=useState(true)

  const loadUser = async () => {
    var result = await axios.get("https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json");
    setUserdetail(result.data);
    setIsLoading(false)
 };

  useEffect(() => {
    loadUser();
  },[])

  return (
    <div style={{ maxWidth: '100%' }}>
      {!isLoading && <MaterialTable
        icons={{
          Search: () => <Search />,
          FirstPage: () => <FirstPage />,
          LastPage: () => <LastPage />,
          NextPage: () => <ChevronLeft />,
          PreviousPage: () => <ChevronRight />,
          ResetSearch: () => <Clear />
        }}
        style={{
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '2%'
        }}
        headerStyle={{ backgroundColor: 'green' }}
        columns={[

          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Contact Number', field: 'contact_number' },
          { title: 'Gender', field: 'gender' }

        ]}

        data={Userdetail}
        title=" "
        
      />}
    </div>
  )



}

export default Dashboard;