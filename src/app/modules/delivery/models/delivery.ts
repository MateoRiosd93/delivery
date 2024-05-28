export interface Delivery {
  name: string;
  departament: string;
  city: string;
  address: string;
  deliveryDate?: string;
}

export const INITIAL_DELIVERY: Delivery = {
  name: "",
  departament: "",
  city: "",
  address: "",
  deliveryDate: "",
}
