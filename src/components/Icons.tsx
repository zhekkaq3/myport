import * as React from "react"


export const GithubIcon = ({ className, ...rest }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        className={`w-[30px] h-auto ${className}`}
        {...rest}
    >
        <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
)


export const Telegram = ({ className, ...rest }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            color: "#00f",
        }}
        viewBox="0 0 496 512"
        className={`w-[28px] h-auto ${className}`}
        {...rest}
    >
        <path
            fill="#00f"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm115 168.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7.2-.7.3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3.7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6.5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7 43.8 43.8 0 0 1 .5 9.9z"
        />
    </svg>
)


export const Instagram = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 50 50"
    className={`w-[30px] h-auto ${className}`}
        {...rest}
  >
    <path fill="currentColor" d="M16 3C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13H16zm21 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-12 3c6.07 0 11 4.93 11 11s-4.93 11-11 11-11-4.93-11-11 4.93-11 11-11zm0 2c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z" />
  </svg>
)


export const ExternalLink = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`w-[30px] h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
)

export const CircularText = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1440}
    viewBox="0 0 1080 1080"
    className={`w-[30px] h-auto ${className}`}
    {...rest}
  >
    <path d="M596.2 41.1c-.7 3.5-1.7 10.9-2.1 16.4-.5 5.5-1.4 11.8-2 14-.6 2.2-1.1 6.1-1.1 8.6s-.5 5.9-1 7.5c-.6 1.6-1.7 8.8-2.5 15.9-2 17.7-4 32.8-5.4 39.9-1.7 9.2-1.5 15.4.7 16 2.5.7 16.9 2.6 20.2 2.6 2.7 0 2.9-.3 3.5-4.8.3-2.6 1.3-9.2 2.1-14.7s1.9-13.8 2.4-18.5c1.3-11.5 2.8-22.7 4.5-33.5.8-5 1.7-11.7 2-15 .4-3.3 1-8 1.6-10.5 1.2-5.7 2.9-26.3 2.3-27-.3-.2-3.3-.8-6.7-1.1-3.4-.4-8.7-1-11.7-1.4l-5.6-.7-1.2 6.3zM515 65.7c-5 .9-13 3.5-13.5 4.4-.4.5-1.2.9-2 .9-2.2 0-9.8 5.5-14.3 10.4-5.2 5.6-9.2 13.5-9.2 18 0 1.9-.4 3.7-.9 4-1.6 1-2.3 9.9-1.1 14.6.6 2.5 1.5 6.3 1.9 8.5 1.1 5.3 3.6 10 8.5 15.8 4.3 5 14.9 12.7 17.7 12.7.9 0 3.1.8 5 1.7 2.7 1.4 6.1 1.8 16.9 1.8 11.6 0 14.4-.3 19.9-2.3 8.4-3 10.7-4.3 16.1-9.1l4.5-4-7.2-7.2-7.1-7.2-3.9 2.9c-6.6 5.1-10.8 6.5-19.7 6.5-9.7 0-15.5-2.1-20.9-7.6-2.8-2.9-6.4-9.3-5.4-9.6 1.6-.4 33.8-2.2 48.2-2.7 10.5-.4 19.6-1.1 20.3-1.5 1.5-1 1.5-6.7.1-12.2-.6-2.2-1.4-5.6-1.8-7.5-2.1-9.4-11.2-20.6-20.9-25.7-9.2-4.9-22.2-7.2-31.2-5.6zm14.7 20.4c6.9 2.4 12.9 8.4 13.9 13.5.3 1.9.4 3.8 0 4.1-.3.3-10.5.8-22.6 1-24.8.6-23.7 1-19.5-7.3 3-6 6.9-9.1 14.4-11.5 7.1-2.3 7-2.3 13.8.2zM452.5 72.5c-2.2.7-7.4 2.3-11.6 3.5l-7.6 2.2-1.2 11.7c-2.5 26.2-3.3 33.1-4.8 43.8-.9 6.2-1.7 11.3-1.9 11.3-.3 0-3-3.4-25.8-32.1C387.2 97.4 384.1 94 381.8 94c-1 0-4.6.9-8 2-3.5 1-8.5 2.5-11.2 3.2l-4.8 1.3 5.7 7c3.2 3.8 6.1 7.2 6.4 7.5.4.3 2 2.3 3.6 4.5s5.4 6.9 8.5 10.5c3.1 3.6 8.2 9.8 11.5 13.8 5.5 6.8 8.3 10.2 21.5 26.6l4.5 5.6 4.8-.5c2.6-.3 6.2-1.2 8-2 1.8-.8 4.9-1.7 6.9-2 6.9-1.1 7.6-2.5 8.8-17 .6-7.2 1.5-15.3 2.1-18 .5-2.8 1.2-10.2 1.5-16.5.3-6.3 1.1-14.4 1.9-18 1.5-7 4-29.8 3.4-30.4-.2-.2-2.2.2-4.4.9zM660.8 88.1c-11.4 1.8-23.8 12.4-29.9 25.6-2.7 5.8-2.9 6.8-2.9 19.6v13.5l3.7 7.2c3.7 7.1 11.2 15.2 17.1 18.4 12.9 6.9 25.7 10.3 35.1 9.2 22.6-2.6 38.4-18.1 42.1-41 1.1-6.8-.3-18.7-2.6-22.3-.8-1.2-1.4-2.7-1.4-3.3 0-1.8-7.6-11.5-12-15.3-3.9-3.3-9.8-6.6-18-10-3.7-1.6-24.8-2.7-31.2-1.6zm25.4 22.2c7.1 3.2 11.3 7.7 13.7 15 2 5.7 2 6.2.4 12.1-2.4 8.6-6.2 14.6-11.5 18.2-13.5 9.2-31.8 1.8-35.9-14.4-1.1-4.6-1.1-6.1.5-12 2.3-8.8 6-14 12.6-18 6.7-4 12.6-4.3 20.2-.9zM761.5 123.6c-1.5 1.9-5.6 7.9-9.1 13.2-3.5 5.3-8.6 13.1-11.4 17.2-18.6 27.5-44.4 66.8-44.7 68.1-.3 1 .8 2.4 2.9 3.7 1.8 1.1 6 3.9 9.3 6.1 3.3 2.3 6.7 4.1 7.6 4.1 1.4 0 6.1-6.2 12.4-16.4 4.4-7 9.4-14.2 10.7-15.4 1.2-.9 1.7-.4 2.7 2.6 3.4 9.9 11.9 18.5 23.7 23.9 5.3 2.4 7 2.7 17.4 2.7 10.2 0 12.1-.3 17-2.6 11.6-5.5 19.6-13.8 26.1-27.3 3.2-6.7 3.4-7.5 3.4-18 0-10.8-.1-11.1-3.9-18.7-4.8-9.4-11.7-16.5-20.9-21.3-6.4-3.3-7.4-3.5-16.4-3.5h-9.5l2.1-3.4c2.6-4.1 2.6-5.5.4-7.2-1.8-1.4-13.8-9.4-15.9-10.7-.7-.4-2.4.9-3.9 2.9zm26.5 36.9c10.2 3.6 16 11.6 16 22.4 0 6.9-2 11.8-7.6 18.8-9.1 11.1-25.9 11.2-35.9.1-6.9-7.6-7.2-19.7-.8-29.5 4.6-7 5.4-7.8 11.8-10.8 5.8-2.8 10.6-3.1 16.5-1zM314.5 124.8c-10 3.4-17 7.8-23.5 14.8-9.2 10.2-12.6 20-11.8 34.6.5 7.7 1.1 9.9 4.3 16.5 4.4 8.8 13.1 18.1 20.9 22 9.3 4.7 30.6 4.9 41.1.3 7.9-3.5 18-10.6 23-16.2 7.6-8.4 11.9-19.1 8.3-20.2-9.3-2.9-15.4-4.6-16.4-4.6-.6 0-1.7 1.3-2.2 3-3.7 10.4-18.2 20-30.1 20-5.1 0-11.6-2.6-14.4-5.7-1.7-2-1.7-2.1 2-4.3 2.1-1.3 5.8-3.4 8.3-4.8 2.5-1.3 6.4-3.7 8.8-5.3 2.4-1.6 4.5-2.9 4.8-2.9.7 0 19.7-11.2 20.4-11.9.3-.3 3.1-2 6.3-3.6 3.3-1.7 6.1-3.5 6.3-4.1 1.5-3.6-13-21-20.8-25-11.4-5.9-23-6.8-35.3-2.6zm18.6 19.3c2.1.7 5.2 2.6 6.9 4.4l3.2 3.3-12.3 7.2c-6.8 4-13.7 8-15.4 8.9-1.6.9-4.5 2.6-6.3 3.8-4.8 3.2-5.8 2.9-7.2-2.1-1-3.7-1-5.2.4-9.3 4.3-13 17.7-20 30.7-16.2zM213 175c-14.5 3.9-25.1 10.7-37.8 23.9-15.2 15.7-32.7 35.2-33 36.8-.5 2 .6 3.1 21.3 22.1 9.9 9.2 23.6 22 30.5 28.7 24.9 24.1 32 30.7 32.9 30.3.5-.1 5.1-4.8 10.3-10.3 5.1-5.6 14.3-15.5 20.5-22 13.3-14.4 14.9-16.3 19.3-25 4.1-7.9 6.1-15.1 6.7-24 1.1-17.8-3.9-30.9-16.4-43.4-16.2-16.1-35.7-22.3-54.3-17.1zm21.9 26.6c3.7 1.7 8.2 5.3 13.1 10.3 7.1 7.2 7.7 8.1 9.9 15.8l2.3 8.3-2.1 7.7c-1.2 4.6-3.6 10-5.8 13.3-4 6-22.2 25.2-23.5 24.8-.7-.3-25.6-23.4-45.2-41.9l-8.8-8.4 12-12.6c15.8-16.4 21.6-19.8 34.1-19.9 7 0 9.3.4 14 2.6zM847 208.9c-3 .9-7.5 2.7-10 4-6.5 3.4-17.5 15.1-20.8 21.9-2.4 5.2-2.7 6.7-2.7 18.2 0 13.1-.1 12.6 5.9 24.9 3.6 7.4 16.5 20.3 24.7 24.6 7 3.7 17.9 5.9 19.2 3.9.3-.5.7-4.9.8-9.9l.3-8.9-2.9-.7c-9.1-2-18.8-9.8-23.1-18.4-2.3-4.8-2.6-6.4-2.2-13 .3-5.9.8-7.9 2.4-9.6l2.1-2.1 8.9 10.3c7.7 8.9 20.5 23.2 32.3 36.1 1.9 2.1 4.1 3.8 5 3.8 2.8 0 13.7-12.1 17.2-19 3.3-6.3 3.4-6.9 3.4-18.5 0-11-.2-12.5-2.7-17.8-6.3-13.4-19.5-26-30.2-28.8-2.3-.6-5.5-1.5-7.2-2-4.5-1.3-14.1-.9-20.4 1zm25.8 22.5c6.6 3.4 11.4 9 13.6 15.9 1.8 5.8 1.8 5.9-.4 12-1.2 3.4-2.6 6.6-3.2 7.2-1 1-1.3.7-18-17.5-14.4-15.8-14.5-15.9-8.4-18.6 4.8-2.1 11.1-1.7 16.4 1zM927 290.4c-5.8 3.4-13 7.6-16.1 9.3-3.1 1.7-10.3 5.8-16 9-10.6 6.1-20.6 11.8-28.7 16.4-2.5 1.4-4.7 3-4.9 3.6-.3.8 2.4 6.2 9.4 18.6.7 1.2 1.4 2.6 1.6 3.1.2.5 4.1-1.3 8.8-4 4.6-2.7 9.5-5.5 10.9-6.2 1.4-.6 3.2-1.6 4-2.2 15-9.8 26.6-14 33.4-12 6.6 1.9 11.2 5.5 14.6 11.4 1.7 3.1 3.4 5.6 3.8 5.6 1.1 0 20.2-11.1 20.2-11.8 0-1.1-6.8-9.4-9.8-12.1-2.4-2.1-9.4-5.7-14.6-7.5-1.7-.6-1.7-.8.5-2.5 1.3-1 3.4-2.1 4.7-2.5 1.2-.4 2.2-1.2 2.2-1.8 0-.6-2.2-4.7-4.9-9.2-2.6-4.4-5.1-8.9-5.4-9.9-.4-.9-1.2-1.7-1.9-1.7-.7.1-6 2.9-11.8 6.4zM80.4 325.7c-.9 2.1-2 4.9-2.4 6.3-.5 1.4-1.6 4.3-2.4 6.5-2.7 7.2-2.4 7.8 5.7 10.4 7 2.3 9.1 3.1 17 6.5 2.1.9 4.2 1.6 4.8 1.6.6 0 3.2 1 6 2.1l4.9 2.1-5.3 3.7C97.9 372.4 91.4 387 92.2 402c.6 12.1 3.5 18.8 11.6 27.2 6.1 6.4 12.2 10.2 22.2 13.9 1.9.7 8.4 1.5 14.4 1.7 11.3.3 12.2.2 22.6-4.7 4.8-2.2 14-11.8 16.6-17.2 6.5-13.4 7.9-26.1 3.9-33.9-.8-1.6-1.5-3.1-1.5-3.5 0-.9 5.9-.5 6.5.5 1.6 2.6 3.5.3 6.9-8.6 2-5.3 3.6-10.2 3.6-11 0-2.1-3.5-3.8-17-8.4-6.9-2.4-12.9-4.6-13.5-5-.5-.4-2.6-1.1-4.5-1.5-1.9-.4-3.9-1-4.5-1.4-.5-.4-6.4-2.7-13-5-13.2-4.7-18.5-6.7-23-8.6-1.7-.7-4.6-1.6-6.5-2-1.9-.4-3.9-1.1-4.5-1.5-.5-.4-6.4-2.6-13-4.9-6.6-2.4-13-4.7-14.3-5.2-3.2-1.2-3-1.3-4.8 2.8zm68.9 47.5c6.9 2.7 15 10.7 16.1 15.9 2.2 11-1.5 21.2-9.8 26.6-4.4 3-5.5 3.3-12.7 3.3-8.6 0-14.2-2.1-20.8-7.6-11.7-9.8-8.6-30.4 5.7-37.9 6.2-3.2 13.6-3.3 21.5-.3zM1006.5 397.6c-7.1 6.4-15.7 14.2-19 17.3-3.3 3.1-8.6 7.8-11.7 10.4-3.2 2.7-9.3 8.1-13.5 12.1l-7.8 7.3-11.5 2.2c-6.3 1.2-14.9 2.9-19 3.7-4.1.9-8.5 1.8-9.7 2-2.1.4-2.2.5-.8 4.5.8 2.3 1.5 5.8 1.5 7.8.1 5 1.6 11.1 3.3 12.8 1.1 1.1 2.2 1.2 5.8.3 2.4-.6 8.5-1.8 13.4-2.5 5-.8 10.6-1.9 12.5-2.5 6.7-1.9 11.8-1 26 4.7 1.4.6 7.2 2.7 13 4.8 5.8 2 13.7 5 17.5 6.5 3.9 1.5 10.4 3.9 14.5 5.3 4.1 1.5 10.4 3.8 13.9 5.2 3.6 1.4 6.7 2.5 6.9 2.5 1 0-3.4-24-4.6-25.1-1.3-1.2-18.4-7.7-40.7-15.5-4.4-1.5-10-3.7-12.4-4.8l-4.4-1.9 2.9-2.5c1.6-1.3 6.1-5.4 9.9-9.1 3.9-3.6 10.4-9.5 14.5-13s10-8.7 13.1-11.6l5.7-5.2-.9-4.4c-1.2-5.5-3.9-21.1-3.9-22.2 0-1.7-2.1-.1-14.5 10.9zM90.7 461.4c-8.4 4.2-13.4 10-17.2 20.1-1.5 3.8-1.9 7.5-1.9 15 .1 10.4 1.6 15.7 6.4 22.5 2.9 4 2.5 4.7-2.2 4.6l-4.3-.1-.7 7.5c-.4 4.1-1 9.6-1.3 12.1l-.7 4.6 13.9 1.1c7.7.7 17.6 1.2 22.2 1.2 4.5 0 9 .4 9.9.9 2.7 1.4 40.9 3.3 43.1 2.2 1.6-.9 2-2.7 2.6-12.2.4-6.1.3-11.4-.1-11.9-.5-.4-10.8-1.3-22.9-2-12.1-.6-23.6-1.6-25.5-2.1-13.9-3.9-18.5-9.4-18.4-22 0-6.7.4-8.1 3-11.8 4.6-6.6 9.5-7.6 29.8-6.2 8.9.6 21.2 1.1 27.3 1.1h11.1l.4-10.8c.3-7.1 0-11.1-.7-12-2-2.2-13-3.2-41.5-3.8l-27.5-.5-4.8 2.5zM940.3 519c-2.9 1-6.6 2.8-8.2 3.9-7.5 5.4-12.7 20.3-11.8 33.7.6 8.3 2.3 12.7 6.7 17.7l3.2 3.7h-4.5c-2.4 0-4.9.6-5.5 1.2-.5.7-1.1 6.2-1.3 12.3l-.4 11 10 .6c5.5.4 21.2.7 34.9.8 24.8.1 24.9.1 30.1-2.4 8.1-4 12.3-9.3 16.6-21.3 2.4-6.8 3.5-24.7 2.1-33.7-1.5-9.4-5.3-19.2-7.8-20.2-1.9-.7-15.4 4.6-16.1 6.4-.3.8.5 4.2 1.8 7.6 2 5.1 2.4 8 2.4 16.7 0 9.8-.2 10.8-2.8 14.8-3 4.7-9 8.1-14 8.2h-2.9l.7-7.6c1.2-12.9 1.1-31.2-.3-32.6-.7-.7-1.2-2.4-1.2-3.9 0-4.3-9.4-15.8-13-15.9-.8 0-3.3-.7-5.5-1.5-5.2-1.9-7-1.8-13.2.5zm15.4 26.4c2.7 2.3 2.8 2.8 3.1 13.1.2 5.9.1 12.7-.3 15.1l-.6 4.4h-5.6c-5.3 0-5.9-.2-9.8-4.4-4.2-4.3-5.5-7.9-5.5-15.1 0-4.8 1.8-10 4.5-12.9 3.3-3.6 10.1-3.7 14.2-.2zM115.5 567.5c-.5.1-3.7 1.1-7 2-9.1 2.7-12.7 4.8-19.5 11.7-6.8 6.9-9.5 11.9-11.6 21.8-1.7 7.9-1.7 10.6-.3 18.4 2.3 12.6 6.5 21 14.4 28.5 7.7 7.4 14.5 10.8 24 12 34.7 4.3 58.2-20.2 53.6-55.7-.7-5.2-2-11.1-2.8-13.1-.8-2-2.3-5.4-3.3-7.6-2.4-5.6-11.6-15.5-14.4-15.5-1.4 0-3.6 2-6.9 6.2-5.1 6.7-5.7 9-2.9 11 7.6 5.6 12.7 25 8.9 34-2.2 5.2-6 10-9.6 12.1-3 1.8-3.1 1.8-3.7 0-.3-1-1-2.9-1.4-4.3-.5-1.4-1.1-5-1.4-8-.3-3-1.3-8.4-2-12-.8-3.6-2.4-12.1-3.6-19-3.1-18.1-4.7-23-7.3-22.9-1.2 0-2.6.2-3.2.4zm-3.5 29c0 1.4.7 4.2 1.5 6.2.8 1.9 1.5 5.4 1.5 7.7s.6 6.6 1.4 9.6c.8 3 1.8 8.3 2.2 11.7l.7 6.3h-3.8c-4.7 0-11.3-3.7-14.7-8.2-4.8-6.3-6.1-15.7-3.2-24.1 2.9-8.6 14.4-15.9 14.4-9.2zM926.8 623.8c-2.6.9-5.3 2.3-6 2.9-.6.7-1.7 1.3-2.4 1.3-2.6 0-10.3 10.2-13.4 17.8-4.2 9.9-4.6 20.6-1.1 29.1 1.8 4.5 1.9 5.2.5 4.7-.8-.3-3.2-.9-5.3-1.2l-3.7-.6-2.3 7.4c-1.3 4-2.9 9-3.7 11.2-.8 2.1-1.4 3.9-1.2 4 .6.4 62.4 20.9 65.3 21.6 1.7.5 6.8 2.2 11.4 3.9 4.7 1.7 8.7 2.8 9 2.6.9-.9 8.1-21.5 8.1-23.2 0-.6-3.9-2.3-8.7-3.8-4.9-1.5-9.7-3.1-10.8-3.6-1.1-.4-7.6-2.7-14.5-5-15-5-16.6-5.8-20.6-10.1-4.1-4.2-6.4-8.9-6.4-12.7 0-4.3 3.8-13.6 6.9-16.5 4-3.8 10.8-5.3 17.3-3.7 5.4 1.3 16.7 4.8 20.3 6.2 5.1 2.1 26.5 8.9 27.9 8.9 1.8 0 5.5-7.1 5.6-10.5 0-1.2.4-2.5.9-3 .5-.6 1.4-2.7 1.9-4.8 1.3-4.6 0-6.1-6.1-7.8-2.3-.6-5.8-1.7-7.7-2.4-1.9-.8-6.6-2.4-10.5-3.6-3.8-1.2-8.4-2.8-10.2-3.5-1.7-.8-3.9-1.4-4.8-1.4-.9 0-2.6-.5-3.8-1.2-4-2.1-16.2-4.8-21.7-4.7-3 0-7.6.8-10.2 1.7zM136.5 674.4c-8.8 3.8-9.7 4.5-8.9 6.9.3 1.2 1.4 4 2.4 6.2 1.1 2.2 4.6 10.7 7.8 19 6.9 17.3 6.2 16.8 17.7 11.6 6.6-3 6.8-3.1 6.2-6.4-.3-1.8-1.8-6.2-3.4-9.7-2.8-6.1-6.8-15.9-10.3-25.4-1.9-5-4.2-5.4-11.5-2.2zM190.2 713.4c-6 7.7-6 8-1.3 13.1 3.6 3.9 4.1 5 4.1 9.3 0 4-.5 5.3-3 7.7-1.6 1.5-4.5 3.8-6.5 4.9-1.9 1.2-7.6 4.6-12.6 7.6-9.6 5.8-15 8.9-15.9 9-.3 0-2.4-3-4.5-6.6-2.2-3.6-4.7-7.8-5.6-9.2-1.9-3.1-2.7-3.1-8.3.6-2.3 1.5-5 3.2-6 3.8-3.7 2-4.1 3.9-1.7 7.3 2.7 3.7 8.1 13.7 8.1 14.9 0 .4-4 3.1-9 6s-9 5.5-9 5.7c0 .2 1.7 3.2 3.8 6.6 2 3.3 4.5 7.6 5.4 9.3 3 5.8 4 6 9.9 2.5 3-1.7 6.1-3.7 6.9-4.4.8-.7 2.7-1.6 4.2-2 2.4-.6 2.9-.2 5.5 4.4 1.5 2.8 3.3 5.2 3.8 5.5 1.2.4 16.5-8.5 16.5-9.6 0-.4-1.3-3-3-5.8-1.6-2.8-3-5.5-3-5.9 0-.8 21.1-14 29.3-18.3 4.9-2.7 12.5-9.5 15.4-14 2.5-3.6 2.7-4.8 2.6-13.7 0-9.4-.2-10.1-3.7-16.7-5.2-9.6-12.6-17.4-16.4-17.4-1 0-3.6 2.4-6 5.4zM879 716.7c-7.1 9.7-9.2 13.2-8.8 14.9.2 1 9.1 7.6 20.2 15 22.8 15.2 23.1 15.5 25.9 20.9 6.6 12.9-3 30.5-16.7 30.5-5.8 0-9.7-2.1-32.1-17.1l-22-14.8-6.2 9.6c-3.5 5.3-6.3 10.4-6.3 11.3 0 2 1.4 3 25.5 19.1 23.1 15.4 24.9 16.3 34 18.5 6.9 1.6 7.6 1.6 13.7 0 11.7-3.2 21.1-11.6 26.6-23.7 2.6-5.6 4.7-16.8 3.4-18.1-.9-.9-.5-4.8.5-4.8.2 0 7.7 4.9 16.7 10.9s17.3 11.2 18.4 11.5c1.7.6 3.1-.9 8.5-9 3.6-5.4 6.3-10.3 6-11-.4-1.1-12.3-9.3-39.9-27.4-4.5-3-13.6-9.1-20-13.5-6.5-4.4-13.2-8.9-15-10-1.8-1.1-8.4-5.5-14.6-9.8-6.3-4.2-12.1-7.7-12.9-7.7-.8 0-3 2.1-4.9 4.7zM219.3 781.2c-25.3 24.2-29.9 29.2-33.3 36.5-2.9 6.1-3.2 7.4-2.8 14.8.4 10.3 3.7 17.4 12.1 25.7 6.7 6.7 15.1 11.3 22.8 12.3 2.7.4 4.9 1 4.9 1.3 0 .3-1.4 2.1-3.2 3.9l-3.2 3.3 7 7.3c10.4 11 9.3 11.1 20.9-.1 31.4-29.9 53.5-51.7 53.5-52.6 0-.6-3.8-5.1-8.4-10.1l-8.3-8.9-17.4 17c-9.6 9.3-19.6 18.2-22.2 19.8-10.3 5.9-22.5 2.6-29.3-8-6.8-10.7-5-14.3 20.5-39l19.6-19.2-2-2.3c-6-6.7-14.9-15.9-15.6-15.9-.4 0-7.4 6.4-15.6 14.2zM808.8 812.4c-11.9 4.3-23.9 13.6-30.4 23.3-4 6.1-8.3 17-8.4 21.4 0 2.5.4 2.7 5.8 3.3 3.1.4 7.3.9 9.2 1.2l3.5.5 4.2-9c4.4-9.3 8.3-13.5 16.8-18 5.6-3 16.6-2.9 21.5 0l3.4 2.1-2.9 2.5c-1.7 1.4-6.6 5.7-10.9 9.6-4.4 4-11.4 10.1-15.5 13.6-14.5 12.2-22.1 19.4-22.1 20.8 0 2.7 12.4 13.8 19.5 17.3 6.8 3.4 7.3 3.5 19 3.5 9.2 0 12.7-.4 15-1.6 1.7-1 5.2-2.7 7.8-4 11.8-5.8 23.6-22.3 25.8-36 2.6-16.3-5-34.1-19.2-44.5-9.1-6.7-12.2-7.7-24.4-8.1-9.7-.3-11.8 0-17.7 2.1zm38 39.7c.8 1.5 1.2 5.1 1 9.6-.3 6.1-.8 7.8-3.4 11.5-4.7 6.4-12.4 10.8-19.4 10.8-5.6 0-14-3.3-14-5.5 0-1 8.4-8.9 19.5-18.3 3.3-2.8 7.6-6.4 9.5-8.1 3.9-3.5 4.9-3.5 6.8 0zM310.4 854c-18.2 2.7-35.4 20.6-37.2 38.9-1.8 17.6 2.5 29.9 14.6 41.2 3.6 3.4 7.9 6.8 9.6 7.5 1.7.8 3.8 1.8 4.6 2.3 5.2 2.9 8.5 3.9 16.1 5.1 7.5 1.1 9.7 1.1 16.5-.3 4.4-.9 9.7-2.5 11.9-3.6 9.4-4.5 18.6-15.5 22.5-27 1.8-5.1 2.1-7.9 1.8-16.9-.3-9.7-.6-11.3-3.6-17.2-4.3-8.7-9.9-15-18-20.4-12.2-8.1-26-11.5-38.8-9.6zm19.3 23.1c8.9 2.3 17.3 13.4 17.3 22.8 0 9.6-10 23.6-18.4 25.9-12.3 3.3-23.8-1.4-29.1-11.8-3.8-7.6-3.2-14.4 2.2-24.5 5.7-10.6 16.2-15.3 28-12.4zM739.4 863.3l-10.2 5.2 12 24 11.9 24-.3 6.6c-.3 5.4-.9 7.3-3.2 10.3-5.6 7.3-15.1 11.3-22.6 9.3-6.7-1.7-10.3-6.7-22.6-31.4-6.8-13.6-12.2-23.3-13-23.3-1.8 0-22.5 10.3-22.2 11 .2.4 6.3 12.7 13.7 27.5 11.2 22.2 14.3 27.7 18.5 31.9 8.2 8.4 12.2 10 24.1 10 7.2 0 10.9-.4 13-1.5 1.7-.9 5.2-2.7 7.9-4 6.4-3.2 13.6-10.4 16.5-16.8 1.4-2.8 2.7-5.1 3.1-5.1.3 0 1.4 1.6 2.3 3.5 1.1 2.3 2.4 3.5 3.7 3.5 2.8 0 20-8.8 20-10.3 0-.6-8.8-18.8-19.6-40.4-14.3-28.9-20-39.3-21.2-39.2-.9 0-6.3 2.3-11.8 5.2zM416.6 897.8c-.6 1-4.8 13.1-9.1 26.2-6.6 20.1-10 25.9-16.9 29.1-5.1 2.3-14.2 2.4-19.6.3-2.4-1-4.5-1.3-4.9-.8-.5.5-2.5 5.5-4.4 11.1l-3.6 10.3 2.7.7c1.5.5 7.4.8 13.2.7 8.1 0 11.3-.4 13.8-1.8 1.9-.9 3.6-1.5 3.8-1.3.3.2-.3 2.6-1.1 5.2-1.8 5.3-1.6 5.9 3.5 7.4 1.9.5 6.2 1.9 9.4 3 3.3 1.2 6.4 2.1 7.1 2.1 1.5 0 2.9-3 7.6-17.5 2.2-6.6 4.4-12.8 4.9-13.7.5-1 1.4-3.4 1.9-5.5 1.4-5.6 7.2-22.4 8.7-25.5.8-1.4 1.4-3.6 1.4-4.8 0-1.2.6-3.4 1.4-4.8 2.3-4.4 4.8-12.1 4.2-13-.5-.9-15.9-6.5-20.8-7.6-1.5-.3-2.9-.2-3.2.2zM641.5 903.9c-9.5 2.5-10 2.8-10.3 5.5-.2 1.5.5 5.8 1.6 9.4 1.1 3.7 2.3 8.2 2.7 9.9.4 1.8 1.1 3.5 1.6 3.8.5.4.9 1.9.9 3.4 0 2.7 2.8 13 5.6 20.4.8 2 1.4 4.8 1.4 6.2 0 1.3.5 3.6 1.2 5.2.6 1.5 1.7 5 2.4 7.8 3.4 13.8 4.6 18.1 5.3 18.8.5.5 3.1.2 5.7-.7 2.7-.8 7.8-2.3 11.3-3.3 3.5-1 6.6-2.4 6.8-3 .5-1.3-2.8-14.2-11.1-42.8-.8-2.8-1.7-6.6-2.1-8.5-.4-1.9-1.1-4-1.5-4.5-.4-.6-1.2-3.5-1.8-6.5-1.4-6.4-4.4-17.3-6-21.3-1.4-3.2-1-3.2-13.7.2zM598.2 911.7c-3.6.7-8.9 6.5-10.1 10.9-2.2 8.2 1.7 16.1 9.7 19.6 3.9 1.8 4.9 1.9 8.9.7 11.2-3.1 16.3-13.2 11.4-22.7-3.6-7-11.5-10.4-19.9-8.5zM508.7 920.2c-.3 2.4-1.2 9.7-2.1 16.3-.8 6.6-1.8 14.4-2.2 17.3l-.7 5.4-8.1-.7c-4.5-.3-10.1-1-12.6-1.5-5.7-1.2-33-4.3-33.5-3.9-.5.6-3.3 20.4-2.9 20.8.2.3 5.3.8 11.3 1.2 6.1.4 11.4 1 12 1.3.6.4 7 1.4 14.3 2.2 7.3.8 14.1 1.7 15.1 2 1.9.6 1.9 3.1-.4 20.4-1.6 11.9-1.2 11.4-8.3 10.6-16.7-1.7-33.9-3.7-40.6-4.6-4.1-.6-9.1-1-11-.8-3.8.3-3.6-.3-5.6 15-.6 4.6-.6 4.8 1.9 4.8 1.4 0 3.8.5 5.2 1 1.5.6 7.1 1.4 12.4 1.9 5.3.5 12.5 1.4 16.1 2 3.6.6 11 1.5 16.5 2.1 5.5.5 15.4 1.6 21.9 2.4 6.6.8 12.5 1.2 13.2.9 1.3-.5 2.4-5.8 2.4-12.1 0-2.4.5-6.2 1-8.5.6-2.3 1.7-10.7 2.6-18.7.8-8 2.1-19.5 2.8-25.5.8-6.1 1.9-15.7 2.5-21.5.7-5.8 1.6-13 2.1-16s1.2-7.6 1.5-10.2l.7-4.6-7.9-.6c-4.3-.4-10-1.1-12.6-1.6-6.7-1.4-6.4-1.5-7 3.2zM668.2 1005.3c-1.8.5-4.8 2.7-6.7 4.9-3 3.2-3.5 4.5-3.5 8.7 0 6.5 4.3 12.7 9.5 13.7 8.8 1.6 18.2-2.2 20.6-8.4 1.6-4 .6-12.8-1.7-15.3-4-4.5-11.1-5.9-18.2-3.6z" />
  </svg>
)




