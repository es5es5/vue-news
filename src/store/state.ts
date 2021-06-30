import { NewsItem } from "@/api"

const state = {
  news: [] as NewsItem[]
}

type RootSate = typeof state

export { state, RootSate }
