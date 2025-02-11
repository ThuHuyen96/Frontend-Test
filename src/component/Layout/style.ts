import { css } from "@emotion/css"

export const customNotiCss = css`
  .ant-popover-content {
    width: 100%;
    .ant-popover-inner {
      padding: 0;
    }
  }

  @media (min-width: 640px) {
    .ant-popover-content {
      width: 440px;
    }
  }
`
