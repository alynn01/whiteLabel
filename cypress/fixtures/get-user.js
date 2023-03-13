import { stagingUsers, productionUsers, role } from "./users";

const users =
  Cypress.env("APP_ENV") === "production" ? productionUsers : stagingUsers;


const getUnkownUser = () => users.find((user) => user.role === role.unknown);

/**
 * @param {role} - role of the user
 */

const getProgramOwner = () =>
  users.find((user) => user.role === role.programOwner);

const getCardHolder = () =>
  users.find((user) => user.role === role.cardHolder);

const getAdmin = () =>
  users.find((user) => user.role === role.admin);

export {
  role,
  getCardHolder,
  getUnkownUser,
  getProgramOwner,
  getAdmin
};
