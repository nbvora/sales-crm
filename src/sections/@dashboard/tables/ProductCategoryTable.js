import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  Table,
  Box,
  // Avatar,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  MenuItem,
} from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import Avatar from '../../../components/Avatar';
import StatusToggle from '../../../components/dialogBox/StatusToggle';
import Scrollbar from '../../../components/Scrollbar';
import { PATH_DASHBOARD } from '../../../routes/paths';
import SearchNotFound from '../../../components/SearchNotFound';
import Iconify from '../../../components/Iconify';
import { UserListHead, UserListToolbar } from '../user/list';

// ----------------------------------------------------------------------
ProductCategoryTable.propTypes = {
  tableRows: PropTypes.any,
  tableColumn: PropTypes.any,
};
export default function ProductCategoryTable({ tableRows, tableColumn }) {
  const addButtonName = 'Add New Category';
  const { themeStretch } = useSettings();

  const [userList, setUserList] = useState(tableRows);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [checked, setchecked] = useState(true);
  const [orderBy, setOrderBy] = useState('category_name');
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
  const handleDeleteUser = (userId) => {
    const deleteUser = userList.filter((user) => user.id !== userId);
    setSelected([]);
    setUserList(deleteUser);
  };
  const handleDeleteMultiUser = (selected) => {
    const deleteUsers = userList.filter((user) => !selected.includes(user.name));
    setSelected([]);
    setUserList(deleteUsers);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0;

  const filteredUsers = applySortFilter(tableRows, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && Boolean(filterName);
  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <Page title="Product Category">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Card>
          <UserListToolbar
            addButtonName={addButtonName}
            addButtonLink={'add'}
            withAddButton={addButtonName}
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            onDeleteUsers={() => handleDeleteMultiUser(selected)}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
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
                <TableBody>
                  {filteredUsers?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const isItemSelected = selected.indexOf(row.category_name) !== -1;
                    return (
                      <TableRow
                        hover
                        key={row.id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                          <Avatar name={`${row.category_name}`} />

                          <Typography variant="subtitle2" noWrap>
                            {row.category_name}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ alignItems: 'center', padding: '5px' }}>
                          <StatusToggle />
                        </TableCell>
                        <TableCell align="left">
                          <Box sx={{ display: 'flex' }}>
                            <MenuItem style={{ padding: '0px' }}>
                              <Iconify
                                icon={'eva:trash-2-outline'}
                                sx={{ ...ICON }}
                                onClick={() => handleDeleteUser(row.id)}
                              />
                            </MenuItem>

                            <MenuItem
                              style={{ padding: '0px' }}
                              component={RouterLink}
                              to={`${PATH_DASHBOARD.inventory.productcategory}/${paramCase(`${row.id}`)}/edit`}
                            >
                              <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
                            </MenuItem>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                  {tableRows.length === 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Typography gutterBottom align="center" variant="subtitle1">
                          Data not found
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return array.filter((_user) => _user.category_name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis?.map((el) => el[0]);
}
