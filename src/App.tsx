import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { TasksContext } from './context/todos';
import { FilterValue, Task } from './types';
import Field from './components/Field';
import TasksList from './components/TasksList';
import Footer from './components/Footer';
import { Stack } from '@mui/material';

export default function App() {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const [filter, setFilter] = useState(FilterValue.all);
  console.log('filter: ', filter);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, filter, setFilter }}>
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
          <Paper square variant='outlined'>
            <Box sx={{ p: 1, mb: 0 }}>
              <Field />
            </Box>
            <TasksList />
            <Footer />
          </Paper>
        </Box>
      </Container>
    </TasksContext.Provider>
  );
}
