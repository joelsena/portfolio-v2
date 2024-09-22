export function TextWithBorder({ borderColor = "#FF8600", text = "", className = "", offset = 2, ...rest }) {
  return (
    <div className={`relative font-moonhouse ${className} flex-none`} {...rest}>
      <span
        className={`block absolute`}
        style={{
          color: borderColor,
          top: offset + "px",
          left: `-${offset}px`,
          textShadow: `-1px -1px 0 ${borderColor},
            1px -1px 0 ${borderColor},
            -1px 1px 0 ${borderColor},
            1px 1px 0 ${borderColor}`,
        }}
      >
        {text}
      </span>

      <span
        className="block relative"
        style={{
          textShadow: `-1px -1px 0 ${borderColor},
            1px -1px 0 ${borderColor},
            -1px 1px 0 ${borderColor},
            1px 1px 0 ${borderColor}`,
        }}
      >
        {text}
      </span>
    </div>
  );
}
