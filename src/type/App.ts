export type IPagination = {
  page: number
  size: number
  total: number
  pageCount: number
}

export type IComment = {
  id: number
  bookid: number
  ratings: number
  comments: string
  userid: number
  created: number
}
