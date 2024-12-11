import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useReducer, useState } from 'react';
import { TasksContext } from './context/todos';
import { FilterValue, Task } from './types';
import Field from './components/Field';
import TasksList from './components/TasksList';
import Footer from './components/Footer';
import taskReducer from './utils/taskReducer';

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState(FilterValue.all);

  return (
    <TasksContext.Provider value={{ state, dispatch, filter, setFilter }}>
      <Container maxWidth='sm'>
        <Box sx={{ my: 4 }}>
          <Typography
            variant='h2'
            component='h1'
            sx={{ fontWeight: 'light', mb: 2, color: '#E9D9D8' }}
            align='center'
          >
            todos
          </Typography>
          <Paper
            square
            variant='outlined'
            sx={{ minHeight: 200, position: 'relative', pb: '42px' }}
          >
            <Box
              sx={{
                p: 1,
                mb: 0,
                borderBottom: state.length ? 'none' : '1px solid #E0E0E0',
              }}
            >
              <Field />
            </Box>
            <TasksList />
            {!state.length && (
              <Typography
                variant='h4'
                color='#E0E0E0'
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                No todos
              </Typography>
            )}
            <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <Footer />
            </Box>
          </Paper>
        </Box>
      </Container>
    </TasksContext.Provider>
  );
}
