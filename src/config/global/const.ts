
export const VIEWABLE = true

export type ITF_TYPE = 'I' | 'E'
export type STATUS = 'hidden' | 'pending' | 'active'

export class ROUTES {
  static I = {
    TEST: '/i/test',  // test ROUTE
    INDEX: '/i',  // GET
    CREATE: '/i/create',  // GET
    STORE: '/i',  // POST
    DELETEDS: '/i/deleted',  // GET
    DELETED: '/i/deleted/:id',  // GET
    RESTORE: '/i/deleted',  // PATCH
    DESTROY: '/i/deleted',  // DELETE
    SHOW: '/i/:id',  // GET
    EDIT: '/i/:id/edit',  // GET
    UPDATE: '/i/:id',  // PUT
    DELETE: '/i/:id',  // PATCH
  }

  static E = {
    INDEX: '/e',  // GET
    DETAIL: '/e/:slug',  // GET
  }
}