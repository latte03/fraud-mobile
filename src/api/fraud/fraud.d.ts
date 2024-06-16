export interface PublicizeType {
  id: string
  name: string
  createTime: Date
  updateTime: Date
}

export interface Publicize {
  id: string
  title: string
  img: string
  content: string
  views: number
  createTime: Date
  updateTime: Date
  typeId: string
  recommend: number
}
