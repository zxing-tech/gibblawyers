import { ComponentPropsWithoutRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL, WHATSAPP_NUMBER_DISPLAY } from "@/constants/contact";

type ButtonBaseProps = ComponentPropsWithoutRef<typeof Button>;

interface WhatsAppButtonProps extends ButtonBaseProps {
  href?: string;
  label?: string;
}

const WhatsAppButton = ({
  href = WHATSAPP_URL,
  label = `WhatsApp Us (${WHATSAPP_NUMBER_DISPLAY})`,
  className,
  children,
  size = "lg",
  variant = "default",
  disabled,
  ...props
}: WhatsAppButtonProps) => {
  const isOutline = variant === "outline";
  const visualClasses = isOutline
    ? "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
    : "bg-[#25D366] hover:bg-[#128C7E] text-white";

  const content = (
    <div className="flex items-center justify-center gap-2">
      <WhatsAppIcon className="h-5 w-5" />
      <span>{children ?? label}</span>
    </div>
  );

  return (
    <Button
      asChild={!disabled}
      size={size}
      variant={variant}
      disabled={disabled}
      className={cn(
        "font-semibold flex items-center justify-center gap-2 min-h-[44px]",
        visualClasses,
        disabled ? "pointer-events-none opacity-70" : "",
        className
      )}
      {...props}
    >
      {disabled ? (
        <span>{content}</span>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          {content}
        </a>
      )}
    </Button>
  );
};

export default WhatsAppButton;
