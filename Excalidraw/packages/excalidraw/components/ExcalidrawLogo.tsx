import "./ExcalidrawLogo.scss";

function WandIcon() {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 879.64 221.58"
      style={{ width: "100%" }}
    >
      <defs>
        <style>
          {`
      .cls-1 {
        font-family: Quicksand-Bold, Quicksand;
        font-size: 129.84px;
        font-weight: 700;
      }

      .cls-1, .cls-2 {
        fill: #7133d5;
      }

      .cls-2 {
        stroke-width: 0px;
      }
      `}
        </style>
      </defs>
      <g id="Layer_2-2" data-name="Layer 2">
        <g>
          <text className="cls-1" transform="translate(203.07 182.24)">
            <tspan x="0" y="0">
              Magiscribe
            </tspan>
          </text>
          <g>
            <path
              className="cls-2"
              d="M135.71,18.22c-11.41.86-16.33,7.29-17.05,17.88-1.53-4.42-1.61-9.14-4.83-12.65-3.24-3.54-7.91-3.68-12.59-5.44,11.44-.64,16.63-6.94,17.14-18.02,1.05,10.66,5.59,17.47,17.32,18.22Z"
            />
            <path
              className="cls-2"
              d="M172.59,83.21c1.07-12.91.21-14.56-11.2-21.31,9.69,1.57,17.02-1.15,20.77-11.33-2.19,10.94,2.14,17.58,12.28,21.23-11.07-2.79-18.07,1.14-21.85,11.41Z"
            />
            <path
              className="cls-2"
              d="M132.78,86.04c5,4.92,10.21,5.57,16.32,1.77-4.39,4.93-6.15,9.97-2.09,16.15-5.41-4.82-10.61-5.26-16.56-1.33,4.89-5.05,6.33-10.26,2.33-16.58Z"
            />
            <path
              className="cls-2"
              d="M172.4,21.65c-.81,5.38,1.01,9.06,5.99,11.46-5.36-.53-9.3.99-11.67,6.12.38-5.3-.72-9.59-6.35-11.75,5.73.89,9.38-1.25,12.02-5.84Z"
            />
            <path
              className="cls-2"
              d="M134.17,46.86c2.62-2.64,3.51-5.34,2.35-9.02,2.78,2.33,5.62,3.63,9.26,2.01-2.39,2.87-3.94,5.81-2.15,9.62-2.82-2.51-5.65-3.95-9.45-2.61Z"
            />
            <path
              className="cls-2"
              d="M92.64,51.99c.23,3.46,2.29,5.36,5.78,7.55-4.35-.42-6.89.47-8.37,3.94-.45-3.11-1.28-5.72-5.02-7.27,3.54-.59,6.16-1.21,7.61-4.22Z"
            />
            <path
              className="cls-2"
              d="M6.39,193.28c-1.64,0-3.27-.62-4.52-1.87-2.49-2.49-2.49-6.54,0-9.03l94.46-94.46c2.5-2.49,6.54-2.49,9.03,0,2.49,2.49,2.49,6.54,0,9.03L10.9,191.41c-1.25,1.25-2.88,1.87-4.52,1.87Z"
            />
            <path
              className="cls-2"
              d="M96.37,104.19c-1.13,0-2.25-.43-3.11-1.29l-2.87-2.87c-1.71-1.71-1.71-4.5,0-6.22l29.98-29.98c.83-.83,1.93-1.29,3.11-1.29s2.28.46,3.11,1.29l2.87,2.87c.83.83,1.29,1.93,1.29,3.11s-.46,2.28-1.29,3.11l-29.98,29.98c-.86.86-1.98,1.29-3.11,1.29ZM123.47,65.23c-.46,0-.89.18-1.21.5l-29.98,29.98c-.67.67-.67,1.75,0,2.42l2.87,2.87c.67.67,1.75.67,2.42,0l29.98-29.98c.32-.32.5-.75.5-1.21s-.18-.89-.5-1.21h0s-2.87-2.88-2.87-2.88c-.32-.32-.75-.5-1.21-.5Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

type LogoSize = "xs" | "small" | "normal" | "large" | "custom";

interface LogoProps {
  size?: LogoSize;
  withText?: boolean;
  style?: React.CSSProperties;
  /**
   * If true, the logo will not be wrapped in a Link component.
   * The link prop will be ignored as well.
   * It will merely be a plain div.
   */
  isNotLink?: boolean;
}

export const ExcalidrawLogo = ({
  style,
  size = "small",
  withText,
}: LogoProps) => {
  return (
    <div className={`ExcalidrawLogo is-${size}`} style={style}>
      <WandIcon />
    </div>
  );
};
