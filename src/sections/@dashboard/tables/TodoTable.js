import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  MenuItem,
} from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
// _mock_
import Scrollbar from '../../../components/Scrollbar';
import SearchNotFound from '../../../components/SearchNotFound';
import Iconify from '../../../components/Iconify';
import { UserListHead, UserListToolbar } from '../user/list';

// ----------------------------------------------------------------------
TodoTable.propTypes = {
  tableRows: PropTypes.array,
  tableColumn: PropTypes.any,
  handleedit: PropTypes.func,
  handleDeleteUser: PropTypes.func,
  title: PropTypes.string,
};
export default function TodoTable({ tableRows, tableColumn, handleedit, handleDeleteUser, title }) {
  const hideSortIcon = true;
  const { themeStretch } = useSettings();
  const [userList, setUserList] = useState([]);
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
    console.log('fileter', filterName);
    setFilterName(filterName);
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0;

  const filteredUsers = applySortFilter(userList, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && Boolean(filterName);
  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  useEffect(() => {
    setUserList(tableRows);
  }, [tableRows, userList]);
  return (
    <Container maxWidth={themeStretch ? false : 'lg'}>
      <Card>
        <UserListToolbar
          tableName={title}
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                hideSortIcon={hideSortIcon}
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
                {filteredUsers.map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    tabIndex={-1}
                    role="checkbox"
                    // selected={isItemSelected}
                    // aria-checked={isItemSelected}
                  >
                    <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                      <Typography variant="subtitle2" noWrap>
                        {row}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ padding: '5px' }}>
                      <Box sx={{ display: 'flex' }}>
                        <MenuItem>
                          <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} onClick={() => handleedit(index)} />
                        </MenuItem>
                        <MenuItem>
                          <Iconify
                            icon={'eva:trash-2-outline'}
                            sx={{ ...ICON }}
                            onClick={() => handleDeleteUser(index)}
                          />
                        </MenuItem>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
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
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return array.filter((_user) => _user.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}
