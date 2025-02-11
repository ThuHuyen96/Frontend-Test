"use client"

import Banner from "@/component/home/Banner"
import Block1 from "@/component/home/Block1"
import ExplorerBlock from "@/component/home/ExplorerBlock"
import InstagramBlock from "@/component/home/InstagramBlock"
import InteractiveMap from "@/component/InteractiveMap"
import { titleState } from "@/recoil"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"

type Props = {
  data?: any
}

export default function HomeContainer({ data }: Props) {
  const setPageTitle = useSetRecoilState(titleState)

  useEffect(() => {
    setPageTitle("Dashboard")
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <Banner />
      <Block1 data={data?.bloc_1} />
      <InteractiveMap />
      <InstagramBlock data={data?.bloc_5} />
      <ExplorerBlock data={data?.bloc_6} />
    </div>
  )
}
