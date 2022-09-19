export interface PersonPaged {
    recordCount: number
    currentPage: number
    recordsPerPage: number
    totalPages: number
    data: Person[]
  }
  
  export interface Person {
    id: number
    createDate: string
    lastUpdatedOn: string
    deleted: boolean
    name: string
    lastName: string
    nationality: string
    zipCode: string
    state: string
    city: string
    address: string
    email: string
    phone: string
    federalId: string
  }
  