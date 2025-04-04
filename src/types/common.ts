/**
 * Common type for API responses
 */
export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

/**
 * Common pagination metadata
 */
export interface PaginationMeta {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
}

/**
 * Paginated response wrapper
 */
export interface PaginatedResponse<T> {
  items: T[]
  meta: PaginationMeta
}

/**
 * Common filter criteria interface
 */
export interface FilterCriteria {
  page?: number
  limit?: number
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
  search?: string
  [key: string]: any
}

/**
 * User preferences type
 */
export interface UserPreferences {
  theme: 'light' | 'dark'
  language?: string
  notifications?: boolean
}
