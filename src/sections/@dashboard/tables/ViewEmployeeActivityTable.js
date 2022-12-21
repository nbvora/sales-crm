import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Table, Container, Typography, TablePagination } from '@mui/material';
import { dispatch } from '../../../redux/store';

import sagaActions from '../../../redux/actions';
// hooks
import useSettings from '../../../hooks/useSettings';
// _mock_
// components
import Page from '../../../components/Page';
import { UserListHead, UserListToolbar } from '../user/list';

// ----------------------------------------------------------------------
ViewEmployeeActivityTable.propTypes = {
  tableRows: PropTypes.any,
  tableColumn: PropTypes.any,
};
export default function ViewEmployeeActivityTable({ tableRows, tableColumn }) {
  const { themeStretch } = useSettings();

  const [userList, setUserList] = useState(tableRows);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [checked, setchecked] = useState(true);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = () => {
    setchecked(!checked);

    if (checked) {
      const newSelecteds = userList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleDeleteMultiUser = (selected) => {
    dispatch({ type: sagaActions.DELETE_EMPLOYEE_LIST, selected });
    const deleteUsers = userList.filter((user) => !selected.includes(user.name));
    setSelected([]);
    setUserList(deleteUsers);
  };

  return (
    <Page title="Employee List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            onDeleteUsers={() => handleDeleteMultiUser(selected)}
          />
          <Table>
            <UserListHead
              checkbox={false}
              order={order}
              orderBy={orderBy}
              headLabel={tableColumn}
              rowCount={userList.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
          </Table>
          <Typography
            sx={{ display: 'flex', justifyContent: 'center', fontWeight: 200, fontSize: 22, lineHeight: 3.5 }}
          >
            {'Data Not Found'}
          </Typography>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
