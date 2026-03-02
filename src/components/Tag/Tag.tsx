import { Chip, Typography, styled } from "@mui/material";
import { StyledTagProps, TagProps } from "./types";
import styles from "./styles";

const StyledMuiChip = styled(Chip)<StyledTagProps>(styles);

const Tag = ({
  label,
  size = "xsmall",
  color = "success",
  uppercase,
  startIcon,
  disabled = false,
  ...rest
}: TagProps) => {
  const formattedLabel =
    typeof label === "string" && uppercase ? label.toUpperCase() : label;

  return (
    <StyledMuiChip
      data-testid="tag"
      label={
        <Typography variant="body4Semibold" sx={{ padding: "0px 4px" }}>
          {formattedLabel}
        </Typography>
      }
      size={size}
      style={{ borderRadius: "999px" }}
      color={color}
      icon={startIcon ?? undefined}
      disabled={disabled}
      {...rest}
    />
  );
};

Tag.displayName = "Tag";

export default Tag;
export type { TagProps };
