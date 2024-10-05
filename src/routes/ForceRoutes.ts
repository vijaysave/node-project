import HttpStatusCodes from '@src/common/HttpStatusCodes';
import ForceService from '@src/services/ForceService';
import ForceType from '@src/models/Force';

import { IReq, IRes } from './common/types';
import check from './common/check';


// **** Functions **** //

/**
 * Get all forces.
 */
async function getAll(_: IReq, res: IRes) {
  const forces = await ForceService.getAll();
  return res.status(HttpStatusCodes.OK).json({ forces });
}

/**
 * Add one force.
 */
async function add(req: IReq, res: IRes) {
  const force = check.isValid(req.body, 'force', ForceType.isForce);
  await ForceService.addOne(force);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one force.
 */
async function update(req: IReq, res: IRes) {
  const force = check.isValid(req.body, 'force', ForceType.isForce);
  await ForceService.updateOne(force);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one force.
 */
async function delete_(req: IReq, res: IRes) {
  const id = check.isNum(req.params, 'id');
  await ForceService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
