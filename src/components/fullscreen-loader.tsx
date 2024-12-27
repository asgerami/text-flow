import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
  className?: string;
}

export const FullscreenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LoaderIcon className="size-6 text-muted-foreground animate-spin " />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
