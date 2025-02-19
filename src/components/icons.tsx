import { LucideProps, Menu, X } from "lucide-react";

export const Icons = {
  menu: Menu,
  close: X,
  logo: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 11l-10-5v6l10 5 10-5v-6l-10 5z" />
    </svg>
  ),
};

export type IconNames = keyof typeof Icons;

export function Icon({ name, ...props }: { name: IconNames } & LucideProps) {
  const LucideIcon = Icons[name];
  return <LucideIcon {...props} />;
}
