/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },

    Forces: {
      Base: '/forces',
      Get: '/forces/all',
      Add: '/forces/add',
      Update: '/forces/update',
      Delete: '/forces/delete/:id',
    },
} as const;
