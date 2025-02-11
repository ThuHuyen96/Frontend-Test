export type IIcon = {
  key: string
  label: string
  icon: string
}

export type INotiContent = {
  title: string
  desc: string
  src_icon: string
  alt_icon: string
  isRead: boolean
  ids: string
}

export type ICountry = {
  id: string
  name: string
  code: string
}

export type INotiRequest = {
  type?: "success" | "error"
  message: string
  description?: string
}

export type IGeneral = {
  admin_email: string
  cancel_subscription_url: string
  affiliate: {
    code_num_limit: number
    min_withdrawal_limit: number
  }
}
  