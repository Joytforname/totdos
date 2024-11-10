export type Task = {
  label: string;
  checked: boolean;
  id: string;
};

export enum Action {
  add = 'add',
  mark = 'mark',
  delete = 'delete',
  deleteDone = 'deleteDone',
}

export enum FilterValue {
  all = 'all',
  active = 'active',
  completed = 'completed',
}