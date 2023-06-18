import AppStyles from './app.module.css';

import Table from '../table/table';
import Modal from '../modal/modal';

import { loadTask } from '../../utils/api';

function App() {
  //16x10

  //☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐
  //☐▨▨▨▨▨☐▨▨▨▨▨☐▨▨☐
  //☐▨▨▨▨▨☐▨▨▨▨▨☐▨▨☐
  //☐☐☐☐▨▨☐▨▨☐☐☐☐▨▨☐
  //☐☐☐☐▨▨☐▨▨▨▨▨☐▨▨☐
  //☐☐☐☐▨▨☐▨▨▨▨▨☐▨▨☐
  //☐☐☐☐▨▨☐☐☐☐▨▨☐☐☐☐
  //☐▨▨▨☐☐☐▨▨▨▨▨☐▨▨☐
  //☐▨▨▨☐☐☐▨▨▨▨▨☐▨▨☐
  //☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐

  // const task = {
  //   task: [
  //     '0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0',
  //     '0','1','1','1','1','1','0','1','1','1','1','1','0','1','1','0',
  //     '0','1','1','1','1','1','0','1','1','1','1','1','0','1','1','0',
  //     '0','0','0','0','1','1','0','1','1','0','0','0','0','1','1','0',
  //     '0','0','0','0','1','1','0','1','1','1','1','1','0','1','1','0',
  //     '0','0','0','0','1','1','0','1','1','1','1','1','0','1','1','0',
  //     '0','0','0','0','1','1','0','0','0','0','1','1','0','0','0','0',
  //     '0','1','1','1','0','0','0','1','1','1','1','1','0','1','1','0',
  //     '0','1','1','1','0','0','0','1','1','1','1','1','0','1','1','0',
  //     '0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0',
  //   ],
  //   width: 16,
  //   height: 10
  // };

  //☐☐▨☐☐☐☐▨☐
  //☐▨☐▨☐☐▨☐▨
  //▨▨▨▨▨☐▨☐▨
  //▨☐☐☐▨☐☐▨☐
  //▨☐☐☐▨☐☐▨☐
  //▨▨▨▨▨☐☐▨☐

  // const task = {
  //   task: [
  //     '0', '0', '1', '0', '0', '0', '0', '1', '0',
  //     '0', '1', '0', '1', '0', '0', '1', '0', '1',
  //     '1', '1', '1', '1', '1', '0', '1', '0', '1',
  //     '1', '0', '0', '0', '1', '0', '0', '1', '0',
  //     '1', '0', '0', '0', '1', '0', '0', '1', '0',
  //     '1', '1', '1', '1', '1', '0', '0', '1', '0',
  //   ],
  //   width: 9,
  //   height: 6
  // };

  loadTask();

  return (
    // <div className={AppStyles.wrapper}>
    //   <div className={AppStyles.app}>
    //     <h1 className={AppStyles.title}>Picross game</h1>
    //     <main className={AppStyles.main}>
    //       <Table task={task}/>
    //     </main>
    //     <footer className={AppStyles.footer}>
    //       &copy;2023 Picross World
    //     </footer>
    //   </div>
    // </div>
    null
  );
}

export default App;
