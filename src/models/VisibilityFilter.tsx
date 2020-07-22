
export type VisiblityFilter = {
  id: string;
  displayName: string;
}

export const VisibilityFilters: { [filter: string]: VisiblityFilter } = {
  SHOW_ALL: {
    id: "show_all",
    displayName: "All"
  },
  SHOW_COMPLETED: {
    id: "show_completed",
    displayName: "Completed"
  },
  SHOW_ACTIVE: {
    id: "show_active",
    displayName: "Active"
  }
}