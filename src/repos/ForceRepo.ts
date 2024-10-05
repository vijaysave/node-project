import { ForceType } from '@src/models/Force';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(id: number): Promise<ForceType | null> {
  const db = await orm.openDb();
  for (const Force of db.forces) {
    if (Force.id === id) {
      return Force;
    }
  }
  return null;
}

/**
 * See if a user with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();

  for (const force of db.forces) {
    if (force.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all users.
 */
async function getAll(): Promise<ForceType[]> {
  const db = await orm.openDb();
  return db.forces;
}

/**
 * Add one user.
 */
async function add(Forces: ForceType): Promise<void> {
  const db = await orm.openDb();
  Forces.id = getRandomInt();
  db.forces.push(Forces);
  return orm.saveDb(db);
}

/**
 * Update a user.
 */
async function update(force: ForceType): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].id === force.id) {
      const dbUser = db.forces[i];
      db.forces[i] = {
        ...dbUser,
        name: force.name,

      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one user.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.forces.length; i++) {
    if (db.forces[i].id === id) {
      db.forces.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
