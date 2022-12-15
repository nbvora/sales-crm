import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Typography, OutlinedInput, MenuItem } from '@mui/material';
import { useState } from 'react';
import Iconify from '../../components/Iconify';

CommanTodo.propTypes = {
  title: PropTypes.string,
};

export default function CommanTodo({ title }) {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setedit] = useState('');
  const [index, setIndex] = useState();
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
  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
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
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" sx={{ margin: 0 }} gutterBottom>
          {title}
        </Typography>
        <Card sx={{ p: 3, height: '400px' }}>
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

          {todos.map((item, index) => (
            <MenuItem
              key={index}
              sx={{
                width: '448px',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <Typography variant="h4" sx={{ margin: 0 }} gutterBottom>
                {item}
              </Typography>
              <Box>
                <Iconify icon={'eva:edit-fill'} sx={{ ...ICON, color: 'blue' }} onClick={() => handleedit(index)} />
                <Iconify
                  icon={'eva:trash-2-outline'}
                  sx={{ ...ICON, color: 'error.main' }}
                  onClick={() => handleDeleteUser(index)}
                />
              </Box>
            </MenuItem>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
}
