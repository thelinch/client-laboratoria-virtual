import { SweetAlertIcon } from "sweetalert2";

export interface Notificacion {
  severidad: SweetAlertIcon;
  detalle: string;
  resumen: string;
}
