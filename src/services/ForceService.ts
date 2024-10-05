import { RouteError } from '@src/common/classes';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import { ForceType } from '@src/models/Force';
import ForceRepo from '@src/repos/ForceRepo';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<ForceType[]> {
  return ForceRepo.getAll();
}

/**
 * Add one user.
 */
function addOne(force: ForceType): Promise<void> {
  return ForceRepo.add(force);
}

/**
 * Update one user.
 */
async function updateOne(user: ForceType): Promise<void> {
  const persists = await ForceRepo.persists(user.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Return user
  return ForceRepo.update(user);
}

/**
 * Delete a user by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await ForceRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return ForceRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
