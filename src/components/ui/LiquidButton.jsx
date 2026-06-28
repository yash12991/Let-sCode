import React from 'react';
import './LiquidButton.css';

export function LiquidButton({
  className = '',
  children,
  onClick,
  ...props
}) {
  return (
    <button
      className={`liquid-button ${className}`}
      onClick={onClick}
      {...props}
    >
      <div
        className="liquid-bg-layer"
        style={{ filter: 'url("#container-glass")' }}
      />
      <div className="liquid-content-layer">
        {children}
      </div>
      <GlassFilter />
    </button>
  );
}

function GlassFilter() {
  return (
    <svg className="liquid-filter-svg" aria-hidden="true">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate turbulent noise for distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          {/* Blur the turbulence pattern slightly */}
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          {/* Displace the source graphic with the noise */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          {/* Apply overall blur on the final result */}
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          {/* Output the result */}
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
