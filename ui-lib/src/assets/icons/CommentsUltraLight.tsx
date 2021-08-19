import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CommentsUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63989 4.944V17.304L6.62389 14.232H17.7119V4.944C17.7119 3.96 16.8719 3.144 15.9119 3.144H4.43989C3.45589 3.144 2.63989 3.96 2.63989 4.944ZM3.47989 15.624V4.944C3.47989 4.416 3.93589 3.96 4.48789 3.96H15.8639C16.4159 3.96 16.8719 4.416 16.8719 4.944V13.44H6.31189L3.47989 15.624ZM7.55989 15.984C7.55989 16.968 8.37589 17.784 9.35989 17.784H17.3759L21.3599 20.856V8.736C21.3599 7.752 20.5199 6.912 19.5359 6.912V7.752C20.0639 7.752 20.5199 8.232 20.5199 8.856V19.176L17.6639 16.968H9.50389C8.85589 16.968 8.39989 16.512 8.39989 15.984H7.55989Z"
        fill={color}
      />
    </svg>
  );
}

export default CommentsUltraLight;