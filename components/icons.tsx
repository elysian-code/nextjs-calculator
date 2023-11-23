import { cn } from "@/utils/cn";

interface IconProps {
  className?: string;
}
const baseClass = "h-4 w-4 text-gray-500";
const baseCn = (className?: string) => cn(baseClass, className);

const Icons = {
  Backspace: (props: IconProps) => (
    <svg
      className={baseCn(props.className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9 19q-.5 0-.938-.225t-.712-.625L3 12l4.35-6.15q.275-.4.713-.625T9 5h10q.825 0 1.413.588T21 7v10q0 .825-.588 1.413T19 19H9Zm10-2V7v10ZM9 17h10V7H9l-3.55 5L9 17Zm2.4-1l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"
      />
    </svg>
  ),
  Calculator: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={baseCn(props.className)}
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4H7m0 6v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2m-8 4v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2m-8 4v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2Z"
      />
    </svg>
  ),
  Close(props: IconProps) {
    return (
      <svg
        className={baseCn(props.className)}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        />
      </svg>
    );
  },
  ExpandUp: (props: IconProps) => (
    <svg
      className={baseCn(props.className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        d="M8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h7.885a1.25 1.25 0 1 0 0-2.5H12.25A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-7.885a1.25 1.25 0 1 0-2.5 0v7.885a3.75 3.75 0 0 1-3.75 3.75H24V29.25c0-2.9-2.35-5.25-5.25-5.25H8.5V12.25Zm0 14.25h10.25a2.75 2.75 0 0 1 2.75 2.75V39.5h-9.25a3.75 3.75 0 0 1-3.75-3.75V26.5ZM27 7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 1 1-2.5 0v-9.482L29.134 20.634a1.25 1.25 0 0 1-1.768-1.768L37.732 8.5H28.25c-.69 0-1.25-.56-1.25-1.25Z"
      />
    </svg>
  ),

  Menu: ({ className }: IconProps) => (
    <svg
      className={baseCn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      />
    </svg>
  ),
  Minimize(props: IconProps) {
    return (
      <svg
        className={cn(baseClass, props.className)}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            d="M3.755 12.5h16.492a.75.75 0 1 0 0-1.5H3.755a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  },
  PlusMinus: ({ className, ...props }: IconProps) => (
    <svg
      {...props}
      className={baseCn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 7.998H8v4H6v-4H2v-2h4v-4h2v4h4zm10 10h-8v-2h8zM18.5 4L4 18.5L5.5 20L20 5.5z"
      />
    </svg>
  ),
  SquareRoot: ({ className }: IconProps) => (
    <svg
      className={cn(baseClass, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11.76 16.83L14.59 14l-2.83-2.83l1.41-1.41L16 12.59l2.83-2.83l1.41 1.41L17.41 14l2.83 2.83l-1.41 1.41L16 15.41l-2.83 2.83l-1.41-1.41M2 11h3l2.29 5.4L10 6h12v2H11.55L8.68 19H6.22l-2.54-6H2v-2Z"
      />
    </svg>
  ),
  Windows: ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(baseClass, className)}
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 7h-3m3 0v3m0-3l-3.5 3.5M7 17h3m-3 0v-3m0 3l3.5-3.5"
        />
      </g>
    </svg>
  ),
};
export default Icons;
