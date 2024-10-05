import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export type ForceType = {
  id: number;
  name: string;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  name?: string,
  id?: number, // id last cause usually set by db
): ForceType {
  return {
    id: (id ?? -1),
    name: (name ?? ''),

  };
}

/**
 * Get user instance from object.
 */
function from(param: object): ForceType {
  if (isForce(param)) {
    return new_(param.name, param.id);
  }
  throw new Error(INVALID_CONSTRUCTOR_PARAM);
}

/**
 * See if the param meets criteria to be a user.
 */
function isForce(arg: unknown): arg is ForceType {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    
    'name' in arg && typeof arg.name === 'string' 
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isForce,
} as const;
