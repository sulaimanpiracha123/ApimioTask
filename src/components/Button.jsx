import classNames from "classnames"

const Button = ({
  type = "button",
  text,
  isSecondary,
  isPrimary = !isSecondary,
  isSmall,
  isLarge,
  icon,
  isNormal = isSmall || isLarge ? false : true,
  disabled = false,
  ...attributes
}) => {
  const classConditions = {
    "bg-primary px-4 py-1.5 text-white": isPrimary && isNormal,
    "bg-primary px-3 py-1 text-white": isPrimary && isSmall,
    "bg-primary px-5 py-2 text-white": isPrimary && isLarge,
    "bg-secondary px-4 py-1.5 text-primary": isSecondary && isNormal,
    "bg-secondary px-3 py-1 text-primary": isSecondary && isSmall,
    "bg-secondary px-5 py-2 text-primary": isSecondary && isLarge,
    "cursor-not-allowed opacity-10": disabled,
  }
  return (
    <div>
      <button
        type={type}
        className={classNames("rounded text-center text-sm font-semibold tracking-wide", classConditions)}
        disabled={disabled}
        {...attributes}
      >
        <div className={classNames("flex items-center gap-1")}>
          {icon ? <span>{icon}</span> : null}
          <span>{text}</span>
        </div>
      </button>
    </div>
  )
}

export default Button
