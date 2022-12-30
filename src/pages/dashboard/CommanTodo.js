import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, OutlinedInput, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import TodoTable from '../../sections/@dashboard/tables/TodoTable';
import useSettings from '../../hooks/useSettings';
import { dispatch } from '../../redux/store';
import { getHeaderDetail } from '../../redux/slices/breadcrumbs';

const TABLE_HEAD = [
  { id: 'name', label: 'Employee', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: false },
];

CommanTodo.propTypes = {
  title: PropTypes.string,
};

export default function CommanTodo({ title }) {
  const { themeStretch } = useSettings();
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setedit] = useState('');
  const [index, setIndex] = useState();

  useEffect(() => {
    const headerDetail = [{ title: 'DistributorList & StockList', path: null }];
    dispatch(getHeaderDetail(headerDetail));
  }, []);

  const handlechange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value !== '') {
      if (!edit) {
        e.preventDefault();
        setTodos([...todos, value]);
      } else {
        todos[index] = value;
      }
      setValue('');
      setedit('');
    }
  };

  const handleedit = (id) => {
    setIndex(id);
    setedit(todos[id]);
    setValue(todos[id]);
  };
  const handleDeleteUser = (id) => {
    const filteItem = todos.filter((todos, index) => index !== id);
    setTodos(filteItem);
  };
  return (
    <>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Grid container spacing={3} sx={{ marginBottom: '20px', paddingLeft: '20px' }}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <OutlinedInput
                value={value}
                id="outlined-adornment-weight"
                onChange={handlechange}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <LoadingButton
                sx={{ width: '100px', height: '56px' }}
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                {!edit ? 'add' : 'edit'}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <TodoTable
        title={title}
        tableColumn={TABLE_HEAD}
        tableRows={todos}
        handleedit={handleedit}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
}
