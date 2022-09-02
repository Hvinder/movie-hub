const Arrow = () => {
  return (
    <svg
      width="23"
      height="38"
      viewBox="0 0 23 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_104_47)">
        <path
          d="M10.8031 1.15322C11.194 0.763063 11.8271 0.763652 12.2173 1.15454L18.5753 7.52443C18.9655 7.91531 18.9649 8.54848 18.574 8.93864C18.1831 9.3288 17.55 9.32821 17.1598 8.93732L11.5082 3.2752L5.84609 8.92679C5.4552 9.31695 4.82203 9.31636 4.43187 8.92547C4.04171 8.53458 4.0423 7.90142 4.43319 7.51126L10.8031 1.15322ZM10.4841 29.1281L10.5095 1.86006L12.5095 1.86192L12.4841 29.13L10.4841 29.1281Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_104_47"
          x="0.139648"
          y="0.860962"
          width="22.728"
          height="36.269"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_104_47"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_104_47"
            result="effect2_dropShadow_104_47"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_104_47"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Arrow;
