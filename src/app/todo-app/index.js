import { compose } from 'redux';

import TodoApp from './todo-app.component';
import TodoAppContainer from './todo-app.container';

export default compose (TodoAppContainer)(TodoApp);