export interface MaintenanceState {
  [key: string]: boolean;
}

export const maintenanceState: MaintenanceState = {
  home: false,
  'chi-siamo': false,
  regolamento: false,
  partnership: false,
  candidature: false,
  unban: false,
  utenti: false
};

export function getPageMaintenance(page: string) {
  return maintenanceState[page] ?? false;
}

export function setPageMaintenance(page: string, isActive: boolean) {
  maintenanceState[page] = isActive;
  return maintenanceState;
}

export function resetMaintenanceState() {
  Object.keys(maintenanceState).forEach((page) => {
    maintenanceState[page] = false;
  });
  return maintenanceState;
}
