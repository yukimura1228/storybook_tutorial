/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
// Japanese Comment
/* Reduxのstore/actions/reducerのシンプルな実装。
 * 実際のアプリケーションはもっと複雑であり、異なるファイルに分割されている。
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
// Japanese Comment
/* アプリケーションのロード時のストアの初期状態。
 * 通常、サーバーからこれを取得します。今はそれについて心配しません
 */
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];
const TaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
// Japanese Comment
/* ここでストアが作成されます。
 * Redux Toolkitのスライスについて詳しくはドキュメントを参照してください:
 * https://redux-toolkit.js.org/api/createSlice
 */
const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskSatate } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskSatate;
      }
    },
  },
});

// The actions contained in the slice are exported for usage in our components
// Japanese Comment
// スライスに含まれるアクションは、コンポーネントで使用するためにエクスポートされます
export const { updateTaskState } = TasksSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
// Japanese Comment
/* アプリケーションのストアの設定はここにあります。
 * ReduxのconfigureStoreについて詳しくはドキュメントを参照してください:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default store;