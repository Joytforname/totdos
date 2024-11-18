export type Task = {
  label: string;
  checked: boolean;
  id: string;
};

export enum ActionType {
  add = 'add',
  mark = 'mark',
  delete = 'delete',
  deleteDone = 'deleteDone',
  filterDefault = 'filterDefault',
  filterActive = 'filterActive',
  filterCompleted = 'filterCompleted',
}

export enum FilterValue {
  all = 'all',
  active = 'active',
  completed = 'completed',
}