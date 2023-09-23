const admin = '/admin';
const gateways = `${admin}/gateways`;
const peripherals = `${admin}/peripherals`;

const gatewaysRoutes = {
  gateways,
  gatewaysCreate: `${gateways}/create`,
  gatewaysShow: (id: number) => `${gateways}/${id}/show`,
  gatewaysEdit: (id: number) => `${gateways}/${id}/edit`,
};

const peripheralsRoutes = {
  peripherals,
  peripheralsCreate: `${peripherals}/create`,
  peripheralsShow: (id: number) => `${peripherals}/${id}/show`,
  peripheralsEdit: (id: number) => `${peripherals}/${id}/edit`,
};

export const routes = {
  default: '/',
  login: '/login',
  dashboard: admin,
  ...gatewaysRoutes,
  ...peripheralsRoutes,
};
